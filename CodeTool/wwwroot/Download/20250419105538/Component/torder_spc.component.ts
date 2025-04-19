import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_spc } from 'src/app/shared/MES/torder_spc.model';
import { torder_spcService } from 'src/app/shared/MES/torder_spc.service';

@Component({
  selector: 'app-torder_spc',
  templateUrl: './torder_spc.component.html',
  styleUrls: ['./torder_spc.component.css']
})
export class torder_spcComponent implements OnInit {

  @ViewChild('torder_spcSort') torder_spcSort: MatSort;
  @ViewChild('torder_spcPaginator') torder_spcPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_spcService: torder_spcService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_spcSearch();
  }
  torder_spcSearch() {
    this.torder_spcService.SearchAll(this.torder_spcSort, this.torder_spcPaginator);
  }
  torder_spcSave(element: torder_spc) {
    this.torder_spcService.FormData = element;
    this.NotificationService.warn(this.torder_spcService.ComponentSaveAll(this.torder_spcSort, this.torder_spcPaginator));
  }
  torder_spcDelete(element: torder_spc) {
    this.torder_spcService.BaseParameter.ID = element.SPC_IDX;
    this.NotificationService.warn(this.torder_spcService.ComponentDeleteAll(this.torder_spcSort, this.torder_spcPaginator));
  }
  torder_spcAdd(element: torder_spc) {
    this.torder_spcService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_spcDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_spcSearch();
    });
  }
}
