import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivaj_lead } from 'src/app/shared/MES/tiivaj_lead.model';
import { tiivaj_leadService } from 'src/app/shared/MES/tiivaj_lead.service';

@Component({
  selector: 'app-tiivaj_lead',
  templateUrl: './tiivaj_lead.component.html',
  styleUrls: ['./tiivaj_lead.component.css']
})
export class tiivaj_leadComponent implements OnInit {

  @ViewChild('tiivaj_leadSort') tiivaj_leadSort: MatSort;
  @ViewChild('tiivaj_leadPaginator') tiivaj_leadPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivaj_leadService: tiivaj_leadService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tiivaj_leadSearch();
  }
  tiivaj_leadSearch() {
    this.tiivaj_leadService.SearchAll(this.tiivaj_leadSort, this.tiivaj_leadPaginator);
  }
  tiivaj_leadSave(element: tiivaj_lead) {
    this.tiivaj_leadService.FormData = element;
    this.NotificationService.warn(this.tiivaj_leadService.ComponentSaveAll(this.tiivaj_leadSort, this.tiivaj_leadPaginator));
  }
  tiivaj_leadDelete(element: tiivaj_lead) {
    this.tiivaj_leadService.BaseParameter.ID = element.IVAJ_IDX;
    this.NotificationService.warn(this.tiivaj_leadService.ComponentDeleteAll(this.tiivaj_leadSort, this.tiivaj_leadPaginator));
  }
  tiivaj_leadAdd(element: tiivaj_lead) {
    this.tiivaj_leadService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tiivaj_leadDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tiivaj_leadSearch();
    });
  }
}
