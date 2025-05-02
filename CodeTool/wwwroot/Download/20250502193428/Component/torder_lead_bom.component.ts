import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom } from 'src/app/shared/MES/torder_lead_bom.model';
import { torder_lead_bomService } from 'src/app/shared/MES/torder_lead_bom.service';

@Component({
  selector: 'app-torder_lead_bom',
  templateUrl: './torder_lead_bom.component.html',
  styleUrls: ['./torder_lead_bom.component.css']
})
export class torder_lead_bomComponent implements OnInit {

  @ViewChild('torder_lead_bomSort') torder_lead_bomSort: MatSort;
  @ViewChild('torder_lead_bomPaginator') torder_lead_bomPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bomService: torder_lead_bomService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_lead_bomSearch();
  }
  torder_lead_bomSearch() {
    this.torder_lead_bomService.SearchAll(this.torder_lead_bomSort, this.torder_lead_bomPaginator);
  }
  torder_lead_bomSave(element: torder_lead_bom) {
    this.torder_lead_bomService.FormData = element;
    this.NotificationService.warn(this.torder_lead_bomService.ComponentSaveAll(this.torder_lead_bomSort, this.torder_lead_bomPaginator));
  }
  torder_lead_bomDelete(element: torder_lead_bom) {
    this.torder_lead_bomService.BaseParameter.ID = element.LEAD_INDEX;
    this.NotificationService.warn(this.torder_lead_bomService.ComponentDeleteAll(this.torder_lead_bomSort, this.torder_lead_bomPaginator));
  }
  torder_lead_bomAdd(element: torder_lead_bom) {
    this.torder_lead_bomService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_lead_bomDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_lead_bomSearch();
    });
  }
}
