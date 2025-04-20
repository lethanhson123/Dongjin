import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

@Component({
  selector: 'app-c02-count',
  templateUrl: './c02-count.component.html',
  styleUrls: ['./c02-count.component.css']
})
export class C02COUNTComponent {

  constructor(
    public DialogRef: MatDialogRef<C02COUNTComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,    
  ) {
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {    
  }
  Close() {
    this.DialogRef.close();
  }
}
