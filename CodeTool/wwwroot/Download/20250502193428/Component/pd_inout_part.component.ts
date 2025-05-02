import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_inout_part } from 'src/app/shared/MES/pd_inout_part.model';
import { pd_inout_partService } from 'src/app/shared/MES/pd_inout_part.service';

@Component({
  selector: 'app-pd_inout_part',
  templateUrl: './pd_inout_part.component.html',
  styleUrls: ['./pd_inout_part.component.css']
})
export class pd_inout_partComponent implements OnInit {

  @ViewChild('pd_inout_partSort') pd_inout_partSort: MatSort;
  @ViewChild('pd_inout_partPaginator') pd_inout_partPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_inout_partService: pd_inout_partService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_inout_partSearch();
  }
  pd_inout_partSearch() {
    this.pd_inout_partService.SearchAll(this.pd_inout_partSort, this.pd_inout_partPaginator);
  }
  pd_inout_partSave(element: pd_inout_part) {
    this.pd_inout_partService.FormData = element;
    this.NotificationService.warn(this.pd_inout_partService.ComponentSaveAll(this.pd_inout_partSort, this.pd_inout_partPaginator));
  }
  pd_inout_partDelete(element: pd_inout_part) {
    this.pd_inout_partService.BaseParameter.ID = element.PD_INPUT_PART_IDX;
    this.NotificationService.warn(this.pd_inout_partService.ComponentDeleteAll(this.pd_inout_partSort, this.pd_inout_partPaginator));
  }
  pd_inout_partAdd(element: pd_inout_part) {
    this.pd_inout_partService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pd_inout_partDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pd_inout_partSearch();
    });
  }
}
