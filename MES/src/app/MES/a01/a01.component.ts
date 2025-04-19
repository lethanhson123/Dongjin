import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscode } from 'src/app/shared/MES/tscode.model';
import { tscodeService } from 'src/app/shared/MES/tscode.service';
import { tspart } from 'src/app/shared/MES/tspart.model';
import { tspartService } from 'src/app/shared/MES/tspart.service';
import { tspart_ecn } from 'src/app/shared/MES/tspart_ecn.model';
import { tspart_ecnService } from 'src/app/shared/MES/tspart_ecn.service';

import { WMPPLAYComponent } from '../wmp-play/wmp-play.component';
import { A01PNADDComponent } from '../a01-pnadd/a01-pnadd.component';
import { A01FileComponent } from '../a01-file/a01-file.component';

@Component({
  selector: 'app-a01',
  templateUrl: './a01.component.html',
  styleUrls: ['./a01.component.css']
})
export class A01Component {
  @ViewChild('tspartSort') tspartSort: MatSort;
  @ViewChild('tspartPaginator') tspartPaginator: MatPaginator;

  @ViewChild('tspartSortTabPage2') tspartSortTabPage2: MatSort;
  @ViewChild('tspartPaginatorTabPage2') tspartPaginatorTabPage2: MatPaginator;

  @ViewChild('tspart_ecnSort') tspart_ecnSort: MatSort;
  @ViewChild('tspart_ecnPaginator') tspart_ecnPaginator: MatPaginator;

  Action: number = 1;
  Tag001: boolean = true;
  Tag002: boolean = false;
  Tag003: boolean = false;
  IsPART_USE: boolean = true;
  IsPART_NO: boolean = true;

  IsPART_NOTabPage2: boolean = true;
  IsPART_ENCNOTabPage2: boolean = true;
  IsPART_ECN_DATETabPage2: boolean = true;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscodeService: tscodeService,
    public tspartService: tspartService,
    public tspart_ecnService: tspart_ecnService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscodeSearch();
    this.tspartSearch();
    this.TagShow(this.Action);
  }

  TagShow(Action: number) {
    this.Action = Action;
    this.Tag001 = false;
    this.Tag002 = false;
    this.Tag003 = false;
    switch (this.Action) {
      case 1: {
        this.Tag001 = true;
        break;
      }
      case 2: {
        this.Tag002 = true;
        break;
      }
      case 3: {
        this.Tag003 = true;
        break;
      }
    }
  }
  Search() {
    switch (this.Action) {
      case 1: {
        this.tspartService.IsShowLoading = true;
        this.tspartService.A001GetBySearchToListAsync().subscribe(
          res => {
            this.tspartService.List = (res as tspart[]);
            this.tspartService.DataSource = new MatTableDataSource(this.tspartService.List);
            this.tspartService.DataSource.sort = this.tspartSort;
            this.tspartService.DataSource.paginator = this.tspartPaginator;
          },
          err => {
          },
          () => {
            this.tspartService.IsShowLoading = false;
          }
        );
        break;
      }
      case 2: {
        this.tspartService.IsShowLoading = true;
        this.tspartService.A001TabPage2GetBySearchToListAsync().subscribe(
          res => {
            this.tspartService.ListTabPage2 = (res as tspart[]);
            this.tspartService.DataSourceTabPage2 = new MatTableDataSource(this.tspartService.ListTabPage2);
            this.tspartService.DataSourceTabPage2.sort = this.tspartSortTabPage2;
            this.tspartService.DataSourceTabPage2.paginator = this.tspartPaginatorTabPage2;
          },
          err => {
          },
          () => {
            this.tspartService.IsShowLoading = false;
          }
        );
        break;
      }
      case 3: {
        break;
      }
    }

  }
  Add() {
    switch (this.Action) {
      case 1: {
        this.IsPART_NO = false;
        this.tspartService.FormData = {

        };
        break;
      }
      case 2: {
        this.IsPART_ENCNOTabPage2 = false;
        this.IsPART_NOTabPage2 = false;
        this.IsPART_ECN_DATETabPage2 = false;
        this.tspart_ecnService.FormData = {
          PART_ECN_DATE: new Date(),
        };
        break;
      }
      case 3: {
        break;
      }
    }

  }
  Save() {
    switch (this.Action) {
      case 1: {
        this.tspartService.FormData.PART_USENY = "Y";
        if (this.IsPART_USE == false) {
          this.tspartService.FormData.PART_USENY = "N";
        }
        this.tspartService.IsShowLoading = true;
        this.tspartService.A001SaveAsync().subscribe(
          res => {
            this.tspartService.FormData = (res as tspart);
            this.NotificationService.warn(environment.SaveSuccess);
            this.Search();
          },
          err => {
            this.NotificationService.warn(environment.SaveNotSuccess);
          },
          () => {
          }
        );
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
    }

  }
  Delete() {
    switch (this.Action) {
      case 1: {
        if (this.tspartService.List) {
          for (let i = 0; i < this.tspartService.List.length; i++) {
            if (this.tspartService.List[i].CHK == true) {
              this.tspartService.List.splice(i, 1);
            }
          }
          this.tspartService.DataSource = new MatTableDataSource(this.tspartService.List);
          this.tspartService.DataSource.sort = this.tspartSort;
          this.tspartService.DataSource.paginator = this.tspartPaginator;
        }
        break;
      }
      case 2: {
        this.tspart_ecnSearch();
        break;
      }
      case 3: {
        break;
      }
    }

  }
  Cancel() {
    switch (this.Action) {
      case 1: {
        this.IsPART_NO = true;
        this.tspartService.FormData = {

        };
        this.tspartService.List = [];
        this.tspartService.DataSource = new MatTableDataSource(this.tspartService.List);
        this.tspartService.DataSource.sort = this.tspartSort;
        this.tspartService.DataSource.paginator = this.tspartPaginator;
        break;
      }
      case 2: {
        this.tspart_ecnService.FormData = {          
        };
        break;
      }
      case 3: {
        break;
      }
    }

  }
  ExcelImport() {
    switch (this.Action) {
      case 1: {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: 0 };
        const dialog = this.Dialog.open(A01PNADDComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
    }
  }
  ExcelExport() {
    switch (this.Action) {
      case 1: {
        this.tspartService.IsShowLoading = true;
        this.tspartService.A001GetBySearchToExcelAsync().subscribe(
          res => {
            window.open(res.toString(), "_blank");
          },
          err => {
          },
          () => {
            this.tspartService.IsShowLoading = false;
          }
        );
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
    }
  }
  Print() {
    switch (this.Action) {
      case 1: {
        this.tspartService.IsShowLoading = true;
        this.tspartService.A001GetBySearchToHTMLAsync().subscribe(
          res => {
            this.NotificationService.OpenWindowByURL(res.toString());
          },
          err => {
          },
          () => {
            this.tspartService.IsShowLoading = false;
          }
        );
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
    }
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
    alert(environment.Help);
  }
  TableSelect(element: tspart) {
    this.tspartService.FormData = element;
    this.tspartSearch001();
    if (this.tspartService.FormData.PART_USE == "Y") {
      this.IsPART_USE = true;
    }
    else {
      this.IsPART_USE = false;
    }
  }
  TableSelectTabPage2(element: tspart) {

    this.IsPART_ENCNOTabPage2 = true;
    this.IsPART_NOTabPage2 = true;
    this.IsPART_ECN_DATETabPage2 = true;
    this.tspartService.FormDataTabPage2 = element;
    this.tspart_ecnSearch();
  }
  tspart_ecnSearch() {
    this.tspartService.IsShowLoading = true;
    this.tspart_ecnService.BaseParameter.ParentID = this.tspartService.FormDataTabPage2.PART_IDX;
    this.tspart_ecnService.A001TabPage2GetBySearchToListAsync().subscribe(
      res => {
        this.tspart_ecnService.List = (res as tspart_ecn[]);
        this.tspart_ecnService.DataSource = new MatTableDataSource(this.tspart_ecnService.List);
        this.tspart_ecnService.DataSource.sort = this.tspart_ecnSort;
        this.tspart_ecnService.DataSource.paginator = this.tspart_ecnPaginator;
      },
      err => {
      },
      () => {
        this.tspartService.IsShowLoading = false;
      }
    );
  }
  TableSelectTabPage2_001(element: tspart_ecn) {
    this.tspart_ecnService.FormData = element;
  }
  DatePART_ECN_DATE(value) {
    this.tspart_ecnService.FormData.PART_ECN_DATE = new Date(value);
  }
  tscodeSearch() {
    this.tscodeService.BaseParameter.ParentID = 4;
    this.tscodeService.A001GetByCDGR_IDXToListAsync().subscribe(
      res => {
        this.tscodeService.ListFilter = (res as any[]);
      },
      err => {
      },
      () => {
      }
    );
  }
  tspartSearch() {
    this.tspartService.A001GetByGROUPBYBOM_GRPToListAsync().subscribe(
      res => {
        this.tspartService.ListFilter = (res as any[]);
      },
      err => {
      },
      () => {
      }
    );
  }
  tspartSearch001() {
    this.tspartService.ListFilter001 = [];
    this.tspartService.ListFilter002 = [];
    let List = this.tscodeService.ListFilter.filter(item => item.CD_NM_EN == this.tspartService.FormData.Item_TypeE);
    if (List) {
      if (List.length > 0) {
        this.tspartService.BaseParameter.ParentID = List[0].CD_IDX;
        this.tspartService.FormData.CD_IDX = List[0].CD_IDX;
        this.tspartService.A001GetByGROUPBYPART_CARToListAsync().subscribe(
          res => {
            this.tspartService.ListFilter001 = (res as any[]);
          },
          err => {
          },
          () => {
          }
        );
        this.tspartService.A001GetByGROUPBYPART_FMLToListAsync().subscribe(
          res => {
            this.tspartService.ListFilter002 = (res as any[]);
          },
          err => {
          },
          () => {
          }
        );
      }
    }
  }
  FileManager() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(A01FileComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
    });
  }
}


