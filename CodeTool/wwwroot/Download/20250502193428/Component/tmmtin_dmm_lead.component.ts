import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm_lead } from 'src/app/shared/MES/tmmtin_dmm_lead.model';
import { tmmtin_dmm_leadService } from 'src/app/shared/MES/tmmtin_dmm_lead.service';

@Component({
  selector: 'app-tmmtin_dmm_lead',
  templateUrl: './tmmtin_dmm_lead.component.html',
  styleUrls: ['./tmmtin_dmm_lead.component.css']
})
export class tmmtin_dmm_leadComponent implements OnInit {

  @ViewChild('tmmtin_dmm_leadSort') tmmtin_dmm_leadSort: MatSort;
  @ViewChild('tmmtin_dmm_leadPaginator') tmmtin_dmm_leadPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmm_leadService: tmmtin_dmm_leadService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtin_dmm_leadSearch();
  }
  tmmtin_dmm_leadSearch() {
    this.tmmtin_dmm_leadService.SearchAll(this.tmmtin_dmm_leadSort, this.tmmtin_dmm_leadPaginator);
  }
  tmmtin_dmm_leadSave(element: tmmtin_dmm_lead) {
    this.tmmtin_dmm_leadService.FormData = element;
    this.NotificationService.warn(this.tmmtin_dmm_leadService.ComponentSaveAll(this.tmmtin_dmm_leadSort, this.tmmtin_dmm_leadPaginator));
  }
  tmmtin_dmm_leadDelete(element: tmmtin_dmm_lead) {
    this.tmmtin_dmm_leadService.BaseParameter.ID = element.TMMTIN_DMM_IDX;
    this.NotificationService.warn(this.tmmtin_dmm_leadService.ComponentDeleteAll(this.tmmtin_dmm_leadSort, this.tmmtin_dmm_leadPaginator));
  }
  tmmtin_dmm_leadAdd(element: tmmtin_dmm_lead) {
    this.tmmtin_dmm_leadService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tmmtin_dmm_leadDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tmmtin_dmm_leadSearch();
    });
  }
}
