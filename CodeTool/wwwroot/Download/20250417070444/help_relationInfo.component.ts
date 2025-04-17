import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
  selector: 'app-help_relation-info',
  templateUrl: './help_relation-info.component.html',
  styleUrls: ['./help_relation-info.component.css']
})
export class help_relationInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public help_relationService: help_relationService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.help_relationService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.help_relationSearch();
  }
  help_relationSearch() {
    this.help_relationService.GetByIDAsync().subscribe(
      res => {
        this.help_relationService.FormData = res as help_relation;
        if (this.help_relationService.FormData.help_topic_id == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  help_relationSave() {
    this.help_relationService.IsShowLoading = true;
    this.help_relationService.SaveAsync().subscribe(
      res => {
        this.help_relationService.FormData = res as help_relation;
        this.Router.navigateByUrl(environment.help_relationInfo + this.help_relationService.FormData.help_topic_id);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.help_relationService.IsShowLoading = false;
      }
    );
  }
  help_relationAdd() {
    this.Router.navigateByUrl(environment.help_relationInfo + environment.InitializationNumber);
    this.help_relationService.BaseParameter.ID = environment.InitializationNumber;
    this.help_relationSearch();
  }
}

