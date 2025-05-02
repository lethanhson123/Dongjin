import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivaj } from 'src/app/shared/MES/tiivaj.model';
import { tiivajService } from 'src/app/shared/MES/tiivaj.service';

@Component({
  selector: 'app-tiivaj-info',
  templateUrl: './tiivaj-info.component.html',
  styleUrls: ['./tiivaj-info.component.css']
})
export class tiivajInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivajService: tiivajService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivajService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tiivajSearch();
  }
  tiivajSearch() {
    this.tiivajService.GetByIDAsync().subscribe(
      res => {
        this.tiivajService.FormData = res as tiivaj;
        if (this.tiivajService.FormData.IVAJ_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tiivajSave() {
    this.tiivajService.IsShowLoading = true;
    this.tiivajService.SaveAsync().subscribe(
      res => {
        this.tiivajService.FormData = res as tiivaj;
        this.Router.navigateByUrl(environment.tiivajInfo + this.tiivajService.FormData.IVAJ_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tiivajService.IsShowLoading = false;
      }
    );
  }
  tiivajAdd() {
    this.Router.navigateByUrl(environment.tiivajInfo + environment.InitializationNumber);
    this.tiivajService.BaseParameter.ID = environment.InitializationNumber;
    this.tiivajSearch();
  }
}

