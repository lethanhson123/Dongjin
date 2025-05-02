import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttoolmaster } from 'src/app/shared/MES/ttoolmaster.model';
import { ttoolmasterService } from 'src/app/shared/MES/ttoolmaster.service';

@Component({
  selector: 'app-ttoolmaster',
  templateUrl: './ttoolmaster.component.html',
  styleUrls: ['./ttoolmaster.component.css']
})
export class ttoolmasterComponent implements OnInit {

  @ViewChild('ttoolmasterSort') ttoolmasterSort: MatSort;
  @ViewChild('ttoolmasterPaginator') ttoolmasterPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttoolmasterService: ttoolmasterService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttoolmasterSearch();
  }
  ttoolmasterSearch() {
    this.ttoolmasterService.SearchAll(this.ttoolmasterSort, this.ttoolmasterPaginator);
  }
  ttoolmasterSave(element: ttoolmaster) {
    this.ttoolmasterService.FormData = element;
    this.NotificationService.warn(this.ttoolmasterService.ComponentSaveAll(this.ttoolmasterSort, this.ttoolmasterPaginator));
  }
  ttoolmasterDelete(element: ttoolmaster) {
    this.ttoolmasterService.BaseParameter.ID = element.TOOL_IDX;
    this.NotificationService.warn(this.ttoolmasterService.ComponentDeleteAll(this.ttoolmasterSort, this.ttoolmasterPaginator));
  }
  ttoolmasterAdd(element: ttoolmaster) {
    this.ttoolmasterService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttoolmasterDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttoolmasterSearch();
    });
  }
}
