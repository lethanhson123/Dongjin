import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { trackmaster } from 'src/app/shared/MES/trackmaster.model';
import { trackmasterService } from 'src/app/shared/MES/trackmaster.service';

@Component({
  selector: 'app-trackmaster',
  templateUrl: './trackmaster.component.html',
  styleUrls: ['./trackmaster.component.css']
})
export class trackmasterComponent implements OnInit {

  @ViewChild('trackmasterSort') trackmasterSort: MatSort;
  @ViewChild('trackmasterPaginator') trackmasterPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public trackmasterService: trackmasterService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.trackmasterSearch();
  }
  trackmasterSearch() {
    this.trackmasterService.SearchAll(this.trackmasterSort, this.trackmasterPaginator);
  }
  trackmasterSave(element: trackmaster) {
    this.trackmasterService.FormData = element;
    this.NotificationService.warn(this.trackmasterService.ComponentSaveAll(this.trackmasterSort, this.trackmasterPaginator));
  }
  trackmasterDelete(element: trackmaster) {
    this.trackmasterService.BaseParameter.ID = element.RACK_IDX;
    this.NotificationService.warn(this.trackmasterService.ComponentDeleteAll(this.trackmasterSort, this.trackmasterPaginator));
  }
  trackmasterAdd(element: trackmaster) {
    this.trackmasterService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(trackmasterDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.trackmasterSearch();
    });
  }
}
