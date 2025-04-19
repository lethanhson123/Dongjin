import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zadmin_function } from 'src/app/shared/MES/zadmin_function.model';
import { zadmin_functionService } from 'src/app/shared/MES/zadmin_function.service';

@Component({
  selector: 'app-zadmin_function-info',
  templateUrl: './zadmin_function-info.component.html',
  styleUrls: ['./zadmin_function-info.component.css']
})
export class zadmin_functionInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zadmin_functionService: zadmin_functionService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.zadmin_functionService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.zadmin_functionSearch();
  }
  zadmin_functionSearch() {
    this.zadmin_functionService.GetByIDAsync().subscribe(
      res => {
        this.zadmin_functionService.FormData = res as zadmin_function;
        if (this.zadmin_functionService.FormData.ZADMIN_FUNCTION_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  zadmin_functionSave() {
    this.zadmin_functionService.IsShowLoading = true;
    this.zadmin_functionService.SaveAsync().subscribe(
      res => {
        this.zadmin_functionService.FormData = res as zadmin_function;
        this.Router.navigateByUrl(environment.zadmin_functionInfo + this.zadmin_functionService.FormData.ZADMIN_FUNCTION_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.zadmin_functionService.IsShowLoading = false;
      }
    );
  }
  zadmin_functionAdd() {
    this.Router.navigateByUrl(environment.zadmin_functionInfo + environment.InitializationNumber);
    this.zadmin_functionService.BaseParameter.ID = environment.InitializationNumber;
    this.zadmin_functionSearch();
  }
}

