import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_not_climp } from 'src/app/shared/MES/torder_bom_not_climp.model';
import { torder_bom_not_climpService } from 'src/app/shared/MES/torder_bom_not_climp.service';

@Component({
  selector: 'app-torder_bom_not_climp',
  templateUrl: './torder_bom_not_climp.component.html',
  styleUrls: ['./torder_bom_not_climp.component.css']
})
export class torder_bom_not_climpComponent implements OnInit {

  @ViewChild('torder_bom_not_climpSort') torder_bom_not_climpSort: MatSort;
  @ViewChild('torder_bom_not_climpPaginator') torder_bom_not_climpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_not_climpService: torder_bom_not_climpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bom_not_climpSearch();
  }
  torder_bom_not_climpSearch() {
    this.torder_bom_not_climpService.SearchAll(this.torder_bom_not_climpSort, this.torder_bom_not_climpPaginator);
  }
  torder_bom_not_climpSave(element: torder_bom_not_climp) {
    this.torder_bom_not_climpService.FormData = element;
    this.NotificationService.warn(this.torder_bom_not_climpService.ComponentSaveAll(this.torder_bom_not_climpSort, this.torder_bom_not_climpPaginator));
  }
  torder_bom_not_climpDelete(element: torder_bom_not_climp) {
    this.torder_bom_not_climpService.BaseParameter.ID = element.CLIMP_IDX;
    this.NotificationService.warn(this.torder_bom_not_climpService.ComponentDeleteAll(this.torder_bom_not_climpSort, this.torder_bom_not_climpPaginator));
  }
  torder_bom_not_climpAdd(element: torder_bom_not_climp) {
    this.torder_bom_not_climpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_bom_not_climpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_bom_not_climpSearch();
    });
  }
}
