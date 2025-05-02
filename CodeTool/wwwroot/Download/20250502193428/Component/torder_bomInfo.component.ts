import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom } from 'src/app/shared/MES/torder_bom.model';
import { torder_bomService } from 'src/app/shared/MES/torder_bom.service';

@Component({
  selector: 'app-torder_bom-info',
  templateUrl: './torder_bom-info.component.html',
  styleUrls: ['./torder_bom-info.component.css']
})
export class torder_bomInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bomService: torder_bomService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bomService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_bomSearch();
  }
  torder_bomSearch() {
    this.torder_bomService.GetByIDAsync().subscribe(
      res => {
        this.torder_bomService.FormData = res as torder_bom;
        if (this.torder_bomService.FormData.TORDER_BOM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_bomSave() {
    this.torder_bomService.IsShowLoading = true;
    this.torder_bomService.SaveAsync().subscribe(
      res => {
        this.torder_bomService.FormData = res as torder_bom;
        this.Router.navigateByUrl(environment.torder_bomInfo + this.torder_bomService.FormData.TORDER_BOM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_bomService.IsShowLoading = false;
      }
    );
  }
  torder_bomAdd() {
    this.Router.navigateByUrl(environment.torder_bomInfo + environment.InitializationNumber);
    this.torder_bomService.BaseParameter.ID = environment.InitializationNumber;
    this.torder_bomSearch();
  }
}

