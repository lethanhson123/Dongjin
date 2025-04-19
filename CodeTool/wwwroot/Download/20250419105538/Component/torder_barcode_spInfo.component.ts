import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_barcode_sp } from 'src/app/shared/MES/torder_barcode_sp.model';
import { torder_barcode_spService } from 'src/app/shared/MES/torder_barcode_sp.service';

@Component({
  selector: 'app-torder_barcode_sp-info',
  templateUrl: './torder_barcode_sp-info.component.html',
  styleUrls: ['./torder_barcode_sp-info.component.css']
})
export class torder_barcode_spInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_barcode_spService: torder_barcode_spService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_barcode_spService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_barcode_spSearch();
  }
  torder_barcode_spSearch() {
    this.torder_barcode_spService.GetByIDAsync().subscribe(
      res => {
        this.torder_barcode_spService.FormData = res as torder_barcode_sp;
        if (this.torder_barcode_spService.FormData.TORDER_BARCODE_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_barcode_spSave() {
    this.torder_barcode_spService.IsShowLoading = true;
    this.torder_barcode_spService.SaveAsync().subscribe(
      res => {
        this.torder_barcode_spService.FormData = res as torder_barcode_sp;
        this.Router.navigateByUrl(environment.torder_barcode_spInfo + this.torder_barcode_spService.FormData.TORDER_BARCODE_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_barcode_spService.IsShowLoading = false;
      }
    );
  }
  torder_barcode_spAdd() {
    this.Router.navigateByUrl(environment.torder_barcode_spInfo + environment.InitializationNumber);
    this.torder_barcode_spService.BaseParameter.ID = environment.InitializationNumber;
    this.torder_barcode_spSearch();
  }
}

