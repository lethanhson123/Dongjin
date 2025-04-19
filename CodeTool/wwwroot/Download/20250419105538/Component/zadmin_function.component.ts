import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zadmin_function } from 'src/app/shared/MES/zadmin_function.model';
import { zadmin_functionService } from 'src/app/shared/MES/zadmin_function.service';

@Component({
  selector: 'app-zadmin_function',
  templateUrl: './zadmin_function.component.html',
  styleUrls: ['./zadmin_function.component.css']
})
export class zadmin_functionComponent implements OnInit {

  @ViewChild('zadmin_functionSort') zadmin_functionSort: MatSort;
  @ViewChild('zadmin_functionPaginator') zadmin_functionPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zadmin_functionService: zadmin_functionService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.zadmin_functionSearch();
  }
  zadmin_functionSearch() {
    this.zadmin_functionService.SearchAll(this.zadmin_functionSort, this.zadmin_functionPaginator);
  }
  zadmin_functionSave(element: zadmin_function) {
    this.zadmin_functionService.FormData = element;
    this.NotificationService.warn(this.zadmin_functionService.ComponentSaveAll(this.zadmin_functionSort, this.zadmin_functionPaginator));
  }
  zadmin_functionDelete(element: zadmin_function) {
    this.zadmin_functionService.BaseParameter.ID = element.ZADMIN_FUNCTION_IDX;
    this.NotificationService.warn(this.zadmin_functionService.ComponentDeleteAll(this.zadmin_functionSort, this.zadmin_functionPaginator));
  }
  zadmin_functionAdd(element: zadmin_function) {
    this.zadmin_functionService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(zadmin_functionDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.zadmin_functionSearch();
    });
  }
}
