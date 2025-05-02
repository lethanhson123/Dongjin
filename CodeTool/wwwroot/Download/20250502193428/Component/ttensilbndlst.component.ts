import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttensilbndlst } from 'src/app/shared/MES/ttensilbndlst.model';
import { ttensilbndlstService } from 'src/app/shared/MES/ttensilbndlst.service';

@Component({
  selector: 'app-ttensilbndlst',
  templateUrl: './ttensilbndlst.component.html',
  styleUrls: ['./ttensilbndlst.component.css']
})
export class ttensilbndlstComponent implements OnInit {

  @ViewChild('ttensilbndlstSort') ttensilbndlstSort: MatSort;
  @ViewChild('ttensilbndlstPaginator') ttensilbndlstPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttensilbndlstService: ttensilbndlstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttensilbndlstSearch();
  }
  ttensilbndlstSearch() {
    this.ttensilbndlstService.SearchAll(this.ttensilbndlstSort, this.ttensilbndlstPaginator);
  }
  ttensilbndlstSave(element: ttensilbndlst) {
    this.ttensilbndlstService.FormData = element;
    this.NotificationService.warn(this.ttensilbndlstService.ComponentSaveAll(this.ttensilbndlstSort, this.ttensilbndlstPaginator));
  }
  ttensilbndlstDelete(element: ttensilbndlst) {
    this.ttensilbndlstService.BaseParameter.ID = element.BNDLST_IDX;
    this.NotificationService.warn(this.ttensilbndlstService.ComponentDeleteAll(this.ttensilbndlstSort, this.ttensilbndlstPaginator));
  }
  ttensilbndlstAdd(element: ttensilbndlst) {
    this.ttensilbndlstService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttensilbndlstDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttensilbndlstSearch();
    });
  }
}
