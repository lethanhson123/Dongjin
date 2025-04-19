import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_lead_fg } from 'src/app/shared/MES/tiivtr_lead_fg.model';
import { tiivtr_lead_fgService } from 'src/app/shared/MES/tiivtr_lead_fg.service';

@Component({
  selector: 'app-tiivtr_lead_fg',
  templateUrl: './tiivtr_lead_fg.component.html',
  styleUrls: ['./tiivtr_lead_fg.component.css']
})
export class tiivtr_lead_fgComponent implements OnInit {

  @ViewChild('tiivtr_lead_fgSort') tiivtr_lead_fgSort: MatSort;
  @ViewChild('tiivtr_lead_fgPaginator') tiivtr_lead_fgPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_lead_fgService: tiivtr_lead_fgService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_lead_fgSearch();
  }
  tiivtr_lead_fgSearch() {
    this.tiivtr_lead_fgService.SearchAll(this.tiivtr_lead_fgSort, this.tiivtr_lead_fgPaginator);
  }
  tiivtr_lead_fgSave(element: tiivtr_lead_fg) {
    this.tiivtr_lead_fgService.FormData = element;
    this.NotificationService.warn(this.tiivtr_lead_fgService.ComponentSaveAll(this.tiivtr_lead_fgSort, this.tiivtr_lead_fgPaginator));
  }
  tiivtr_lead_fgDelete(element: tiivtr_lead_fg) {
    this.tiivtr_lead_fgService.BaseParameter.ID = element.IV_IDX;
    this.NotificationService.warn(this.tiivtr_lead_fgService.ComponentDeleteAll(this.tiivtr_lead_fgSort, this.tiivtr_lead_fgPaginator));
  }
  tiivtr_lead_fgAdd(element: tiivtr_lead_fg) {
    this.tiivtr_lead_fgService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivtr_lead_fgDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivtr_lead_fgSearch();
    });
  }
}
