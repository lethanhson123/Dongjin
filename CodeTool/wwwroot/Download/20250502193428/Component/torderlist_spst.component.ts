import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderlist_spst } from 'src/app/shared/MES/torderlist_spst.model';
import { torderlist_spstService } from 'src/app/shared/MES/torderlist_spst.service';

@Component({
  selector: 'app-torderlist_spst',
  templateUrl: './torderlist_spst.component.html',
  styleUrls: ['./torderlist_spst.component.css']
})
export class torderlist_spstComponent implements OnInit {

  @ViewChild('torderlist_spstSort') torderlist_spstSort: MatSort;
  @ViewChild('torderlist_spstPaginator') torderlist_spstPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderlist_spstService: torderlist_spstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderlist_spstSearch();
  }
  torderlist_spstSearch() {
    this.torderlist_spstService.SearchAll(this.torderlist_spstSort, this.torderlist_spstPaginator);
  }
  torderlist_spstSave(element: torderlist_spst) {
    this.torderlist_spstService.FormData = element;
    this.NotificationService.warn(this.torderlist_spstService.ComponentSaveAll(this.torderlist_spstSort, this.torderlist_spstPaginator));
  }
  torderlist_spstDelete(element: torderlist_spst) {
    this.torderlist_spstService.BaseParameter.ID = element.ORDER_IDX;
    this.NotificationService.warn(this.torderlist_spstService.ComponentDeleteAll(this.torderlist_spstSort, this.torderlist_spstPaginator));
  }
  torderlist_spstAdd(element: torderlist_spst) {
    this.torderlist_spstService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderlist_spstDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderlist_spstSearch();
    });
  }
}
