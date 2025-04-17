import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { help_keyword } from 'src/app/shared/help_keyword.model';
import { help_keywordService } from 'src/app/shared/help_keyword.service';

@Component({
  selector: 'app-help_keyword',
  templateUrl: './help_keyword.component.html',
  styleUrls: ['./help_keyword.component.css']
})
export class help_keywordComponent implements OnInit {

  @ViewChild('help_keywordSort') help_keywordSort: MatSort;
  @ViewChild('help_keywordPaginator') help_keywordPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public help_keywordService: help_keywordService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.help_keywordSearch();
  }
  help_keywordSearch() {
    this.help_keywordService.SearchAll(this.help_keywordSort, this.help_keywordPaginator);
  }
  help_keywordSave(element: help_keyword) {
    this.help_keywordService.FormData = element;
    this.NotificationService.warn(this.help_keywordService.ComponentSaveAll(this.help_keywordSort, this.help_keywordPaginator));
  }
  help_keywordDelete(element: help_keyword) {
    this.help_keywordService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.help_keywordService.ComponentDeleteAll(this.help_keywordSort, this.help_keywordPaginator));
  }
  help_keywordAdd(element: help_keyword) {
    this.help_keywordService.formData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(help_keywordDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.help_keywordSearch();
    });
  }
}
