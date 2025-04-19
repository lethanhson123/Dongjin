import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_barcode } from 'src/app/shared/MES/torder_barcode.model';
import { torder_barcodeService } from 'src/app/shared/MES/torder_barcode.service';

@Component({
  selector: 'app-torder_barcode-info',
  templateUrl: './torder_barcode-info.component.html',
  styleUrls: ['./torder_barcode-info.component.css']
})
export class torder_barcodeInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_barcodeService: torder_barcodeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_barcodeService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_barcodeSearch();
  }
  torder_barcodeSearch() {
    this.torder_barcodeService.GetByIDAsync().subscribe(
      res => {
        this.torder_barcodeService.FormData = res as torder_barcode;
        if (this.torder_barcodeService.FormData.TORDER_BARCODE_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_barcodeSave() {
    this.torder_barcodeService.IsShowLoading = true;
    this.torder_barcodeService.SaveAsync().subscribe(
      res => {
        this.torder_barcodeService.FormData = res as torder_barcode;
        this.Router.navigateByUrl(environment.torder_barcodeInfo + this.torder_barcodeService.FormData.TORDER_BARCODE_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_barcodeService.IsShowLoading = false;
      }
    );
  }
  torder_barcodeAdd() {
    this.Router.navigateByUrl(environment.torder_barcodeInfo + environment.InitializationNumber);
    this.torder_barcodeService.BaseParameter.ID = environment.InitializationNumber;
    this.torder_barcodeSearch();
  }
}

