import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_ver02_po } from 'src/app/shared/MES/tsbom_ver02_po.model';
import { tsbom_ver02_poService } from 'src/app/shared/MES/tsbom_ver02_po.service';

@Component({
  selector: 'app-tsbom_ver02_po',
  templateUrl: './tsbom_ver02_po.component.html',
  styleUrls: ['./tsbom_ver02_po.component.css']
})
export class tsbom_ver02_poComponent implements OnInit {

  @ViewChild('tsbom_ver02_poSort') tsbom_ver02_poSort: MatSort;
  @ViewChild('tsbom_ver02_poPaginator') tsbom_ver02_poPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_ver02_poService: tsbom_ver02_poService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_ver02_poSearch();
  }
  tsbom_ver02_poSearch() {
    this.tsbom_ver02_poService.SearchAll(this.tsbom_ver02_poSort, this.tsbom_ver02_poPaginator);
  }
  tsbom_ver02_poSave(element: tsbom_ver02_po) {
    this.tsbom_ver02_poService.FormData = element;
    this.NotificationService.warn(this.tsbom_ver02_poService.ComponentSaveAll(this.tsbom_ver02_poSort, this.tsbom_ver02_poPaginator));
  }
  tsbom_ver02_poDelete(element: tsbom_ver02_po) {
    this.tsbom_ver02_poService.BaseParameter.ID = element.BOM_IDX;
    this.NotificationService.warn(this.tsbom_ver02_poService.ComponentDeleteAll(this.tsbom_ver02_poSort, this.tsbom_ver02_poPaginator));
  }
  tsbom_ver02_poAdd(element: tsbom_ver02_po) {
    this.tsbom_ver02_poService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsbom_ver02_poDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsbom_ver02_poSearch();
    });
  }
}
