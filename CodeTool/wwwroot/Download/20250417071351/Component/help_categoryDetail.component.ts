import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { help_category } from 'src/app/shared/help_category.model';
import { help_categoryService } from 'src/app/shared/help_category.service';

@Component({
  selector: 'app-help_category-info',
  templateUrl: './help_category-info.component.html',
  styleUrls: ['./help_category-info.component.css']
})
export class help_categoryInfoComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<InvoiceInputDetailComponent>
    ,
    @Inject(MAT_DIALOG_DATA) public data: any
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,


    public help_categoryService: help_categoryService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {    
    this.help_categorySearch();
    }
    Close() {
    this.DialogRef.close();
    }
    help_categorySearch() {
    this.help_categoryService.GetByIDAsync().subscribe(
    res => {
    this.help_categoryService.FormData = res as help_category;
    if (this.help_categoryService.FormData.help_category_id == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    help_categorySave() {
    this.help_categoryService.IsShowLoading = true;
    this.help_categoryService.SaveAsync().subscribe(
    res => {
    this.help_categoryService.FormData = res as help_category;    
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.help_categoryService.IsShowLoading = false;
    }
    );
    }
    }

