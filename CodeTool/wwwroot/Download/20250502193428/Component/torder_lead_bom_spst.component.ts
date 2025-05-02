import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom_spst } from 'src/app/shared/MES/torder_lead_bom_spst.model';
import { torder_lead_bom_spstService } from 'src/app/shared/MES/torder_lead_bom_spst.service';

@Component({
  selector: 'app-torder_lead_bom_spst',
  templateUrl: './torder_lead_bom_spst.component.html',
  styleUrls: ['./torder_lead_bom_spst.component.css']
})
export class torder_lead_bom_spstComponent implements OnInit {

  @ViewChild('torder_lead_bom_spstSort') torder_lead_bom_spstSort: MatSort;
  @ViewChild('torder_lead_bom_spstPaginator') torder_lead_bom_spstPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bom_spstService: torder_lead_bom_spstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_lead_bom_spstSearch();
  }
  torder_lead_bom_spstSearch() {
    this.torder_lead_bom_spstService.SearchAll(this.torder_lead_bom_spstSort, this.torder_lead_bom_spstPaginator);
  }
  torder_lead_bom_spstSave(element: torder_lead_bom_spst) {
    this.torder_lead_bom_spstService.FormData = element;
    this.NotificationService.warn(this.torder_lead_bom_spstService.ComponentSaveAll(this.torder_lead_bom_spstSort, this.torder_lead_bom_spstPaginator));
  }
  torder_lead_bom_spstDelete(element: torder_lead_bom_spst) {
    this.torder_lead_bom_spstService.BaseParameter.ID = element.SPST_IDX;
    this.NotificationService.warn(this.torder_lead_bom_spstService.ComponentDeleteAll(this.torder_lead_bom_spstSort, this.torder_lead_bom_spstPaginator));
  }
  torder_lead_bom_spstAdd(element: torder_lead_bom_spst) {
    this.torder_lead_bom_spstService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_lead_bom_spstDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_lead_bom_spstSearch();
    });
  }
}
