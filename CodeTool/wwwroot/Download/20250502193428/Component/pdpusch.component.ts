import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdpusch } from 'src/app/shared/MES/pdpusch.model';
import { pdpuschService } from 'src/app/shared/MES/pdpusch.service';

@Component({
  selector: 'app-pdpusch',
  templateUrl: './pdpusch.component.html',
  styleUrls: ['./pdpusch.component.css']
})
export class pdpuschComponent implements OnInit {

  @ViewChild('pdpuschSort') pdpuschSort: MatSort;
  @ViewChild('pdpuschPaginator') pdpuschPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdpuschService: pdpuschService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdpuschSearch();
  }
  pdpuschSearch() {
    this.pdpuschService.SearchAll(this.pdpuschSort, this.pdpuschPaginator);
  }
  pdpuschSave(element: pdpusch) {
    this.pdpuschService.FormData = element;
    this.NotificationService.warn(this.pdpuschService.ComponentSaveAll(this.pdpuschSort, this.pdpuschPaginator));
  }
  pdpuschDelete(element: pdpusch) {
    this.pdpuschService.BaseParameter.ID = element.PDPUSCH_IDX;
    this.NotificationService.warn(this.pdpuschService.ComponentDeleteAll(this.pdpuschSort, this.pdpuschPaginator));
  }
  pdpuschAdd(element: pdpusch) {
    this.pdpuschService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pdpuschDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pdpuschSearch();
    });
  }
}
