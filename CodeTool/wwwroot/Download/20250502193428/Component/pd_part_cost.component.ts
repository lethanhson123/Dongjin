import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_part_cost } from 'src/app/shared/MES/pd_part_cost.model';
import { pd_part_costService } from 'src/app/shared/MES/pd_part_cost.service';

@Component({
  selector: 'app-pd_part_cost',
  templateUrl: './pd_part_cost.component.html',
  styleUrls: ['./pd_part_cost.component.css']
})
export class pd_part_costComponent implements OnInit {

  @ViewChild('pd_part_costSort') pd_part_costSort: MatSort;
  @ViewChild('pd_part_costPaginator') pd_part_costPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_part_costService: pd_part_costService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_part_costSearch();
  }
  pd_part_costSearch() {
    this.pd_part_costService.SearchAll(this.pd_part_costSort, this.pd_part_costPaginator);
  }
  pd_part_costSave(element: pd_part_cost) {
    this.pd_part_costService.FormData = element;
    this.NotificationService.warn(this.pd_part_costService.ComponentSaveAll(this.pd_part_costSort, this.pd_part_costPaginator));
  }
  pd_part_costDelete(element: pd_part_cost) {
    this.pd_part_costService.BaseParameter.ID = element.PDCOST_IDX;
    this.NotificationService.warn(this.pd_part_costService.ComponentDeleteAll(this.pd_part_costSort, this.pd_part_costPaginator));
  }
  pd_part_costAdd(element: pd_part_cost) {
    this.pd_part_costService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pd_part_costDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pd_part_costSearch();
    });
  }
}
