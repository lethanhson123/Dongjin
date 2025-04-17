import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { help_category } from 'src/app/shared/help_category.model';
import { help_categoryService } from 'src/app/shared/help_category.service';

@Component({
  selector: 'app-help_category',
  templateUrl: './help_category.component.html',
  styleUrls: ['./help_category.component.css']
})
export class help_categoryComponent implements OnInit {

  @ViewChild('help_categorySort') help_categorySort: MatSort;
  @ViewChild('help_categoryPaginator') help_categoryPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public help_categoryService: help_categoryService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.help_categorySearch();
  }
  help_categorySearch() {
    this.help_categoryService.SearchAll(this.help_categorySort, this.help_categoryPaginator);
  }
  help_categorySave(element: help_category) {
    this.help_categoryService.FormData = element;
    this.NotificationService.warn(this.help_categoryService.ComponentSaveAll(this.help_categorySort, this.help_categoryPaginator));
  }
  help_categoryDelete(element: help_category) {
    this.help_categoryService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.help_categoryService.ComponentDeleteAll(this.help_categorySort, this.help_categoryPaginator));
  }
  help_categoryAdd(element: help_category) {
    this.help_categoryService.formData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(help_categoryDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.help_categorySearch();
    });
  }
}
