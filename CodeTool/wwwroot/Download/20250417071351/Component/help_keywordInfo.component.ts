import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
  selector: 'app-help_keyword-info',
  templateUrl: './help_keyword-info.component.html',
  styleUrls: ['./help_keyword-info.component.css']
})
export class help_keywordInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public help_keywordService: help_keywordService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.help_keywordService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.help_keywordSearch();
  }
  help_keywordSearch() {
    this.help_keywordService.GetByIDAsync().subscribe(
      res => {
        this.help_keywordService.FormData = res as help_keyword;
        if (this.help_keywordService.FormData.help_keyword_id == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  help_keywordSave() {
    this.help_keywordService.IsShowLoading = true;
    this.help_keywordService.SaveAsync().subscribe(
      res => {
        this.help_keywordService.FormData = res as help_keyword;
        this.Router.navigateByUrl(environment.help_keywordInfo + this.help_keywordService.FormData.help_keyword_id);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.help_keywordService.IsShowLoading = false;
      }
    );
  }
  help_keywordAdd() {
    this.Router.navigateByUrl(environment.help_keywordInfo + environment.InitializationNumber);
    this.help_keywordService.BaseParameter.ID = environment.InitializationNumber;
    this.help_keywordSearch();
  }
}

