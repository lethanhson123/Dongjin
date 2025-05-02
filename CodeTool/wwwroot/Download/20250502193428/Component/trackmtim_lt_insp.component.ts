import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { trackmtim_lt_insp } from 'src/app/shared/MES/trackmtim_lt_insp.model';
import { trackmtim_lt_inspService } from 'src/app/shared/MES/trackmtim_lt_insp.service';

@Component({
  selector: 'app-trackmtim_lt_insp',
  templateUrl: './trackmtim_lt_insp.component.html',
  styleUrls: ['./trackmtim_lt_insp.component.css']
})
export class trackmtim_lt_inspComponent implements OnInit {

  @ViewChild('trackmtim_lt_inspSort') trackmtim_lt_inspSort: MatSort;
  @ViewChild('trackmtim_lt_inspPaginator') trackmtim_lt_inspPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public trackmtim_lt_inspService: trackmtim_lt_inspService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.trackmtim_lt_inspSearch();
  }
  trackmtim_lt_inspSearch() {
    this.trackmtim_lt_inspService.SearchAll(this.trackmtim_lt_inspSort, this.trackmtim_lt_inspPaginator);
  }
  trackmtim_lt_inspSave(element: trackmtim_lt_insp) {
    this.trackmtim_lt_inspService.FormData = element;
    this.NotificationService.warn(this.trackmtim_lt_inspService.ComponentSaveAll(this.trackmtim_lt_inspSort, this.trackmtim_lt_inspPaginator));
  }
  trackmtim_lt_inspDelete(element: trackmtim_lt_insp) {
    this.trackmtim_lt_inspService.BaseParameter.ID = element.LT_INSP_IDX;
    this.NotificationService.warn(this.trackmtim_lt_inspService.ComponentDeleteAll(this.trackmtim_lt_inspSort, this.trackmtim_lt_inspPaginator));
  }
  trackmtim_lt_inspAdd(element: trackmtim_lt_insp) {
    this.trackmtim_lt_inspService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(trackmtim_lt_inspDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.trackmtim_lt_inspSearch();
    });
  }
}
