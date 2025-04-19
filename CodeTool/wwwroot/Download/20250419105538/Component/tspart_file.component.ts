import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tspart_file } from 'src/app/shared/MES/tspart_file.model';
import { tspart_fileService } from 'src/app/shared/MES/tspart_file.service';

@Component({
  selector: 'app-tspart_file',
  templateUrl: './tspart_file.component.html',
  styleUrls: ['./tspart_file.component.css']
})
export class tspart_fileComponent implements OnInit {

  @ViewChild('tspart_fileSort') tspart_fileSort: MatSort;
  @ViewChild('tspart_filePaginator') tspart_filePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tspart_fileService: tspart_fileService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tspart_fileSearch();
  }
  tspart_fileSearch() {
    this.tspart_fileService.SearchAll(this.tspart_fileSort, this.tspart_filePaginator);
  }
  tspart_fileSave(element: tspart_file) {
    this.tspart_fileService.FormData = element;
    this.NotificationService.warn(this.tspart_fileService.ComponentSaveAll(this.tspart_fileSort, this.tspart_filePaginator));
  }
  tspart_fileDelete(element: tspart_file) {
    this.tspart_fileService.BaseParameter.ID = element.PARTFILE_IDX;
    this.NotificationService.warn(this.tspart_fileService.ComponentDeleteAll(this.tspart_fileSort, this.tspart_filePaginator));
  }
  tspart_fileAdd(element: tspart_file) {
    this.tspart_fileService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tspart_fileDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tspart_fileSearch();
    });
  }
}
