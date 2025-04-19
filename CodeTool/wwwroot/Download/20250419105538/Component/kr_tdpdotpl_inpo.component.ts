import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdotpl_inpo } from 'src/app/shared/MES/kr_tdpdotpl_inpo.model';
import { kr_tdpdotpl_inpoService } from 'src/app/shared/MES/kr_tdpdotpl_inpo.service';

@Component({
  selector: 'app-kr_tdpdotpl_inpo',
  templateUrl: './kr_tdpdotpl_inpo.component.html',
  styleUrls: ['./kr_tdpdotpl_inpo.component.css']
})
export class kr_tdpdotpl_inpoComponent implements OnInit {

  @ViewChild('kr_tdpdotpl_inpoSort') kr_tdpdotpl_inpoSort: MatSort;
  @ViewChild('kr_tdpdotpl_inpoPaginator') kr_tdpdotpl_inpoPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdotpl_inpoService: kr_tdpdotpl_inpoService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdpdotpl_inpoSearch();
  }
  kr_tdpdotpl_inpoSearch() {
    this.kr_tdpdotpl_inpoService.SearchAll(this.kr_tdpdotpl_inpoSort, this.kr_tdpdotpl_inpoPaginator);
  }
  kr_tdpdotpl_inpoSave(element: kr_tdpdotpl_inpo) {
    this.kr_tdpdotpl_inpoService.FormData = element;
    this.NotificationService.warn(this.kr_tdpdotpl_inpoService.ComponentSaveAll(this.kr_tdpdotpl_inpoSort, this.kr_tdpdotpl_inpoPaginator));
  }
  kr_tdpdotpl_inpoDelete(element: kr_tdpdotpl_inpo) {
    this.kr_tdpdotpl_inpoService.BaseParameter.ID = element.PDOTPL_INPO_IDX;
    this.NotificationService.warn(this.kr_tdpdotpl_inpoService.ComponentDeleteAll(this.kr_tdpdotpl_inpoSort, this.kr_tdpdotpl_inpoPaginator));
  }
  kr_tdpdotpl_inpoAdd(element: kr_tdpdotpl_inpo) {
    this.kr_tdpdotpl_inpoService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_tdpdotpl_inpoDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_tdpdotpl_inpoSearch();
    });
  }
}
