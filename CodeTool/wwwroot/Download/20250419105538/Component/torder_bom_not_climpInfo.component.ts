import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_not_climp } from 'src/app/shared/MES/torder_bom_not_climp.model';
import { torder_bom_not_climpService } from 'src/app/shared/MES/torder_bom_not_climp.service';

@Component({
  selector: 'app-torder_bom_not_climp-info',
  templateUrl: './torder_bom_not_climp-info.component.html',
  styleUrls: ['./torder_bom_not_climp-info.component.css']
})
export class torder_bom_not_climpInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_not_climpService: torder_bom_not_climpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bom_not_climpService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_bom_not_climpSearch();
  }
  torder_bom_not_climpSearch() {
    this.torder_bom_not_climpService.GetByIDAsync().subscribe(
      res => {
        this.torder_bom_not_climpService.FormData = res as torder_bom_not_climp;
        if (this.torder_bom_not_climpService.FormData.CLIMP_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_bom_not_climpSave() {
    this.torder_bom_not_climpService.IsShowLoading = true;
    this.torder_bom_not_climpService.SaveAsync().subscribe(
      res => {
        this.torder_bom_not_climpService.FormData = res as torder_bom_not_climp;
        this.Router.navigateByUrl(environment.torder_bom_not_climpInfo + this.torder_bom_not_climpService.FormData.CLIMP_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_bom_not_climpService.IsShowLoading = false;
      }
    );
  }
  torder_bom_not_climpAdd() {
    this.Router.navigateByUrl(environment.torder_bom_not_climpInfo + environment.InitializationNumber);
    this.torder_bom_not_climpService.BaseParameter.ID = environment.InitializationNumber;
    this.torder_bom_not_climpSearch();
  }
}

