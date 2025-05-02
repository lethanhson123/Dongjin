import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivaj_history } from 'src/app/shared/MES/tiivaj_history.model';
import { tiivaj_historyService } from 'src/app/shared/MES/tiivaj_history.service';

@Component({
  selector: 'app-tiivaj_history',
  templateUrl: './tiivaj_history.component.html',
  styleUrls: ['./tiivaj_history.component.css']
})
export class tiivaj_historyComponent implements OnInit {

  @ViewChild('tiivaj_historySort') tiivaj_historySort: MatSort;
  @ViewChild('tiivaj_historyPaginator') tiivaj_historyPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivaj_historyService: tiivaj_historyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivaj_historySearch();
  }
  tiivaj_historySearch() {
    this.tiivaj_historyService.SearchAll(this.tiivaj_historySort, this.tiivaj_historyPaginator);
  }
  tiivaj_historySave(element: tiivaj_history) {
    this.tiivaj_historyService.FormData = element;
    this.NotificationService.warn(this.tiivaj_historyService.ComponentSaveAll(this.tiivaj_historySort, this.tiivaj_historyPaginator));
  }
  tiivaj_historyDelete(element: tiivaj_history) {
    this.tiivaj_historyService.BaseParameter.ID = element.IVAJ_IDX;
    this.NotificationService.warn(this.tiivaj_historyService.ComponentDeleteAll(this.tiivaj_historySort, this.tiivaj_historyPaginator));
  }
  tiivaj_historyAdd(element: tiivaj_history) {
    this.tiivaj_historyService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivaj_historyDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivaj_historySearch();
    });
  }
}
