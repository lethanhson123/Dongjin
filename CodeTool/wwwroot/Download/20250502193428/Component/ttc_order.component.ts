import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_order } from 'src/app/shared/MES/ttc_order.model';
import { ttc_orderService } from 'src/app/shared/MES/ttc_order.service';

@Component({
  selector: 'app-ttc_order',
  templateUrl: './ttc_order.component.html',
  styleUrls: ['./ttc_order.component.css']
})
export class ttc_orderComponent implements OnInit {

  @ViewChild('ttc_orderSort') ttc_orderSort: MatSort;
  @ViewChild('ttc_orderPaginator') ttc_orderPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_orderService: ttc_orderService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttc_orderSearch();
  }
  ttc_orderSearch() {
    this.ttc_orderService.SearchAll(this.ttc_orderSort, this.ttc_orderPaginator);
  }
  ttc_orderSave(element: ttc_order) {
    this.ttc_orderService.FormData = element;
    this.NotificationService.warn(this.ttc_orderService.ComponentSaveAll(this.ttc_orderSort, this.ttc_orderPaginator));
  }
  ttc_orderDelete(element: ttc_order) {
    this.ttc_orderService.BaseParameter.ID = element.TTC_PO_INX;
    this.NotificationService.warn(this.ttc_orderService.ComponentDeleteAll(this.ttc_orderSort, this.ttc_orderPaginator));
  }
  ttc_orderAdd(element: ttc_order) {
    this.ttc_orderService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttc_orderDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttc_orderSearch();
    });
  }
}
