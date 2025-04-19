import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { trackmtim } from 'src/app/shared/MES/trackmtim.model';
import { trackmtimService } from 'src/app/shared/MES/trackmtim.service';

@Component({
  selector: 'app-trackmtim',
  templateUrl: './trackmtim.component.html',
  styleUrls: ['./trackmtim.component.css']
})
export class trackmtimComponent implements OnInit {

  @ViewChild('trackmtimSort') trackmtimSort: MatSort;
  @ViewChild('trackmtimPaginator') trackmtimPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public trackmtimService: trackmtimService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.trackmtimSearch();
  }
  trackmtimSearch() {
    this.trackmtimService.SearchAll(this.trackmtimSort, this.trackmtimPaginator);
  }
  trackmtimSave(element: trackmtim) {
    this.trackmtimService.FormData = element;
    this.NotificationService.warn(this.trackmtimService.ComponentSaveAll(this.trackmtimSort, this.trackmtimPaginator));
  }
  trackmtimDelete(element: trackmtim) {
    this.trackmtimService.BaseParameter.ID = element.TRACK_IDX;
    this.NotificationService.warn(this.trackmtimService.ComponentDeleteAll(this.trackmtimSort, this.trackmtimPaginator));
  }
  trackmtimAdd(element: trackmtim) {
    this.trackmtimService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(trackmtimDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.trackmtimSearch();
    });
  }
}
