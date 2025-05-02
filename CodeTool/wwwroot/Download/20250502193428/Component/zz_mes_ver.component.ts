import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zz_mes_ver } from 'src/app/shared/MES/zz_mes_ver.model';
import { zz_mes_verService } from 'src/app/shared/MES/zz_mes_ver.service';

@Component({
  selector: 'app-zz_mes_ver',
  templateUrl: './zz_mes_ver.component.html',
  styleUrls: ['./zz_mes_ver.component.css']
})
export class zz_mes_verComponent implements OnInit {

  @ViewChild('zz_mes_verSort') zz_mes_verSort: MatSort;
  @ViewChild('zz_mes_verPaginator') zz_mes_verPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zz_mes_verService: zz_mes_verService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.zz_mes_verSearch();
  }
  zz_mes_verSearch() {
    this.zz_mes_verService.SearchAll(this.zz_mes_verSort, this.zz_mes_verPaginator);
  }
  zz_mes_verSave(element: zz_mes_ver) {
    this.zz_mes_verService.FormData = element;
    this.NotificationService.warn(this.zz_mes_verService.ComponentSaveAll(this.zz_mes_verSort, this.zz_mes_verPaginator));
  }
  zz_mes_verDelete(element: zz_mes_ver) {
    this.zz_mes_verService.BaseParameter.ID = element.VER_IDX;
    this.NotificationService.warn(this.zz_mes_verService.ComponentDeleteAll(this.zz_mes_verSort, this.zz_mes_verPaginator));
  }
  zz_mes_verAdd(element: zz_mes_ver) {
    this.zz_mes_verService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(zz_mes_verDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.zz_mes_verSearch();
    });
  }
}
