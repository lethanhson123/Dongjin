import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdd_poplan_djg } from 'src/app/shared/MES/tdd_poplan_djg.model';
import { tdd_poplan_djgService } from 'src/app/shared/MES/tdd_poplan_djg.service';

@Component({
  selector: 'app-tdd_poplan_djg-info',
  templateUrl: './tdd_poplan_djg-info.component.html',
  styleUrls: ['./tdd_poplan_djg-info.component.css']
})
export class tdd_poplan_djgInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdd_poplan_djgService: tdd_poplan_djgService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdd_poplan_djgService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdd_poplan_djgSearch();
  }
  tdd_poplan_djgSearch() {
    this.tdd_poplan_djgService.GetByIDAsync().subscribe(
      res => {
        this.tdd_poplan_djgService.FormData = res as tdd_poplan_djg;
        if (this.tdd_poplan_djgService.FormData.TDD_PPD_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdd_poplan_djgSave() {
    this.tdd_poplan_djgService.IsShowLoading = true;
    this.tdd_poplan_djgService.SaveAsync().subscribe(
      res => {
        this.tdd_poplan_djgService.FormData = res as tdd_poplan_djg;
        this.Router.navigateByUrl(environment.tdd_poplan_djgInfo + this.tdd_poplan_djgService.FormData.TDD_PPD_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdd_poplan_djgService.IsShowLoading = false;
      }
    );
  }
  tdd_poplan_djgAdd() {
    this.Router.navigateByUrl(environment.tdd_poplan_djgInfo + environment.InitializationNumber);
    this.tdd_poplan_djgService.BaseParameter.ID = environment.InitializationNumber;
    this.tdd_poplan_djgSearch();
  }
}

