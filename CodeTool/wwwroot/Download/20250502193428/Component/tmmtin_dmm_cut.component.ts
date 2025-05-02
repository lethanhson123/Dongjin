import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm_cut } from 'src/app/shared/MES/tmmtin_dmm_cut.model';
import { tmmtin_dmm_cutService } from 'src/app/shared/MES/tmmtin_dmm_cut.service';

@Component({
  selector: 'app-tmmtin_dmm_cut',
  templateUrl: './tmmtin_dmm_cut.component.html',
  styleUrls: ['./tmmtin_dmm_cut.component.css']
})
export class tmmtin_dmm_cutComponent implements OnInit {

  @ViewChild('tmmtin_dmm_cutSort') tmmtin_dmm_cutSort: MatSort;
  @ViewChild('tmmtin_dmm_cutPaginator') tmmtin_dmm_cutPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmm_cutService: tmmtin_dmm_cutService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtin_dmm_cutSearch();
  }
  tmmtin_dmm_cutSearch() {
    this.tmmtin_dmm_cutService.SearchAll(this.tmmtin_dmm_cutSort, this.tmmtin_dmm_cutPaginator);
  }
  tmmtin_dmm_cutSave(element: tmmtin_dmm_cut) {
    this.tmmtin_dmm_cutService.FormData = element;
    this.NotificationService.warn(this.tmmtin_dmm_cutService.ComponentSaveAll(this.tmmtin_dmm_cutSort, this.tmmtin_dmm_cutPaginator));
  }
  tmmtin_dmm_cutDelete(element: tmmtin_dmm_cut) {
    this.tmmtin_dmm_cutService.BaseParameter.ID = element.TMMTIN_DMM_IDX;
    this.NotificationService.warn(this.tmmtin_dmm_cutService.ComponentDeleteAll(this.tmmtin_dmm_cutSort, this.tmmtin_dmm_cutPaginator));
  }
  tmmtin_dmm_cutAdd(element: tmmtin_dmm_cut) {
    this.tmmtin_dmm_cutService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tmmtin_dmm_cutDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tmmtin_dmm_cutSearch();
    });
  }
}
