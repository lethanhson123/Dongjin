import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivaj } from 'src/app/shared/MES/tiivaj.model';
import { tiivajService } from 'src/app/shared/MES/tiivaj.service';

@Component({
  selector: 'app-tiivaj',
  templateUrl: './tiivaj.component.html',
  styleUrls: ['./tiivaj.component.css']
})
export class tiivajComponent implements OnInit {

  @ViewChild('tiivajSort') tiivajSort: MatSort;
  @ViewChild('tiivajPaginator') tiivajPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivajService: tiivajService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivajSearch();
  }
  tiivajSearch() {
    this.tiivajService.SearchAll(this.tiivajSort, this.tiivajPaginator);
  }
  tiivajSave(element: tiivaj) {
    this.tiivajService.FormData = element;
    this.NotificationService.warn(this.tiivajService.ComponentSaveAll(this.tiivajSort, this.tiivajPaginator));
  }
  tiivajDelete(element: tiivaj) {
    this.tiivajService.BaseParameter.ID = element.IVAJ_IDX;
    this.NotificationService.warn(this.tiivajService.ComponentDeleteAll(this.tiivajSort, this.tiivajPaginator));
  }
  tiivajAdd(element: tiivaj) {
    this.tiivajService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivajDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivajSearch();
    });
  }
}
