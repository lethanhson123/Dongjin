import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl_aloc } from 'src/app/shared/MES/tdpdotpl_aloc.model';
import { tdpdotpl_alocService } from 'src/app/shared/MES/tdpdotpl_aloc.service';

@Component({
  selector: 'app-tdpdotpl_aloc',
  templateUrl: './tdpdotpl_aloc.component.html',
  styleUrls: ['./tdpdotpl_aloc.component.css']
})
export class tdpdotpl_alocComponent implements OnInit {

  @ViewChild('tdpdotpl_alocSort') tdpdotpl_alocSort: MatSort;
  @ViewChild('tdpdotpl_alocPaginator') tdpdotpl_alocPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotpl_alocService: tdpdotpl_alocService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotpl_alocSearch();
  }
  tdpdotpl_alocSearch() {
    this.tdpdotpl_alocService.SearchAll(this.tdpdotpl_alocSort, this.tdpdotpl_alocPaginator);
  }
  tdpdotpl_alocSave(element: tdpdotpl_aloc) {
    this.tdpdotpl_alocService.FormData = element;
    this.NotificationService.warn(this.tdpdotpl_alocService.ComponentSaveAll(this.tdpdotpl_alocSort, this.tdpdotpl_alocPaginator));
  }
  tdpdotpl_alocDelete(element: tdpdotpl_aloc) {
    this.tdpdotpl_alocService.BaseParameter.ID = element.PDOTPL_IDX;
    this.NotificationService.warn(this.tdpdotpl_alocService.ComponentDeleteAll(this.tdpdotpl_alocSort, this.tdpdotpl_alocPaginator));
  }
  tdpdotpl_alocAdd(element: tdpdotpl_aloc) {
    this.tdpdotpl_alocService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdotpl_alocDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdotpl_alocSearch();
    });
  }
}
