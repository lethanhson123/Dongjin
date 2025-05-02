import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_cmpny_part } from 'src/app/shared/MES/pd_cmpny_part.model';
import { pd_cmpny_partService } from 'src/app/shared/MES/pd_cmpny_part.service';

@Component({
  selector: 'app-pd_cmpny_part',
  templateUrl: './pd_cmpny_part.component.html',
  styleUrls: ['./pd_cmpny_part.component.css']
})
export class pd_cmpny_partComponent implements OnInit {

  @ViewChild('pd_cmpny_partSort') pd_cmpny_partSort: MatSort;
  @ViewChild('pd_cmpny_partPaginator') pd_cmpny_partPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_cmpny_partService: pd_cmpny_partService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_cmpny_partSearch();
  }
  pd_cmpny_partSearch() {
    this.pd_cmpny_partService.SearchAll(this.pd_cmpny_partSort, this.pd_cmpny_partPaginator);
  }
  pd_cmpny_partSave(element: pd_cmpny_part) {
    this.pd_cmpny_partService.FormData = element;
    this.NotificationService.warn(this.pd_cmpny_partService.ComponentSaveAll(this.pd_cmpny_partSort, this.pd_cmpny_partPaginator));
  }
  pd_cmpny_partDelete(element: pd_cmpny_part) {
    this.pd_cmpny_partService.BaseParameter.ID = element.PD_CMPNY_PART_IDX;
    this.NotificationService.warn(this.pd_cmpny_partService.ComponentDeleteAll(this.pd_cmpny_partSort, this.pd_cmpny_partPaginator));
  }
  pd_cmpny_partAdd(element: pd_cmpny_part) {
    this.pd_cmpny_partService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pd_cmpny_partDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pd_cmpny_partSearch();
    });
  }
}
