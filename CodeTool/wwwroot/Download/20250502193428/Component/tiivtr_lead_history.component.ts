import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_lead_history } from 'src/app/shared/MES/tiivtr_lead_history.model';
import { tiivtr_lead_historyService } from 'src/app/shared/MES/tiivtr_lead_history.service';

@Component({
  selector: 'app-tiivtr_lead_history',
  templateUrl: './tiivtr_lead_history.component.html',
  styleUrls: ['./tiivtr_lead_history.component.css']
})
export class tiivtr_lead_historyComponent implements OnInit {

  @ViewChild('tiivtr_lead_historySort') tiivtr_lead_historySort: MatSort;
  @ViewChild('tiivtr_lead_historyPaginator') tiivtr_lead_historyPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_lead_historyService: tiivtr_lead_historyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_lead_historySearch();
  }
  tiivtr_lead_historySearch() {
    this.tiivtr_lead_historyService.SearchAll(this.tiivtr_lead_historySort, this.tiivtr_lead_historyPaginator);
  }
  tiivtr_lead_historySave(element: tiivtr_lead_history) {
    this.tiivtr_lead_historyService.FormData = element;
    this.NotificationService.warn(this.tiivtr_lead_historyService.ComponentSaveAll(this.tiivtr_lead_historySort, this.tiivtr_lead_historyPaginator));
  }
  tiivtr_lead_historyDelete(element: tiivtr_lead_history) {
    this.tiivtr_lead_historyService.BaseParameter.ID = element.IV_IDX;
    this.NotificationService.warn(this.tiivtr_lead_historyService.ComponentDeleteAll(this.tiivtr_lead_historySort, this.tiivtr_lead_historyPaginator));
  }
  tiivtr_lead_historyAdd(element: tiivtr_lead_history) {
    this.tiivtr_lead_historyService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivtr_lead_historyDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivtr_lead_historySearch();
    });
  }
}
