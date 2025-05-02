import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tspart_file } from 'src/app/shared/MES/tspart_file.model';
import { tspart_fileService } from 'src/app/shared/MES/tspart_file.service';

@Component({
  selector: 'app-tspart_file-info',
  templateUrl: './tspart_file-info.component.html',
  styleUrls: ['./tspart_file-info.component.css']
})
export class tspart_fileInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tspart_fileService: tspart_fileService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tspart_fileService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tspart_fileSearch();
  }
  tspart_fileSearch() {
    this.tspart_fileService.GetByIDAsync().subscribe(
      res => {
        this.tspart_fileService.FormData = res as tspart_file;
        if (this.tspart_fileService.FormData.PARTFILE_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tspart_fileSave() {
    this.tspart_fileService.IsShowLoading = true;
    this.tspart_fileService.SaveAsync().subscribe(
      res => {
        this.tspart_fileService.FormData = res as tspart_file;
        this.Router.navigateByUrl(environment.tspart_fileInfo + this.tspart_fileService.FormData.PARTFILE_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tspart_fileService.IsShowLoading = false;
      }
    );
  }
  tspart_fileAdd() {
    this.Router.navigateByUrl(environment.tspart_fileInfo + environment.InitializationNumber);
    this.tspart_fileService.BaseParameter.ID = environment.InitializationNumber;
    this.tspart_fileSearch();
  }
}

