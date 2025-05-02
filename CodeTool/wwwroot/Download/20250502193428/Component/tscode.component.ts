import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscode } from 'src/app/shared/MES/tscode.model';
import { tscodeService } from 'src/app/shared/MES/tscode.service';

@Component({
  selector: 'app-tscode',
  templateUrl: './tscode.component.html',
  styleUrls: ['./tscode.component.css']
})
export class tscodeComponent implements OnInit {

  @ViewChild('tscodeSort') tscodeSort: MatSort;
  @ViewChild('tscodePaginator') tscodePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscodeService: tscodeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscodeSearch();
  }
  tscodeSearch() {
    this.tscodeService.SearchAll(this.tscodeSort, this.tscodePaginator);
  }
  tscodeSave(element: tscode) {
    this.tscodeService.FormData = element;
    this.NotificationService.warn(this.tscodeService.ComponentSaveAll(this.tscodeSort, this.tscodePaginator));
  }
  tscodeDelete(element: tscode) {
    this.tscodeService.BaseParameter.ID = element.CD_IDX;
    this.NotificationService.warn(this.tscodeService.ComponentDeleteAll(this.tscodeSort, this.tscodePaginator));
  }
  tscodeAdd(element: tscode) {
    this.tscodeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tscodeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tscodeSearch();
    });
  }
}
