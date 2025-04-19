import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_part } from 'src/app/shared/MES/ttc_part.model';
import { ttc_partService } from 'src/app/shared/MES/ttc_part.service';

@Component({
  selector: 'app-ttc_part',
  templateUrl: './ttc_part.component.html',
  styleUrls: ['./ttc_part.component.css']
})
export class ttc_partComponent implements OnInit {

  @ViewChild('ttc_partSort') ttc_partSort: MatSort;
  @ViewChild('ttc_partPaginator') ttc_partPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_partService: ttc_partService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttc_partSearch();
  }
  ttc_partSearch() {
    this.ttc_partService.SearchAll(this.ttc_partSort, this.ttc_partPaginator);
  }
  ttc_partSave(element: ttc_part) {
    this.ttc_partService.FormData = element;
    this.NotificationService.warn(this.ttc_partService.ComponentSaveAll(this.ttc_partSort, this.ttc_partPaginator));
  }
  ttc_partDelete(element: ttc_part) {
    this.ttc_partService.BaseParameter.ID = element.TTC_PART_IDX;
    this.NotificationService.warn(this.ttc_partService.ComponentDeleteAll(this.ttc_partSort, this.ttc_partPaginator));
  }
  ttc_partAdd(element: ttc_part) {
    this.ttc_partService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttc_partDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttc_partSearch();
    });
  }
}
