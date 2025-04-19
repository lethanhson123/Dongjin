import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtin_serial } from 'src/app/shared/MES/tdpdmtin_serial.model';
import { tdpdmtin_serialService } from 'src/app/shared/MES/tdpdmtin_serial.service';

@Component({
  selector: 'app-tdpdmtin_serial',
  templateUrl: './tdpdmtin_serial.component.html',
  styleUrls: ['./tdpdmtin_serial.component.css']
})
export class tdpdmtin_serialComponent implements OnInit {

  @ViewChild('tdpdmtin_serialSort') tdpdmtin_serialSort: MatSort;
  @ViewChild('tdpdmtin_serialPaginator') tdpdmtin_serialPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtin_serialService: tdpdmtin_serialService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtin_serialSearch();
  }
  tdpdmtin_serialSearch() {
    this.tdpdmtin_serialService.SearchAll(this.tdpdmtin_serialSort, this.tdpdmtin_serialPaginator);
  }
  tdpdmtin_serialSave(element: tdpdmtin_serial) {
    this.tdpdmtin_serialService.FormData = element;
    this.NotificationService.warn(this.tdpdmtin_serialService.ComponentSaveAll(this.tdpdmtin_serialSort, this.tdpdmtin_serialPaginator));
  }
  tdpdmtin_serialDelete(element: tdpdmtin_serial) {
    this.tdpdmtin_serialService.BaseParameter.ID = element.TDPDMTIN_SERIAL_IDX;
    this.NotificationService.warn(this.tdpdmtin_serialService.ComponentDeleteAll(this.tdpdmtin_serialSort, this.tdpdmtin_serialPaginator));
  }
  tdpdmtin_serialAdd(element: tdpdmtin_serial) {
    this.tdpdmtin_serialService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdmtin_serialDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdmtin_serialSearch();
    });
  }
}
