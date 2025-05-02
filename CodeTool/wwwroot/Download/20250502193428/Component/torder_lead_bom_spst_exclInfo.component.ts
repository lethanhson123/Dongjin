import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom_spst_excl } from 'src/app/shared/MES/torder_lead_bom_spst_excl.model';
import { torder_lead_bom_spst_exclService } from 'src/app/shared/MES/torder_lead_bom_spst_excl.service';

@Component({
  selector: 'app-torder_lead_bom_spst_excl-info',
  templateUrl: './torder_lead_bom_spst_excl-info.component.html',
  styleUrls: ['./torder_lead_bom_spst_excl-info.component.css']
})
export class torder_lead_bom_spst_exclInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bom_spst_exclService: torder_lead_bom_spst_exclService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_lead_bom_spst_exclService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.torder_lead_bom_spst_exclSearch();
  }
  torder_lead_bom_spst_exclSearch() {
    this.torder_lead_bom_spst_exclService.GetByIDAsync().subscribe(
      res => {
        this.torder_lead_bom_spst_exclService.FormData = res as torder_lead_bom_spst_excl;
        if (this.torder_lead_bom_spst_exclService.FormData.SPST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  torder_lead_bom_spst_exclSave() {
    this.torder_lead_bom_spst_exclService.IsShowLoading = true;
    this.torder_lead_bom_spst_exclService.SaveAsync().subscribe(
      res => {
        this.torder_lead_bom_spst_exclService.FormData = res as torder_lead_bom_spst_excl;
        this.Router.navigateByUrl(environment.torder_lead_bom_spst_exclInfo + this.torder_lead_bom_spst_exclService.FormData.SPST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.torder_lead_bom_spst_exclService.IsShowLoading = false;
      }
    );
  }
  torder_lead_bom_spst_exclAdd() {
    this.Router.navigateByUrl(environment.torder_lead_bom_spst_exclInfo + environment.InitializationNumber);
    this.torder_lead_bom_spst_exclService.BaseParameter.ID = environment.InitializationNumber;
    this.torder_lead_bom_spst_exclSearch();
  }
}

