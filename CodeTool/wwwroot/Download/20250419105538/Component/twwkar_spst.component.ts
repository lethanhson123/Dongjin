import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twwkar_spst } from 'src/app/shared/MES/twwkar_spst.model';
import { twwkar_spstService } from 'src/app/shared/MES/twwkar_spst.service';

@Component({
  selector: 'app-twwkar_spst',
  templateUrl: './twwkar_spst.component.html',
  styleUrls: ['./twwkar_spst.component.css']
})
export class twwkar_spstComponent implements OnInit {

  @ViewChild('twwkar_spstSort') twwkar_spstSort: MatSort;
  @ViewChild('twwkar_spstPaginator') twwkar_spstPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twwkar_spstService: twwkar_spstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.twwkar_spstSearch();
  }
  twwkar_spstSearch() {
    this.twwkar_spstService.SearchAll(this.twwkar_spstSort, this.twwkar_spstPaginator);
  }
  twwkar_spstSave(element: twwkar_spst) {
    this.twwkar_spstService.FormData = element;
    this.NotificationService.warn(this.twwkar_spstService.ComponentSaveAll(this.twwkar_spstSort, this.twwkar_spstPaginator));
  }
  twwkar_spstDelete(element: twwkar_spst) {
    this.twwkar_spstService.BaseParameter.ID = element.WK_IDX;
    this.NotificationService.warn(this.twwkar_spstService.ComponentDeleteAll(this.twwkar_spstSort, this.twwkar_spstPaginator));
  }
  twwkar_spstAdd(element: twwkar_spst) {
    this.twwkar_spstService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(twwkar_spstDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.twwkar_spstSearch();
    });
  }
}
