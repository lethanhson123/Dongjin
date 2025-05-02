import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl } from 'src/app/shared/MES/tdpdotpl.model';
import { tdpdotplService } from 'src/app/shared/MES/tdpdotpl.service';

@Component({
  selector: 'app-tdpdotpl',
  templateUrl: './tdpdotpl.component.html',
  styleUrls: ['./tdpdotpl.component.css']
})
export class tdpdotplComponent implements OnInit {

  @ViewChild('tdpdotplSort') tdpdotplSort: MatSort;
  @ViewChild('tdpdotplPaginator') tdpdotplPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotplService: tdpdotplService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotplSearch();
  }
  tdpdotplSearch() {
    this.tdpdotplService.SearchAll(this.tdpdotplSort, this.tdpdotplPaginator);
  }
  tdpdotplSave(element: tdpdotpl) {
    this.tdpdotplService.FormData = element;
    this.NotificationService.warn(this.tdpdotplService.ComponentSaveAll(this.tdpdotplSort, this.tdpdotplPaginator));
  }
  tdpdotplDelete(element: tdpdotpl) {
    this.tdpdotplService.BaseParameter.ID = element.PDOTPL_IDX;
    this.NotificationService.warn(this.tdpdotplService.ComponentDeleteAll(this.tdpdotplSort, this.tdpdotplPaginator));
  }
  tdpdotplAdd(element: tdpdotpl) {
    this.tdpdotplService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdotplDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdotplSearch();
    });
  }
}
