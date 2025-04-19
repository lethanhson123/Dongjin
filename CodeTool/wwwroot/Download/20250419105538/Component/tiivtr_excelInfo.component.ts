import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_excel } from 'src/app/shared/MES/tiivtr_excel.model';
import { tiivtr_excelService } from 'src/app/shared/MES/tiivtr_excel.service';

@Component({
  selector: 'app-tiivtr_excel-info',
  templateUrl: './tiivtr_excel-info.component.html',
  styleUrls: ['./tiivtr_excel-info.component.css']
})
export class tiivtr_excelInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_excelService: tiivtr_excelService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_excelService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tiivtr_excelSearch();
  }
  tiivtr_excelSearch() {
    this.tiivtr_excelService.GetByIDAsync().subscribe(
      res => {
        this.tiivtr_excelService.FormData = res as tiivtr_excel;
        if (this.tiivtr_excelService.FormData.IV_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tiivtr_excelSave() {
    this.tiivtr_excelService.IsShowLoading = true;
    this.tiivtr_excelService.SaveAsync().subscribe(
      res => {
        this.tiivtr_excelService.FormData = res as tiivtr_excel;
        this.Router.navigateByUrl(environment.tiivtr_excelInfo + this.tiivtr_excelService.FormData.IV_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tiivtr_excelService.IsShowLoading = false;
      }
    );
  }
  tiivtr_excelAdd() {
    this.Router.navigateByUrl(environment.tiivtr_excelInfo + environment.InitializationNumber);
    this.tiivtr_excelService.BaseParameter.ID = environment.InitializationNumber;
    this.tiivtr_excelSearch();
  }
}

