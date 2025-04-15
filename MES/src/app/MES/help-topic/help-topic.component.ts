import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';


import { help_topic } from 'src/app/shared/MES/help_topic.model';
import { help_topicService } from 'src/app/shared/MES/help_topic.service';

@Component({
  selector: 'app-help-topic',
  templateUrl: './help-topic.component.html',
  styleUrls: ['./help-topic.component.css']
})
export class HelpTopicComponent {

  @ViewChild('help_topicSort') help_topicSort: MatSort;
  @ViewChild('help_topicPaginator') help_topicPaginator: MatPaginator;

  constructor(
    private Dialog: MatDialog,
    public NotificationService: NotificationService,
    

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
}