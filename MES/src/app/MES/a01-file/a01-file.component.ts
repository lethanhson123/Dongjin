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
  selector: 'app-a01-file',
  templateUrl: './a01-file.component.html',
  styleUrls: ['./a01-file.component.css']
})
export class A01FileComponent {
  
  constructor(
    public DialogRef: MatDialogRef<A01FileComponent>,    
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
