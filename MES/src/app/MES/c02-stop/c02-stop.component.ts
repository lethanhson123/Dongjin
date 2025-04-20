import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper } from 'src/app/shared/MES/tsnon_oper.model';
import { tsnon_operService } from 'src/app/shared/MES/tsnon_oper.service';
import { tsnon_oper_mitor } from 'src/app/shared/MES/tsnon_oper_mitor.model';
import { tsnon_oper_mitorService } from 'src/app/shared/MES/tsnon_oper_mitor.service';
import { tsnon_oper_andon_list } from 'src/app/shared/MES/tsnon_oper_andon_list.model';
import { tsnon_oper_andon_listService } from 'src/app/shared/MES/tsnon_oper_andon_list.service';
import { tsnon_oper_andon } from 'src/app/shared/MES/tsnon_oper_andon.model';
import { tsnon_oper_andonService } from 'src/app/shared/MES/tsnon_oper_andon.service';
import { torderlist_wtime } from 'src/app/shared/MES/torderlist_wtime.model';
import { torderlist_wtimeService } from 'src/app/shared/MES/torderlist_wtime.service';


@Component({
  selector: 'app-c02-stop',
  templateUrl: './c02-stop.component.html',
  styleUrls: ['./c02-stop.component.css']
})
export class C02STOPComponent {

  Hour: string = "00";
  Minute: string = "00";
  Second: string = "00";

  IsButton2: boolean = true;
  STOPW_ORING_IDX: string = "";
  NON_OPER_CHK: boolean = true;
  NON_OPER_IDX: number = environment.InitializationNumber;

  
  constructor(
    public DialogRef: MatDialogRef<C02STOPComponent>,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_operService: tsnon_operService,
    public tsnon_oper_mitorService: tsnon_oper_mitorService,
    public tsnon_oper_andon_listService: tsnon_oper_andon_listService,
    public tsnon_oper_andonService: tsnon_oper_andonService,
    public torderlist_wtimeService: torderlist_wtimeService,
  ) {
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_operService.BaseParameter.Begin = new Date();
    if (this.tsnon_operService.BaseParameter.SearchString001 == "M") {
      this.IsButton2 = false;
    }
    this.tsnon_operSearch();
    this.tsnon_oper_mitorSearch();
    this.SW_TIME();
    this.tsnon_oper_andonSearch();
    this.tsnon_oper_andon_listSearch();
    this.StartTimerInterval1000();
    this.StartTimerInterval60000();
  }
  Close() {
    this.DialogRef.close();
  }
  tsnon_operSearch() {
    this.tsnon_operService.BaseParameter.Begin = new Date();
    this.tsnon_operService.BaseParameter.Account = this.tsnon_operService.BaseParameter.Account;
    this.tsnon_operService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;
    this.tsnon_operService.BaseParameter.SearchString001 = this.tsnon_operService.BaseParameter.SearchString001;
    this.tsnon_operService.C02_STOP_LoadAsync().subscribe(
      res => {
        this.tsnon_operService.C02_STOP_LoadToListAsync().subscribe(
          res => {
            this.tsnon_operService.ListFilter = (res as tsnon_oper[]);        
            if (this.tsnon_operService.ListFilter) {
              if (this.tsnon_operService.ListFilter.length > 0) {
                this.tsnon_operService.BaseParameter.SearchString003 = "" + this.tsnon_operService.ListFilter[0].TSNON_OPER_IDX;
              }
            }
          },
          err => {
          },
          () => {
          }
        );
      },
      err => {
      },
      () => {
      }
    );    
   
  }
  tsnon_oper_mitorSearch() {    
    this.tsnon_oper_mitorService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;
    this.tsnon_oper_mitorService.BaseParameter.SearchString001 = this.tsnon_operService.BaseParameter.SearchString002;
    this.tsnon_oper_mitorService.C02_STOP_LoadAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );

  }
  tsnon_oper_andonSearch() {    
    this.tsnon_oper_andonService.BaseParameter.Account = this.tsnon_operService.BaseParameter.Account;
    this.tsnon_oper_andonService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;    
    this.tsnon_oper_andonService.C02_STOP_LoadAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );

  }
  tsnon_oper_andon_listSearch() {    
    this.tsnon_oper_andon_listService.BaseParameter.Account = this.tsnon_operService.BaseParameter.Account;
    this.tsnon_oper_andon_listService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;    
    this.tsnon_oper_andon_listService.C02_STOP_LoadAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );

  }
  SW_TIME() {
    this.torderlist_wtimeService.BaseParameter.Account = this.tsnon_operService.BaseParameter.Account;
    this.torderlist_wtimeService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;
    this.torderlist_wtimeService.BaseParameter.SearchString001 = this.tsnon_operService.BaseParameter.SearchString001;
    this.torderlist_wtimeService.BaseParameter.SearchString002 = "None";
    this.torderlist_wtimeService.C02_STOP_SW_TIMEAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );
    this.torderlist_wtimeService.BaseParameter.Begin = new Date();
    this.torderlist_wtimeService.C02_STOP_SW_TIMEToListAsync().subscribe(
      res => {
        this.torderlist_wtimeService.ListFilter = (res as torderlist_wtime[]);
        if (this.torderlist_wtimeService.ListFilter) {
          if (this.torderlist_wtimeService.ListFilter.length > 0) {
            this.STOPW_ORING_IDX = "" + this.torderlist_wtimeService.ListFilter[0].TOWT_INDX;
          }
        }
      },
      err => {
      },
      () => {
      }
    );
  }
  EW_TIME() {
    this.torderlist_wtimeService.BaseParameter.SearchString = this.STOPW_ORING_IDX;
    this.torderlist_wtimeService.C02_STOP_EW_TIMEAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );
  }
  Button2() {
    this.tsnon_oper_andon_listService.BaseParameter.Account = this.tsnon_operService.BaseParameter.Account;
    this.tsnon_oper_andon_listService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;    
    this.tsnon_oper_andon_listService.C02_STOP_Button2_ClickAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );

    this.tsnon_oper_andon_listService.BaseParameter.Account = this.tsnon_operService.BaseParameter.Account;
    this.tsnon_oper_andon_listService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;    
    this.tsnon_oper_andon_listService.C02_STOP_Button2_ClickAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );
  }
  Button1() {
    this.tsnon_oper_andon_listService.BaseParameter.Account = this.tsnon_operService.BaseParameter.Account;
    this.tsnon_oper_andon_listService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;    
    this.tsnon_oper_andon_listService.C02_STOP_Button1_ClickAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );

    this.tsnon_oper_andon_listService.BaseParameter.Account = this.tsnon_operService.BaseParameter.Account;
    this.tsnon_oper_andon_listService.BaseParameter.SearchString = this.tsnon_operService.BaseParameter.SearchString;    
    this.tsnon_oper_andon_listService.C02_STOP_Button1_ClickAsync().subscribe(
      res => {
      },
      err => {
      },
      () => {
      }
    );
  }
  StartTimerInterval1000() {
    setInterval(() => {
      this.tsnon_operService.BaseParameter.End = new Date();
      let time = Math.floor((this.tsnon_operService.BaseParameter.End.getTime() - this.tsnon_operService.BaseParameter.Begin.getTime()) / 1000);
      let Second01 = time % 60;
      let Minute01 = Math.floor((time % 3660) / 60);
      let Hour01 = Math.floor(time / 3600);
      this.Second = "" + Second01;
      this.Minute = "" + Minute01;
      this.Hour = "" + Hour01;
      if (Second01 < 10) {
        this.Second = "0" + Second01;
      }
      if (Minute01 < 10) {
        this.Minute = "0" + Minute01;
      }
      if (Hour01 < 10) {
        this.Hour = "0" + Hour01;
      }
    }, 1000)
  }
  StartTimerInterval60000() {
    setInterval(() => {
      this.EW_TIME();
    }, 60000)
  }
}
