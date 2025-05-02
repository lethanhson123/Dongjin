import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_rackmtin } from 'src/app/shared/MES/ttc_rackmtin.model';
import { ttc_rackmtinService } from 'src/app/shared/MES/ttc_rackmtin.service';

@Component({
  selector: 'app-ttc_rackmtin',
  templateUrl: './ttc_rackmtin.component.html',
  styleUrls: ['./ttc_rackmtin.component.css']
})
export class ttc_rackmtinComponent implements OnInit {

  @ViewChild('ttc_rackmtinSort') ttc_rackmtinSort: MatSort;
  @ViewChild('ttc_rackmtinPaginator') ttc_rackmtinPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_rackmtinService: ttc_rackmtinService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttc_rackmtinSearch();
  }
  ttc_rackmtinSearch() {
    this.ttc_rackmtinService.SearchAll(this.ttc_rackmtinSort, this.ttc_rackmtinPaginator);
  }
  ttc_rackmtinSave(element: ttc_rackmtin) {
    this.ttc_rackmtinService.FormData = element;
    this.NotificationService.warn(this.ttc_rackmtinService.ComponentSaveAll(this.ttc_rackmtinSort, this.ttc_rackmtinPaginator));
  }
  ttc_rackmtinDelete(element: ttc_rackmtin) {
    this.ttc_rackmtinService.BaseParameter.ID = element.TRACK_IDX;
    this.NotificationService.warn(this.ttc_rackmtinService.ComponentDeleteAll(this.ttc_rackmtinSort, this.ttc_rackmtinPaginator));
  }
  ttc_rackmtinAdd(element: ttc_rackmtin) {
    this.ttc_rackmtinService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttc_rackmtinDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttc_rackmtinSearch();
    });
  }
}
