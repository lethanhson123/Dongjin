import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom_excl } from 'src/app/shared/MES/torder_lead_bom_excl.model';
import { torder_lead_bom_exclService } from 'src/app/shared/MES/torder_lead_bom_excl.service';

@Component({
  selector: 'app-torder_lead_bom_excl',
  templateUrl: './torder_lead_bom_excl.component.html',
  styleUrls: ['./torder_lead_bom_excl.component.css']
})
export class torder_lead_bom_exclComponent implements OnInit {

  @ViewChild('torder_lead_bom_exclSort') torder_lead_bom_exclSort: MatSort;
  @ViewChild('torder_lead_bom_exclPaginator') torder_lead_bom_exclPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bom_exclService: torder_lead_bom_exclService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_lead_bom_exclSearch();
  }
  torder_lead_bom_exclSearch() {
    this.torder_lead_bom_exclService.SearchAll(this.torder_lead_bom_exclSort, this.torder_lead_bom_exclPaginator);
  }
  torder_lead_bom_exclSave(element: torder_lead_bom_excl) {
    this.torder_lead_bom_exclService.FormData = element;
    this.NotificationService.warn(this.torder_lead_bom_exclService.ComponentSaveAll(this.torder_lead_bom_exclSort, this.torder_lead_bom_exclPaginator));
  }
  torder_lead_bom_exclDelete(element: torder_lead_bom_excl) {
    this.torder_lead_bom_exclService.BaseParameter.ID = element.LEAD_INDEX;
    this.NotificationService.warn(this.torder_lead_bom_exclService.ComponentDeleteAll(this.torder_lead_bom_exclSort, this.torder_lead_bom_exclPaginator));
  }
  torder_lead_bom_exclAdd(element: torder_lead_bom_excl) {
    this.torder_lead_bom_exclService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_lead_bom_exclDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_lead_bom_exclSearch();
    });
  }
}
