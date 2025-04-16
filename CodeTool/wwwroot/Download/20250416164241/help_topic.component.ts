import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { help_topic } from 'src/app/shared/help_topic.model';
import { help_topicService } from 'src/app/shared/help_topic.service';

@Component({
  selector: 'app-help_topic',
  templateUrl: './help_topic.component.html',
  styleUrls: ['./help_topic.component.css']
})
export class help_topicComponent implements OnInit {

  @ViewChild('help_topicSort') help_topicSort: MatSort;
  @ViewChild('help_topicPaginator') help_topicPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public help_topicService: help_topicService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.help_topicSearch();
  }
  help_topicSearch() {
    this.help_topicService.SearchAll(this.help_topicSort, this.help_topicPaginator);
  }
  help_topicSave(element: help_topic) {
    this.help_topicService.FormData = element;
    this.NotificationService.warn(this.help_topicService.ComponentSaveAll(this.help_topicSort, this.help_topicPaginator));
  }
  help_topicDelete(element: help_topic) {
    this.help_topicService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.help_topicService.ComponentDeleteAll(this.help_topicSort, this.help_topicPaginator));
  }
  help_topicAdd(element: help_topic) {
    this.help_topicService.formData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(help_topicDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.help_topicSearch();
    });
  }
}
