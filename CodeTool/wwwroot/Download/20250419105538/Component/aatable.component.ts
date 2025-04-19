import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { aatable } from 'src/app/shared/MES/aatable.model';
import { aatableService } from 'src/app/shared/MES/aatable.service';

@Component({
  selector: 'app-aatable',
  templateUrl: './aatable.component.html',
  styleUrls: ['./aatable.component.css']
})
export class aatableComponent implements OnInit {

  @ViewChild('aatableSort') aatableSort: MatSort;
  @ViewChild('aatablePaginator') aatablePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public aatableService: aatableService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.aatableSearch();
  }
  aatableSearch() {
    this.aatableService.SearchAll(this.aatableSort, this.aatablePaginator);
  }
  aatableSave(element: aatable) {
    this.aatableService.FormData = element;
    this.NotificationService.warn(this.aatableService.ComponentSaveAll(this.aatableSort, this.aatablePaginator));
  }
  aatableDelete(element: aatable) {
    this.aatableService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.aatableService.ComponentDeleteAll(this.aatableSort, this.aatablePaginator));
  }
  aatableAdd(element: aatable) {
    this.aatableService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(aatableDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.aatableSearch();
    });
  }
}
