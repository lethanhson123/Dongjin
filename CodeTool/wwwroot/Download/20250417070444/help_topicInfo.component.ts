import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
  selector: 'app-help_topic-info',
  templateUrl: './help_topic-info.component.html',
  styleUrls: ['./help_topic-info.component.css']
})
export class help_topicInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public help_topicService: help_topicService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.help_topicService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.help_topicSearch();
  }
  help_topicSearch() {
    this.help_topicService.GetByIDAsync().subscribe(
      res => {
        this.help_topicService.FormData = res as help_topic;
        if (this.help_topicService.FormData.help_topic_id == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  help_topicSave() {
    this.help_topicService.IsShowLoading = true;
    this.help_topicService.SaveAsync().subscribe(
      res => {
        this.help_topicService.FormData = res as help_topic;
        this.Router.navigateByUrl(environment.help_topicInfo + this.help_topicService.FormData.help_topic_id);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.help_topicService.IsShowLoading = false;
      }
    );
  }
  help_topicAdd() {
    this.Router.navigateByUrl(environment.help_topicInfo + environment.InitializationNumber);
    this.help_topicService.BaseParameter.ID = environment.InitializationNumber;
    this.help_topicSearch();
  }
}

