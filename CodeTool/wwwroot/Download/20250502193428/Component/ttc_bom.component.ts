import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_bom } from 'src/app/shared/MES/ttc_bom.model';
import { ttc_bomService } from 'src/app/shared/MES/ttc_bom.service';

@Component({
  selector: 'app-ttc_bom',
  templateUrl: './ttc_bom.component.html',
  styleUrls: ['./ttc_bom.component.css']
})
export class ttc_bomComponent implements OnInit {

  @ViewChild('ttc_bomSort') ttc_bomSort: MatSort;
  @ViewChild('ttc_bomPaginator') ttc_bomPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_bomService: ttc_bomService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttc_bomSearch();
  }
  ttc_bomSearch() {
    this.ttc_bomService.SearchAll(this.ttc_bomSort, this.ttc_bomPaginator);
  }
  ttc_bomSave(element: ttc_bom) {
    this.ttc_bomService.FormData = element;
    this.NotificationService.warn(this.ttc_bomService.ComponentSaveAll(this.ttc_bomSort, this.ttc_bomPaginator));
  }
  ttc_bomDelete(element: ttc_bom) {
    this.ttc_bomService.BaseParameter.ID = element.TTC_BOM_IDX;
    this.NotificationService.warn(this.ttc_bomService.ComponentDeleteAll(this.ttc_bomSort, this.ttc_bomPaginator));
  }
  ttc_bomAdd(element: ttc_bom) {
    this.ttc_bomService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttc_bomDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttc_bomSearch();
    });
  }
}
