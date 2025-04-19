import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr } from 'src/app/shared/MES/tiivtr.model';
import { tiivtrService } from 'src/app/shared/MES/tiivtr.service';

@Component({
  selector: 'app-tiivtr-info',
  templateUrl: './tiivtr-info.component.html',
  styleUrls: ['./tiivtr-info.component.css']
})
export class tiivtrInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtrService: tiivtrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtrService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tiivtrSearch();
  }
  tiivtrSearch() {
    this.tiivtrService.GetByIDAsync().subscribe(
      res => {
        this.tiivtrService.FormData = res as tiivtr;
        if (this.tiivtrService.FormData.IV_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tiivtrSave() {
    this.tiivtrService.IsShowLoading = true;
    this.tiivtrService.SaveAsync().subscribe(
      res => {
        this.tiivtrService.FormData = res as tiivtr;
        this.Router.navigateByUrl(environment.tiivtrInfo + this.tiivtrService.FormData.IV_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tiivtrService.IsShowLoading = false;
      }
    );
  }
  tiivtrAdd() {
    this.Router.navigateByUrl(environment.tiivtrInfo + environment.InitializationNumber);
    this.tiivtrService.BaseParameter.ID = environment.InitializationNumber;
    this.tiivtrSearch();
  }
}

