import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdd_poplan } from 'src/app/shared/MES/tdd_poplan.model';
import { tdd_poplanService } from 'src/app/shared/MES/tdd_poplan.service';

@Component({
  selector: 'app-tdd_poplan',
  templateUrl: './tdd_poplan.component.html',
  styleUrls: ['./tdd_poplan.component.css']
})
export class tdd_poplanComponent implements OnInit {

  @ViewChild('tdd_poplanSort') tdd_poplanSort: MatSort;
  @ViewChild('tdd_poplanPaginator') tdd_poplanPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdd_poplanService: tdd_poplanService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdd_poplanSearch();
  }
  tdd_poplanSearch() {
    this.tdd_poplanService.SearchAll(this.tdd_poplanSort, this.tdd_poplanPaginator);
  }
  tdd_poplanSave(element: tdd_poplan) {
    this.tdd_poplanService.FormData = element;
    this.NotificationService.warn(this.tdd_poplanService.ComponentSaveAll(this.tdd_poplanSort, this.tdd_poplanPaginator));
  }
  tdd_poplanDelete(element: tdd_poplan) {
    this.tdd_poplanService.BaseParameter.ID = element.TDD_PP_IDX;
    this.NotificationService.warn(this.tdd_poplanService.ComponentDeleteAll(this.tdd_poplanSort, this.tdd_poplanPaginator));
  }
  tdd_poplanAdd(element: tdd_poplan) {
    this.tdd_poplanService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdd_poplanDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdd_poplanSearch();
    });
  }
}
