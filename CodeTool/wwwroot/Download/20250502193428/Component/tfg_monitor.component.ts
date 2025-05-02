import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tfg_monitor } from 'src/app/shared/MES/tfg_monitor.model';
import { tfg_monitorService } from 'src/app/shared/MES/tfg_monitor.service';

@Component({
  selector: 'app-tfg_monitor',
  templateUrl: './tfg_monitor.component.html',
  styleUrls: ['./tfg_monitor.component.css']
})
export class tfg_monitorComponent implements OnInit {

  @ViewChild('tfg_monitorSort') tfg_monitorSort: MatSort;
  @ViewChild('tfg_monitorPaginator') tfg_monitorPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tfg_monitorService: tfg_monitorService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tfg_monitorSearch();
  }
  tfg_monitorSearch() {
    this.tfg_monitorService.SearchAll(this.tfg_monitorSort, this.tfg_monitorPaginator);
  }
  tfg_monitorSave(element: tfg_monitor) {
    this.tfg_monitorService.FormData = element;
    this.NotificationService.warn(this.tfg_monitorService.ComponentSaveAll(this.tfg_monitorSort, this.tfg_monitorPaginator));
  }
  tfg_monitorDelete(element: tfg_monitor) {
    this.tfg_monitorService.BaseParameter.ID = element.TFG_MO_IDX;
    this.NotificationService.warn(this.tfg_monitorService.ComponentDeleteAll(this.tfg_monitorSort, this.tfg_monitorPaginator));
  }
  tfg_monitorAdd(element: tfg_monitor) {
    this.tfg_monitorService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tfg_monitorDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tfg_monitorSearch();
    });
  }
}
