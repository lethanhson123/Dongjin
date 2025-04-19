import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_po_list } from 'src/app/shared/MES/tsbom_po_list.model';
import { tsbom_po_listService } from 'src/app/shared/MES/tsbom_po_list.service';

@Component({
  selector: 'app-tsbom_po_list-info',
  templateUrl: './tsbom_po_list-info.component.html',
  styleUrls: ['./tsbom_po_list-info.component.css']
})
export class tsbom_po_listInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_po_listService: tsbom_po_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_po_listService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsbom_po_listSearch();
  }
  tsbom_po_listSearch() {
    this.tsbom_po_listService.GetByIDAsync().subscribe(
      res => {
        this.tsbom_po_listService.FormData = res as tsbom_po_list;
        if (this.tsbom_po_listService.FormData.BOM_PO_LIST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsbom_po_listSave() {
    this.tsbom_po_listService.IsShowLoading = true;
    this.tsbom_po_listService.SaveAsync().subscribe(
      res => {
        this.tsbom_po_listService.FormData = res as tsbom_po_list;
        this.Router.navigateByUrl(environment.tsbom_po_listInfo + this.tsbom_po_listService.FormData.BOM_PO_LIST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsbom_po_listService.IsShowLoading = false;
      }
    );
  }
  tsbom_po_listAdd() {
    this.Router.navigateByUrl(environment.tsbom_po_listInfo + environment.InitializationNumber);
    this.tsbom_po_listService.BaseParameter.ID = environment.InitializationNumber;
    this.tsbom_po_listSearch();
  }
}

