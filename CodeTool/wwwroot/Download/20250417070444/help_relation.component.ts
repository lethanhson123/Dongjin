import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { help_relation } from 'src/app/shared/help_relation.model';
import { help_relationService } from 'src/app/shared/help_relation.service';

@Component({
  selector: 'app-help_relation',
  templateUrl: './help_relation.component.html',
  styleUrls: ['./help_relation.component.css']
})
export class help_relationComponent implements OnInit {

  @ViewChild('help_relationSort') help_relationSort: MatSort;
  @ViewChild('help_relationPaginator') help_relationPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public help_relationService: help_relationService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.help_relationSearch();
  }
  help_relationSearch() {
    this.help_relationService.SearchAll(this.help_relationSort, this.help_relationPaginator);
  }
  help_relationSave(element: help_relation) {
    this.help_relationService.FormData = element;
    this.NotificationService.warn(this.help_relationService.ComponentSaveAll(this.help_relationSort, this.help_relationPaginator));
  }
  help_relationDelete(element: help_relation) {
    this.help_relationService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.help_relationService.ComponentDeleteAll(this.help_relationSort, this.help_relationPaginator));
  }
  help_relationAdd(element: help_relation) {
    this.help_relationService.formData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(help_relationDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.help_relationSearch();
    });
  }
}
