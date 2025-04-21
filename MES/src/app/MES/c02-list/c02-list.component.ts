import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';
import { WMPPLAYComponent } from '../wmp-play/wmp-play.component';

import { tscode } from 'src/app/shared/MES/tscode.model';
import { tscodeService } from 'src/app/shared/MES/tscode.service';
import { tuser_log } from 'src/app/shared/MES/tuser_log.model';
import { tuser_logService } from 'src/app/shared/MES/tuser_log.service';
import { torderlist } from 'src/app/shared/MES/torderlist.model';
import { torderlistService } from 'src/app/shared/MES/torderlist.service';
import { tsnon_oper_mitor } from 'src/app/shared/MES/tsnon_oper_mitor.model';
import { tsnon_oper_mitorService } from 'src/app/shared/MES/tsnon_oper_mitor.service';


import { tsnon_oper } from 'src/app/shared/MES/tsnon_oper.model';
import { tsnon_operService } from 'src/app/shared/MES/tsnon_oper.service';
import { C02STOPComponent } from '../c02-stop/c02-stop.component';
import { C02COUNTComponent } from '../c02-count/c02-count.component';

@Component({
  selector: 'app-c02-list',
  templateUrl: './c02-list.component.html',
  styleUrls: ['./c02-list.component.css']
})
export class C02LISTComponent {

  @ViewChild('torderlistSortFilter') torderlistSortFilter: MatSort;
  @ViewChild('torderlistPaginatorFilter') torderlistPaginatorFilter: MatPaginator;

  IsSeletAll: boolean = false;


  constructor(
    public Dialog: MatDialog,
    public DialogRef: MatDialogRef<C02LISTComponent>,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,
    public tscodeService: tscodeService,
    public tuser_logService: tuser_logService,
    public torderlistService: torderlistService,
    public tsnon_oper_mitorService: tsnon_oper_mitorService,
    public tsnon_operService: tsnon_operService,
  ) {
  }


  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlistService.BaseParameter.SearchString = "ZA801";
    this.torderlistService.BaseParameter.Account = "25041801";
    this.torderlistService.BaseParameter.SearchString004 = "";
    this.tsnon_operService.BaseParameter.SearchString001 = "S";
    this.torderlistSearch();
    this.tuser_logSearch();
    this.tsnon_oper_mitorSearch();
    this.tscodeServiceSearch();
    this.Search();
  }

  Search() {
    this.torderlistSearch01();
  }
  Add() {

  }
  Save() {
    this.torderlistService.BaseParameter.ListID = [];
    this.torderlistService.BaseParameter.ListSearchString = [];
    for (let i = 0; i < this.torderlistService.ListFilter.length; i++) {
      if (this.torderlistService.ListFilter[i].CHK == true) {
        this.torderlistService.BaseParameter.ListID.push(this.torderlistService.ListFilter[i].ORDER_IDX);
        this.torderlistService.BaseParameter.ListSearchString.push(this.torderlistService.ListFilter[i].MC);
      }
    }
    this.tuser_logService.IsShowLoading = true;
    this.torderlistService.C02_LISTButtonsave_ClickGroupAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.torderlistSearch01();

      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tuser_logService.IsShowLoading = false;
      }
    );
  }
  Delete() {
    this.torderlistService.BaseParameter.ListID = [];
    for (let i = 0; i < this.torderlistService.ListFilter.length; i++) {
      if (this.torderlistService.ListFilter[i].CHK == true) {
        this.torderlistService.BaseParameter.ListID.push(this.torderlistService.ListFilter[i].ORDER_IDX);
      }
    }
    this.tuser_logService.IsShowLoading = true;
    this.torderlistService.C02_LISTButtondelete_ClickGroupAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.DeleteSuccess);
        this.torderlistSearch01();

      },
      err => {
        this.NotificationService.warn(environment.DeleteNotSuccess);
      },
      () => {
        this.tuser_logService.IsShowLoading = false;
      }
    );
  }
  Cancel() {


  }
  ExcelImport() {

  }
  ExcelExport() {
    this.tuser_logService.IsShowLoading = true;
    this.torderlistService.BaseParameter.SearchString001 = this.torderlistService.FormData.LEAD_NO;
    this.torderlistService.C02_LISTButtonfind_ClickToExcelAsync().subscribe(
      res => {        
        window.open(res.toString(), "_blank");
      },
      err => {
      },
      () => {
        this.tuser_logService.IsShowLoading = false;
      }
    );
    this.torderlistService.BaseParameter.SearchString001 = environment.InitializationString;
  }
  Print() {

  }
  Help() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(WMPPLAYComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
    });
  }
  Close() {
    this.DialogRef.close();
  }

  DateBegin(value) {
    this.torderlistService.BaseParameter.Begin = new Date(value);
  }
  tscodeServiceSearch() {
    this.tscodeService.C02_LoadToListAsync().subscribe(
      res => {
        this.tscodeService.List = (res as tscode[]);
      },
      err => {
      },
      () => {
        this.tuser_logService.IsShowLoading = false;
      }
    );
  }
  tsnon_oper_mitorSearch() {
    this.tsnon_oper_mitorService.C02_LoadAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );
    this.tuser_logService.C02TS_USERUSER_TIMEToListAsync().subscribe(
      res => {
        this.tuser_logService.List = (res as tuser_log[]);
      },
      err => {
      },
      () => {
        this.tuser_logService.IsShowLoading = false;
      }
    );
  }
  tuser_logSearch() {
    this.tuser_logService.BaseParameter.SearchString = this.torderlistService.BaseParameter.SearchString;
    this.tuser_logService.BaseParameter.Account = this.torderlistService.BaseParameter.Account;
    this.tuser_logService.C02TS_USERToListAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );

    this.tuser_logService.C02TS_USERUSER_TIMEToListAsync().subscribe(
      res => {
        this.tuser_logService.List = (res as tuser_log[]);
      },
      err => {
      },
      () => {
       
      }
    );
  }
  torderlistSearch() {
    this.tuser_logService.IsShowLoading = true;
    this.torderlistService.C02MC_LISTToListAsync().subscribe(
      res => {
        this.torderlistService.ListFilter001 = (res as torderlist[]);
        if (this.torderlistService.ListFilter001) {
          if (this.torderlistService.ListFilter001.length > 0) {
            this.torderlistService.BaseParameter.SearchString005 = this.torderlistService.ListFilter001[0].MC;
          }
        }
      },
      err => {
      },
      () => {
        this.tuser_logService.IsShowLoading = false;
      }
    );

    this.torderlistService.C02DB_LISECHKAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );
  }
  torderlistSearch01() {
    this.tuser_logService.IsShowLoading = true;
    this.torderlistService.BaseParameter.SearchString001 = this.torderlistService.FormData.LEAD_NO;
    this.torderlistService.C02_LISTButtonfind_ClickToListAsync().subscribe(
      res => {
        
        this.torderlistService.ListFilter = (res as torderlist[]);
        this.torderlistService.DataSourceFilter = new MatTableDataSource(this.torderlistService.ListFilter);
        this.torderlistService.DataSourceFilter.sort = this.torderlistSortFilter;
        this.torderlistService.DataSourceFilter.paginator = this.torderlistPaginatorFilter;
      },
      err => {
      },
      () => {
        this.tuser_logService.IsShowLoading = false;
      }
    );
    this.torderlistService.BaseParameter.SearchString001 = environment.InitializationString;
  }
  IsSeletAllChange() {
    if (this.IsSeletAll == true) {
      for (let i = 0; i < this.torderlistService.ListFilter.length; i++) {
        this.torderlistService.ListFilter[i].CHK = this.IsSeletAll;
      }
    }
    else {
      for (let i = 0; i < this.torderlistService.ListFilter.length; i++) {
        this.torderlistService.ListFilter[i].CHK = !this.torderlistService.ListFilter[i].CHK;
      }
    }
  }
  MCClick(element: torderlist) {
    element.CHK = true;
  }
  Stop() {
    this.tsnon_operService.BaseParameter.Account = this.torderlistService.BaseParameter.Account;
    this.tsnon_operService.BaseParameter.SearchString = this.torderlistService.BaseParameter.SearchString;
    switch (this.tsnon_operService.BaseParameter.SearchString001) {
      case "S":
        this.tsnon_operService.BaseParameter.SearchString002 = "Chuẩn bị thiết bị(S)";
        break;
      case "I":
        this.tsnon_operService.BaseParameter.SearchString002 = "Thiếu nguyên vật liệu(I)";
        break;
      case "Q":
        this.tsnon_operService.BaseParameter.SearchString002 = "Vấn đề chất lượng(Q)";
        break;
      case "M":
        this.tsnon_operService.BaseParameter.SearchString002 = "Máy hư(M)";
        break;
      case "T":
        this.tsnon_operService.BaseParameter.SearchString002 = "Đào tạo/ họp(T)";
        break;
      case "L":
        this.tsnon_operService.BaseParameter.SearchString002 = "Giờ ăn(L)";
        break;
      case "E":
        this.tsnon_operService.BaseParameter.SearchString002 = "Khác(E)";
        break;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(C02STOPComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
    });
  }
  CONDITION(element: torderlist) {
    if (element.CONDITION != "Complete") {
    }
  }
  Status() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(C02COUNTComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
    });
  }
  Button1() {
    this.tuser_logService.IsShowLoading = true;
    this.torderlistService.C02_LISTButton1_ClickToExcelAsync().subscribe(
      res => {
        window.open(res.toString(), "_blank");
      },
      err => {
      },
      () => {
        this.tuser_logService.IsShowLoading = false;
      }
    );

  }
}