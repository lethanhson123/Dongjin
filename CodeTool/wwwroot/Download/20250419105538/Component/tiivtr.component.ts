import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr } from 'src/app/shared/MES/tiivtr.model';
import { tiivtrService } from 'src/app/shared/MES/tiivtr.service';

@Component({
  selector: 'app-tiivtr',
  templateUrl: './tiivtr.component.html',
  styleUrls: ['./tiivtr.component.css']
})
export class tiivtrComponent implements OnInit {

  @ViewChild('tiivtrSort') tiivtrSort: MatSort;
  @ViewChild('tiivtrPaginator') tiivtrPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtrService: tiivtrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivtrSearch();
  }
  tiivtrSearch() {
    this.tiivtrService.SearchAll(this.tiivtrSort, this.tiivtrPaginator);
  }
  tiivtrSave(element: tiivtr) {
    this.tiivtrService.FormData = element;
    this.NotificationService.warn(this.tiivtrService.ComponentSaveAll(this.tiivtrSort, this.tiivtrPaginator));
  }
  tiivtrDelete(element: tiivtr) {
    this.tiivtrService.BaseParameter.ID = element.IV_IDX;
    this.NotificationService.warn(this.tiivtrService.ComponentDeleteAll(this.tiivtrSort, this.tiivtrPaginator));
  }
  tiivtrAdd(element: tiivtr) {
    this.tiivtrService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivtrDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivtrSearch();
    });
  }
}
