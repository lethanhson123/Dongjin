import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdd_poplan_djg } from 'src/app/shared/MES/tdd_poplan_djg.model';
import { tdd_poplan_djgService } from 'src/app/shared/MES/tdd_poplan_djg.service';

@Component({
  selector: 'app-tdd_poplan_djg',
  templateUrl: './tdd_poplan_djg.component.html',
  styleUrls: ['./tdd_poplan_djg.component.css']
})
export class tdd_poplan_djgComponent implements OnInit {

  @ViewChild('tdd_poplan_djgSort') tdd_poplan_djgSort: MatSort;
  @ViewChild('tdd_poplan_djgPaginator') tdd_poplan_djgPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdd_poplan_djgService: tdd_poplan_djgService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdd_poplan_djgSearch();
  }
  tdd_poplan_djgSearch() {
    this.tdd_poplan_djgService.SearchAll(this.tdd_poplan_djgSort, this.tdd_poplan_djgPaginator);
  }
  tdd_poplan_djgSave(element: tdd_poplan_djg) {
    this.tdd_poplan_djgService.FormData = element;
    this.NotificationService.warn(this.tdd_poplan_djgService.ComponentSaveAll(this.tdd_poplan_djgSort, this.tdd_poplan_djgPaginator));
  }
  tdd_poplan_djgDelete(element: tdd_poplan_djg) {
    this.tdd_poplan_djgService.BaseParameter.ID = element.TDD_PPD_IDX;
    this.NotificationService.warn(this.tdd_poplan_djgService.ComponentDeleteAll(this.tdd_poplan_djgSort, this.tdd_poplan_djgPaginator));
  }
  tdd_poplan_djgAdd(element: tdd_poplan_djg) {
    this.tdd_poplan_djgService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdd_poplan_djgDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdd_poplan_djgSearch();
    });
  }
}
