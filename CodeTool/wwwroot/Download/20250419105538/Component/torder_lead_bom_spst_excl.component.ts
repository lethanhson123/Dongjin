import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom_spst_excl } from 'src/app/shared/MES/torder_lead_bom_spst_excl.model';
import { torder_lead_bom_spst_exclService } from 'src/app/shared/MES/torder_lead_bom_spst_excl.service';

@Component({
  selector: 'app-torder_lead_bom_spst_excl',
  templateUrl: './torder_lead_bom_spst_excl.component.html',
  styleUrls: ['./torder_lead_bom_spst_excl.component.css']
})
export class torder_lead_bom_spst_exclComponent implements OnInit {

  @ViewChild('torder_lead_bom_spst_exclSort') torder_lead_bom_spst_exclSort: MatSort;
  @ViewChild('torder_lead_bom_spst_exclPaginator') torder_lead_bom_spst_exclPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bom_spst_exclService: torder_lead_bom_spst_exclService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_lead_bom_spst_exclSearch();
  }
  torder_lead_bom_spst_exclSearch() {
    this.torder_lead_bom_spst_exclService.SearchAll(this.torder_lead_bom_spst_exclSort, this.torder_lead_bom_spst_exclPaginator);
  }
  torder_lead_bom_spst_exclSave(element: torder_lead_bom_spst_excl) {
    this.torder_lead_bom_spst_exclService.FormData = element;
    this.NotificationService.warn(this.torder_lead_bom_spst_exclService.ComponentSaveAll(this.torder_lead_bom_spst_exclSort, this.torder_lead_bom_spst_exclPaginator));
  }
  torder_lead_bom_spst_exclDelete(element: torder_lead_bom_spst_excl) {
    this.torder_lead_bom_spst_exclService.BaseParameter.ID = element.SPST_IDX;
    this.NotificationService.warn(this.torder_lead_bom_spst_exclService.ComponentDeleteAll(this.torder_lead_bom_spst_exclSort, this.torder_lead_bom_spst_exclPaginator));
  }
  torder_lead_bom_spst_exclAdd(element: torder_lead_bom_spst_excl) {
    this.torder_lead_bom_spst_exclService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_lead_bom_spst_exclDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_lead_bom_spst_exclSearch();
    });
  }
}
