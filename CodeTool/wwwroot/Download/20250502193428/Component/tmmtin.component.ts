import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin } from 'src/app/shared/MES/tmmtin.model';
import { tmmtinService } from 'src/app/shared/MES/tmmtin.service';

@Component({
  selector: 'app-tmmtin',
  templateUrl: './tmmtin.component.html',
  styleUrls: ['./tmmtin.component.css']
})
export class tmmtinComponent implements OnInit {

  @ViewChild('tmmtinSort') tmmtinSort: MatSort;
  @ViewChild('tmmtinPaginator') tmmtinPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtinService: tmmtinService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtinSearch();
  }
  tmmtinSearch() {
    this.tmmtinService.SearchAll(this.tmmtinSort, this.tmmtinPaginator);
  }
  tmmtinSave(element: tmmtin) {
    this.tmmtinService.FormData = element;
    this.NotificationService.warn(this.tmmtinService.ComponentSaveAll(this.tmmtinSort, this.tmmtinPaginator));
  }
  tmmtinDelete(element: tmmtin) {
    this.tmmtinService.BaseParameter.ID = element.MTIN_IDX;
    this.NotificationService.warn(this.tmmtinService.ComponentDeleteAll(this.tmmtinSort, this.tmmtinPaginator));
  }
  tmmtinAdd(element: tmmtin) {
    this.tmmtinService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tmmtinDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tmmtinSearch();
    });
  }
}
