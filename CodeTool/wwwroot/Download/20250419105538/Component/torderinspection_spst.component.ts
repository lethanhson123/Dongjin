import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection_spst } from 'src/app/shared/MES/torderinspection_spst.model';
import { torderinspection_spstService } from 'src/app/shared/MES/torderinspection_spst.service';

@Component({
  selector: 'app-torderinspection_spst',
  templateUrl: './torderinspection_spst.component.html',
  styleUrls: ['./torderinspection_spst.component.css']
})
export class torderinspection_spstComponent implements OnInit {

  @ViewChild('torderinspection_spstSort') torderinspection_spstSort: MatSort;
  @ViewChild('torderinspection_spstPaginator') torderinspection_spstPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspection_spstService: torderinspection_spstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderinspection_spstSearch();
  }
  torderinspection_spstSearch() {
    this.torderinspection_spstService.SearchAll(this.torderinspection_spstSort, this.torderinspection_spstPaginator);
  }
  torderinspection_spstSave(element: torderinspection_spst) {
    this.torderinspection_spstService.FormData = element;
    this.NotificationService.warn(this.torderinspection_spstService.ComponentSaveAll(this.torderinspection_spstSort, this.torderinspection_spstPaginator));
  }
  torderinspection_spstDelete(element: torderinspection_spst) {
    this.torderinspection_spstService.BaseParameter.ID = element.INSPECTION_IDX;
    this.NotificationService.warn(this.torderinspection_spstService.ComponentDeleteAll(this.torderinspection_spstSort, this.torderinspection_spstPaginator));
  }
  torderinspection_spstAdd(element: torderinspection_spst) {
    this.torderinspection_spstService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderinspection_spstDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderinspection_spstSearch();
    });
  }
}
