import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_lead_fg } from 'src/app/shared/MES/tiivtr_lead_fg.model';
import { tiivtr_lead_fgService } from 'src/app/shared/MES/tiivtr_lead_fg.service';

@Component({
  selector: 'app-tiivtr_lead_fg-info',
  templateUrl: './tiivtr_lead_fg-info.component.html',
  styleUrls: ['./tiivtr_lead_fg-info.component.css']
})
export class tiivtr_lead_fgInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_lead_fgService: tiivtr_lead_fgService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_lead_fgService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tiivtr_lead_fgSearch();
  }
  tiivtr_lead_fgSearch() {
    this.tiivtr_lead_fgService.GetByIDAsync().subscribe(
      res => {
        this.tiivtr_lead_fgService.FormData = res as tiivtr_lead_fg;
        if (this.tiivtr_lead_fgService.FormData.IV_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tiivtr_lead_fgSave() {
    this.tiivtr_lead_fgService.IsShowLoading = true;
    this.tiivtr_lead_fgService.SaveAsync().subscribe(
      res => {
        this.tiivtr_lead_fgService.FormData = res as tiivtr_lead_fg;
        this.Router.navigateByUrl(environment.tiivtr_lead_fgInfo + this.tiivtr_lead_fgService.FormData.IV_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tiivtr_lead_fgService.IsShowLoading = false;
      }
    );
  }
  tiivtr_lead_fgAdd() {
    this.Router.navigateByUrl(environment.tiivtr_lead_fgInfo + environment.InitializationNumber);
    this.tiivtr_lead_fgService.BaseParameter.ID = environment.InitializationNumber;
    this.tiivtr_lead_fgSearch();
  }
}

