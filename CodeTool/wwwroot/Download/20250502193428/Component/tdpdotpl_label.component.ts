import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl_label } from 'src/app/shared/MES/tdpdotpl_label.model';
import { tdpdotpl_labelService } from 'src/app/shared/MES/tdpdotpl_label.service';

@Component({
  selector: 'app-tdpdotpl_label',
  templateUrl: './tdpdotpl_label.component.html',
  styleUrls: ['./tdpdotpl_label.component.css']
})
export class tdpdotpl_labelComponent implements OnInit {

  @ViewChild('tdpdotpl_labelSort') tdpdotpl_labelSort: MatSort;
  @ViewChild('tdpdotpl_labelPaginator') tdpdotpl_labelPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotpl_labelService: tdpdotpl_labelService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotpl_labelSearch();
  }
  tdpdotpl_labelSearch() {
    this.tdpdotpl_labelService.SearchAll(this.tdpdotpl_labelSort, this.tdpdotpl_labelPaginator);
  }
  tdpdotpl_labelSave(element: tdpdotpl_label) {
    this.tdpdotpl_labelService.FormData = element;
    this.NotificationService.warn(this.tdpdotpl_labelService.ComponentSaveAll(this.tdpdotpl_labelSort, this.tdpdotpl_labelPaginator));
  }
  tdpdotpl_labelDelete(element: tdpdotpl_label) {
    this.tdpdotpl_labelService.BaseParameter.ID = element.PDOTPL_IDX;
    this.NotificationService.warn(this.tdpdotpl_labelService.ComponentDeleteAll(this.tdpdotpl_labelSort, this.tdpdotpl_labelPaginator));
  }
  tdpdotpl_labelAdd(element: tdpdotpl_label) {
    this.tdpdotpl_labelService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdotpl_labelDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdotpl_labelSearch();
    });
  }
}
