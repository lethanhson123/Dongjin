import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection } from 'src/app/shared/MES/torderinspection.model';
import { torderinspectionService } from 'src/app/shared/MES/torderinspection.service';

@Component({
  selector: 'app-torderinspection',
  templateUrl: './torderinspection.component.html',
  styleUrls: ['./torderinspection.component.css']
})
export class torderinspectionComponent implements OnInit {

  @ViewChild('torderinspectionSort') torderinspectionSort: MatSort;
  @ViewChild('torderinspectionPaginator') torderinspectionPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspectionService: torderinspectionService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderinspectionSearch();
  }
  torderinspectionSearch() {
    this.torderinspectionService.SearchAll(this.torderinspectionSort, this.torderinspectionPaginator);
  }
  torderinspectionSave(element: torderinspection) {
    this.torderinspectionService.FormData = element;
    this.NotificationService.warn(this.torderinspectionService.ComponentSaveAll(this.torderinspectionSort, this.torderinspectionPaginator));
  }
  torderinspectionDelete(element: torderinspection) {
    this.torderinspectionService.BaseParameter.ID = element.INSPECTION_IDX;
    this.NotificationService.warn(this.torderinspectionService.ComponentDeleteAll(this.torderinspectionSort, this.torderinspectionPaginator));
  }
  torderinspectionAdd(element: torderinspection) {
    this.torderinspectionService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderinspectionDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderinspectionSearch();
    });
  }
}
