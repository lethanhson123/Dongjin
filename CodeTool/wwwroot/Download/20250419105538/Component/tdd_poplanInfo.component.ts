import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdd_poplan } from 'src/app/shared/MES/tdd_poplan.model';
import { tdd_poplanService } from 'src/app/shared/MES/tdd_poplan.service';

@Component({
  selector: 'app-tdd_poplan-info',
  templateUrl: './tdd_poplan-info.component.html',
  styleUrls: ['./tdd_poplan-info.component.css']
})
export class tdd_poplanInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdd_poplanService: tdd_poplanService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdd_poplanService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdd_poplanSearch();
  }
  tdd_poplanSearch() {
    this.tdd_poplanService.GetByIDAsync().subscribe(
      res => {
        this.tdd_poplanService.FormData = res as tdd_poplan;
        if (this.tdd_poplanService.FormData.TDD_PP_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdd_poplanSave() {
    this.tdd_poplanService.IsShowLoading = true;
    this.tdd_poplanService.SaveAsync().subscribe(
      res => {
        this.tdd_poplanService.FormData = res as tdd_poplan;
        this.Router.navigateByUrl(environment.tdd_poplanInfo + this.tdd_poplanService.FormData.TDD_PP_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdd_poplanService.IsShowLoading = false;
      }
    );
  }
  tdd_poplanAdd() {
    this.Router.navigateByUrl(environment.tdd_poplanInfo + environment.InitializationNumber);
    this.tdd_poplanService.BaseParameter.ID = environment.InitializationNumber;
    this.tdd_poplanSearch();
  }
}

