import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_part_inf } from 'src/app/shared/MES/tsbom_part_inf.model';
import { tsbom_part_infService } from 'src/app/shared/MES/tsbom_part_inf.service';

@Component({
  selector: 'app-tsbom_part_inf',
  templateUrl: './tsbom_part_inf.component.html',
  styleUrls: ['./tsbom_part_inf.component.css']
})
export class tsbom_part_infComponent implements OnInit {

  @ViewChild('tsbom_part_infSort') tsbom_part_infSort: MatSort;
  @ViewChild('tsbom_part_infPaginator') tsbom_part_infPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_part_infService: tsbom_part_infService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_part_infSearch();
  }
  tsbom_part_infSearch() {
    this.tsbom_part_infService.SearchAll(this.tsbom_part_infSort, this.tsbom_part_infPaginator);
  }
  tsbom_part_infSave(element: tsbom_part_inf) {
    this.tsbom_part_infService.FormData = element;
    this.NotificationService.warn(this.tsbom_part_infService.ComponentSaveAll(this.tsbom_part_infSort, this.tsbom_part_infPaginator));
  }
  tsbom_part_infDelete(element: tsbom_part_inf) {
    this.tsbom_part_infService.BaseParameter.ID = element.INF_BOM_IDX;
    this.NotificationService.warn(this.tsbom_part_infService.ComponentDeleteAll(this.tsbom_part_infSort, this.tsbom_part_infPaginator));
  }
  tsbom_part_infAdd(element: tsbom_part_inf) {
    this.tsbom_part_infService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsbom_part_infDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsbom_part_infSearch();
    });
  }
}
