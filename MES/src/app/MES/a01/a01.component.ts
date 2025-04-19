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


import { WMPPLAYComponent } from '../wmp-play/wmp-play.component';

@Component({
  selector: 'app-a01',
  templateUrl: './a01.component.html',
  styleUrls: ['./a01.component.css']
})
export class A01Component {
  @ViewChild('tspartSort') tspartSort: MatSort;
  @ViewChild('tspartPaginator') tspartPaginator: MatPaginator;

  Tag001: boolean = true;
  Tag002: boolean = false;
  Tag003: boolean = false;
  IsPART_USE: boolean = true;
  IsPART_NO: boolean = true;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscodeService: tscodeService,
    public tspartService: tspartService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscodeSearch();
    this.tspartSearch();
    this.TagShow(1);
  }

  TagShow(Action: number) {
    this.Tag001 = false;
    this.Tag002 = false;
    this.Tag003 = false;
    switch (Action) {
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

  Add() {
    this.IsPART_NO = false;
    this.tspartService.FormData = {

    };
  }
  Save() {

  }
  Delete() {
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
  }
  Cancel() {
    this.IsPART_NO = true;
    this.tspartService.FormData = {

    };
    this.tspartService.List = [];
    this.tspartService.DataSource = new MatTableDataSource(this.tspartService.List);
    this.tspartService.DataSource.sort = this.tspartSort;
    this.tspartService.DataSource.paginator = this.tspartPaginator;
  }
  ExcelImport() {
  }
  ExcelExport() {
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
    let List = this.tscodeService.ListFilter.filter(item => item.CD_NM_EN == this.tspartService.FormData.Item_TypeE);
    if (List) {
      if (List.length > 0) {
        this.tspartService.BaseParameter.ParentID = List[0].CD_IDX;
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
  Search() {
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
  }
}


