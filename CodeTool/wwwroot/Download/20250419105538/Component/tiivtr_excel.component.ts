import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_excel } from 'src/app/shared/MES/tiivtr_excel.model';
import { tiivtr_excelService } from 'src/app/shared/MES/tiivtr_excel.service';

@Component({
  selector: 'app-tiivtr_excel',
  templateUrl: './tiivtr_excel.component.html',
  styleUrls: ['./tiivtr_excel.component.css']
})
export class tiivtr_excelComponent implements OnInit {

  @ViewChild('tiivtr_excelSort') tiivtr_excelSort: MatSort;
  @ViewChild('tiivtr_excelPaginator') tiivtr_excelPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_excelService: tiivtr_excelService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtr_excelSearch();
  }
  tiivtr_excelSearch() {
    this.tiivtr_excelService.SearchAll(this.tiivtr_excelSort, this.tiivtr_excelPaginator);
  }
  tiivtr_excelSave(element: tiivtr_excel) {
    this.tiivtr_excelService.FormData = element;
    this.NotificationService.warn(this.tiivtr_excelService.ComponentSaveAll(this.tiivtr_excelSort, this.tiivtr_excelPaginator));
  }
  tiivtr_excelDelete(element: tiivtr_excel) {
    this.tiivtr_excelService.BaseParameter.ID = element.IV_IDX;
    this.NotificationService.warn(this.tiivtr_excelService.ComponentDeleteAll(this.tiivtr_excelSort, this.tiivtr_excelPaginator));
  }
  tiivtr_excelAdd(element: tiivtr_excel) {
    this.tiivtr_excelService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivtr_excelDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivtr_excelSearch();
    });
  }
}
