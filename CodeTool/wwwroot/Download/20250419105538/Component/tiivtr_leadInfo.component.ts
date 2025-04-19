import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_lead } from 'src/app/shared/MES/tiivtr_lead.model';
import { tiivtr_leadService } from 'src/app/shared/MES/tiivtr_lead.service';

@Component({
  selector: 'app-tiivtr_lead-info',
  templateUrl: './tiivtr_lead-info.component.html',
  styleUrls: ['./tiivtr_lead-info.component.css']
})
export class tiivtr_leadInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_leadService: tiivtr_leadService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_leadService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tiivtr_leadSearch();
  }
  tiivtr_leadSearch() {
    this.tiivtr_leadService.GetByIDAsync().subscribe(
      res => {
        this.tiivtr_leadService.FormData = res as tiivtr_lead;
        if (this.tiivtr_leadService.FormData.IV_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tiivtr_leadSave() {
    this.tiivtr_leadService.IsShowLoading = true;
    this.tiivtr_leadService.SaveAsync().subscribe(
      res => {
        this.tiivtr_leadService.FormData = res as tiivtr_lead;
        this.Router.navigateByUrl(environment.tiivtr_leadInfo + this.tiivtr_leadService.FormData.IV_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tiivtr_leadService.IsShowLoading = false;
      }
    );
  }
  tiivtr_leadAdd() {
    this.Router.navigateByUrl(environment.tiivtr_leadInfo + environment.InitializationNumber);
    this.tiivtr_leadService.BaseParameter.ID = environment.InitializationNumber;
    this.tiivtr_leadSearch();
  }
}

