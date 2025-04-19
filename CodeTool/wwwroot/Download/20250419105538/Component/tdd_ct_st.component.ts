import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdd_ct_st } from 'src/app/shared/MES/tdd_ct_st.model';
import { tdd_ct_stService } from 'src/app/shared/MES/tdd_ct_st.service';

@Component({
  selector: 'app-tdd_ct_st',
  templateUrl: './tdd_ct_st.component.html',
  styleUrls: ['./tdd_ct_st.component.css']
})
export class tdd_ct_stComponent implements OnInit {

  @ViewChild('tdd_ct_stSort') tdd_ct_stSort: MatSort;
  @ViewChild('tdd_ct_stPaginator') tdd_ct_stPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdd_ct_stService: tdd_ct_stService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdd_ct_stSearch();
  }
  tdd_ct_stSearch() {
    this.tdd_ct_stService.SearchAll(this.tdd_ct_stSort, this.tdd_ct_stPaginator);
  }
  tdd_ct_stSave(element: tdd_ct_st) {
    this.tdd_ct_stService.FormData = element;
    this.NotificationService.warn(this.tdd_ct_stService.ComponentSaveAll(this.tdd_ct_stSort, this.tdd_ct_stPaginator));
  }
  tdd_ct_stDelete(element: tdd_ct_st) {
    this.tdd_ct_stService.BaseParameter.ID = element.TDD_CT_IDX;
    this.NotificationService.warn(this.tdd_ct_stService.ComponentDeleteAll(this.tdd_ct_stSort, this.tdd_ct_stPaginator));
  }
  tdd_ct_stAdd(element: tdd_ct_st) {
    this.tdd_ct_stService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdd_ct_stDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdd_ct_stSearch();
    });
  }
}
