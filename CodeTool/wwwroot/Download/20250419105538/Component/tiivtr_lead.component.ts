import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_lead } from 'src/app/shared/MES/tiivtr_lead.model';
import { tiivtr_leadService } from 'src/app/shared/MES/tiivtr_lead.service';

@Component({
  selector: 'app-tiivtr_lead',
  templateUrl: './tiivtr_lead.component.html',
  styleUrls: ['./tiivtr_lead.component.css']
})
export class tiivtr_leadComponent implements OnInit {

  @ViewChild('tiivtr_leadSort') tiivtr_leadSort: MatSort;
  @ViewChild('tiivtr_leadPaginator') tiivtr_leadPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_leadService: tiivtr_leadService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_leadSearch();
  }
  tiivtr_leadSearch() {
    this.tiivtr_leadService.SearchAll(this.tiivtr_leadSort, this.tiivtr_leadPaginator);
  }
  tiivtr_leadSave(element: tiivtr_lead) {
    this.tiivtr_leadService.FormData = element;
    this.NotificationService.warn(this.tiivtr_leadService.ComponentSaveAll(this.tiivtr_leadSort, this.tiivtr_leadPaginator));
  }
  tiivtr_leadDelete(element: tiivtr_lead) {
    this.tiivtr_leadService.BaseParameter.ID = element.IV_IDX;
    this.NotificationService.warn(this.tiivtr_leadService.ComponentDeleteAll(this.tiivtr_leadSort, this.tiivtr_leadPaginator));
  }
  tiivtr_leadAdd(element: tiivtr_lead) {
    this.tiivtr_leadService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivtr_leadDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivtr_leadSearch();
    });
  }
}
