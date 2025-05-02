import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_loc } from 'src/app/shared/MES/tdpdmtim_loc.model';
import { tdpdmtim_locService } from 'src/app/shared/MES/tdpdmtim_loc.service';

@Component({
  selector: 'app-tdpdmtim_loc',
  templateUrl: './tdpdmtim_loc.component.html',
  styleUrls: ['./tdpdmtim_loc.component.css']
})
export class tdpdmtim_locComponent implements OnInit {

  @ViewChild('tdpdmtim_locSort') tdpdmtim_locSort: MatSort;
  @ViewChild('tdpdmtim_locPaginator') tdpdmtim_locPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_locService: tdpdmtim_locService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_locSearch();
  }
  tdpdmtim_locSearch() {
    this.tdpdmtim_locService.SearchAll(this.tdpdmtim_locSort, this.tdpdmtim_locPaginator);
  }
  tdpdmtim_locSave(element: tdpdmtim_loc) {
    this.tdpdmtim_locService.FormData = element;
    this.NotificationService.warn(this.tdpdmtim_locService.ComponentSaveAll(this.tdpdmtim_locSort, this.tdpdmtim_locPaginator));
  }
  tdpdmtim_locDelete(element: tdpdmtim_loc) {
    this.tdpdmtim_locService.BaseParameter.ID = element.TDLOC_IDX;
    this.NotificationService.warn(this.tdpdmtim_locService.ComponentDeleteAll(this.tdpdmtim_locSort, this.tdpdmtim_locPaginator));
  }
  tdpdmtim_locAdd(element: tdpdmtim_loc) {
    this.tdpdmtim_locService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdmtim_locDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdmtim_locSearch();
    });
  }
}
