import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivaj_lead } from 'src/app/shared/MES/tiivaj_lead.model';
import { tiivaj_leadService } from 'src/app/shared/MES/tiivaj_lead.service';

@Component({
  selector: 'app-tiivaj_lead-info',
  templateUrl: './tiivaj_lead-info.component.html',
  styleUrls: ['./tiivaj_lead-info.component.css']
})
export class tiivaj_leadInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivaj_leadService: tiivaj_leadService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivaj_leadService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tiivaj_leadSearch();
  }
  tiivaj_leadSearch() {
    this.tiivaj_leadService.GetByIDAsync().subscribe(
      res => {
        this.tiivaj_leadService.FormData = res as tiivaj_lead;
        if (this.tiivaj_leadService.FormData.IVAJ_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tiivaj_leadSave() {
    this.tiivaj_leadService.IsShowLoading = true;
    this.tiivaj_leadService.SaveAsync().subscribe(
      res => {
        this.tiivaj_leadService.FormData = res as tiivaj_lead;
        this.Router.navigateByUrl(environment.tiivaj_leadInfo + this.tiivaj_leadService.FormData.IVAJ_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tiivaj_leadService.IsShowLoading = false;
      }
    );
  }
  tiivaj_leadAdd() {
    this.Router.navigateByUrl(environment.tiivaj_leadInfo + environment.InitializationNumber);
    this.tiivaj_leadService.BaseParameter.ID = environment.InitializationNumber;
    this.tiivaj_leadSearch();
  }
}

