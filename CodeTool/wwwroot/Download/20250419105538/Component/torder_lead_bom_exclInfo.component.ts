import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom_excl } from 'src/app/shared/MES/torder_lead_bom_excl.model';
import { torder_lead_bom_exclService } from 'src/app/shared/MES/torder_lead_bom_excl.service';

@Component({
  selector: 'app-torder_lead_bom_excl-info',
  templateUrl: './torder_lead_bom_excl-info.component.html',
  styleUrls: ['./torder_lead_bom_excl-info.component.css']
})
export class torder_lead_bom_exclInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bom_exclService: torder_lead_bom_exclService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_lead_bom_exclService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_lead_bom_exclSearch();
  }
  torder_lead_bom_exclSearch() {
    this.torder_lead_bom_exclService.GetByIDAsync().subscribe(
      res => {
        this.torder_lead_bom_exclService.FormData = res as torder_lead_bom_excl;
        if (this.torder_lead_bom_exclService.FormData.LEAD_INDEX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_lead_bom_exclSave() {
    this.torder_lead_bom_exclService.IsShowLoading = true;
    this.torder_lead_bom_exclService.SaveAsync().subscribe(
      res => {
        this.torder_lead_bom_exclService.FormData = res as torder_lead_bom_excl;
        this.Router.navigateByUrl(environment.torder_lead_bom_exclInfo + this.torder_lead_bom_exclService.FormData.LEAD_INDEX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_lead_bom_exclService.IsShowLoading = false;
      }
    );
  }
  torder_lead_bom_exclAdd() {
    this.Router.navigateByUrl(environment.torder_lead_bom_exclInfo + environment.InitializationNumber);
    this.torder_lead_bom_exclService.BaseParameter.ID = environment.InitializationNumber;
    this.torder_lead_bom_exclSearch();
  }
}

