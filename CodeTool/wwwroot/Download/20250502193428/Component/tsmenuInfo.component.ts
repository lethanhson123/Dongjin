import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsmenu } from 'src/app/shared/MES/tsmenu.model';
import { tsmenuService } from 'src/app/shared/MES/tsmenu.service';

@Component({
  selector: 'app-tsmenu-info',
  templateUrl: './tsmenu-info.component.html',
  styleUrls: ['./tsmenu-info.component.css']
})
export class tsmenuInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsmenuService: tsmenuService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsmenuService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsmenuSearch();
  }
  tsmenuSearch() {
    this.tsmenuService.GetByIDAsync().subscribe(
      res => {
        this.tsmenuService.FormData = res as tsmenu;
        if (this.tsmenuService.FormData.MENU_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsmenuSave() {
    this.tsmenuService.IsShowLoading = true;
    this.tsmenuService.SaveAsync().subscribe(
      res => {
        this.tsmenuService.FormData = res as tsmenu;
        this.Router.navigateByUrl(environment.tsmenuInfo + this.tsmenuService.FormData.MENU_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsmenuService.IsShowLoading = false;
      }
    );
  }
  tsmenuAdd() {
    this.Router.navigateByUrl(environment.tsmenuInfo + environment.InitializationNumber);
    this.tsmenuService.BaseParameter.ID = environment.InitializationNumber;
    this.tsmenuSearch();
  }
}

