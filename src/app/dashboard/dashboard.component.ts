
import { MinimalNode, MinimalNodeEntity, AlfrescoApi, MinimalNodeEntryEntity, NodeEntry} from '@alfresco/js-api';
import { NodesApiService } from '@alfresco/adf-content-services';
import { DocumentListComponent, NodeEntityEvent, NodeEntryEvent } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';
import { Component, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AlfrescoApiService} from '@alfresco/adf-core';
import { AlfrescoApiHttpClient } from '@alfresco/adf-core/api';
import { TaskListCloudModule } from '@alfresco/adf-process-services-cloud';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT, DatePipe } from '@angular/common';
import { ProcessCloudService } from '@alfresco/adf-process-services-cloud';
import { AuthenticationService } from '@alfresco/adf-core';
import {formatDate } from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit, AfterViewInit {

 /*  title = 'ng-chart'; */
  chart: any;
  chartclickval: string = "CHART CLICKED";

  currentUser: string;
  currentDateTime: any = new Date();
  processName: string;

  appName: any = "clm-mvp-v1-alpha-1";
  taskId: any = "28dad087-29a7-11ee-9f58-1a4996e78242";

  showFiller = false;

  snackBarmessage: any;
  snackBarValue: any;

  @ViewChild('documentList', { static: true })
  documentList: DocumentListComponent;

  @ViewChild('cval', { static: true }) pval: ElementRef;

  @Input()
  showViewer: boolean = false;

  thumbnails: boolean = true;

  nodeId: string = null;
  node: MinimalNode;

  showNDAForm: boolean = false;

  displayDefaultProperties: boolean = true;
  
  currentFolderId: string = "5be4a4cc-f413-4f28-8329-dce29671b224";

  nodeEntry: any;
  searchTerm: string = null;
  
  openCount: any;
  inProcessCount: any;
  rejectedCount: any;

  data:any;

  openQuery = `{
    "query": { \
      "query": "cm:description:open*" \
    } \
  }`;


  constructor(private _snackBar: MatSnackBar,private authService: AuthenticationService, private processService: ProcessCloudService, private router: Router,
    private route: ActivatedRoute,private http: HttpClient,private alfrescoJsApi: AlfrescoApiHttpClient, private nodeApiService: NodesApiService, private preview: PreviewService, private nodeService: NodesApiService, private apiService: AlfrescoApiService) {


      this.currentDateTime = formatDate(this.currentDateTime, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  ngAfterViewInit() {
    //Copy in all the js code from the script.js. Typescript will complain but it works just fine

 }


  ngOnInit() {
    this.currentUser = this.authService.getEcmUsername();
    console.log("current date time is: ",this.currentDateTime)

    this.getOpenCount(`{
      "query": { \
        "query": "cm:description:open*" \
      } \
    }`)
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}


  getOpenCount(postBody){

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization","Basic cndpbGRzOmRlbW8=");

    let url = "https://sse.dev.alfrescocloud.com/alfresco/api/-default-/public/search/versions/1/search";
    //let url = "http://3.90.226.222/alfresco/api/-default-/public/search/versions/1/search";

    this.http.post(url, postBody,{headers}).subscribe(
      val => {
          console.log("PUT call successful value returned in body", val);
                      this.openCount = Number(val['list']['pagination']['count']);
                      this.processChart();
                      console.log("pagination count: ", this.openCount )
                      
      },

      response => {
          console.log("PUT call in error", response);
      },

      () => {
          console.log("The PUT observable is now completed.");
      }
  );

  }

  processChart(){
    console.log("open count is -->",this.openCount)
    console.log("now setting data array for chart");
    this.data = {
      labels: [
        'IN PROCESS',
        'COMPLETED',
        'REJECTED',
      ],
      datasets: [{
        label: 'Contract Status',
        data: [this.openCount, 1, 1],
        backgroundColor: ['yellow','green','red',],
        hoverBorderColor: ['grey', 'grey', 'grey'],
        hoverBorderWidth: 10,
        borderWidth: 0
      }]
    };
    

    console.log("data set is: ",this.data)
    console.log("now instantiating chart object");
    
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: this.data,
      options: {
        onClick : function (evt, item) {
            console.log ('legend onClick', evt);
            console.log('legd item', item);
            this.chartclickval = item[0]['_index'].toString();
            console.log('clicked value',this.chartclickval);
        }
    }
    });
  }

  updatechartclickVal(c:Chart)
  {

    //this.chartclickval = c.canvas.;
    this.pval.nativeElement.value = this.chartclickval;
  }
  onSearchSubmit($event:any){
    console.log("on search submit: ", event)
  }
  
  onSearchItemClicked(event: MinimalNodeEntity) {

    console.log("option clicked object: ", this.documentList.selection[0])
    if (this.documentList.selection[0].entry.isFile === true) {
        //this.contentEntry = event;
        console.log("clicked searched node id:",this.documentList.selection[0].entry);


        this.preview.showResource(event.entry.id);
    } else {
       //this.router.navigate(['/files', event.entry.id]);
       //change folder view to show contents of current folder

       //this.documentList.currentFolderId = event.entry.id.toString();
       //console.log("doc list folder id: ", this.documentList.currentFolderId)
    }

    return "instantiate chart done";
}

nodeClicked(event: NodeEntityEvent){

  if (this.documentList.selection[0].entry.isFile === true) {

  this.nodeId = this.documentList.selection[0].entry.id;
  this.node = this.documentList.selection[0].entry;

  console.log("clicked node id:", this.nodeId);
  console.log("document list object for clicked node is: ",this.node);

  this.showViewer = false;
  this.showViewer = true;
  }
  else{
    
    this.nodeId = this.documentList.selection[0].entry.id;
  this.node = this.documentList.selection[0].entry;

  console.log("clicked foldernode id:", this.nodeId);
  console.log("document list object for clicked foldernode is: ",this.node);
    this.showViewer = false;
  
  }
  
}

onRowClick(taskId: string) {
  if (taskId) {
    this.router.navigate(['/apps', this.appName || 0, 'tasks', taskId]);
  }
}

showBoxPreview(node){

  console.log("recent object is :",node.value.entry.id);
  if (node.value.entry.isFile === true) {
    //this.contentEntry = event;
    this.nodeId = node.value.entry.id
    console.log("double clicked recents item:",this.nodeId);
    //this.preview.showResource(event.entry.id);
    this.showViewer = true;

} else {
   //this.router.navigate(['/files', event.entry.id]);
   //change folder view to show contents of current folder

   //this.documentList.currentFolderId = event.entry.id.toString();
   //console.log("doc list folder id: ", this.documentList.currentFolderId)
} 
}

createProcessClick() {
  this.processName = "New NDA request -" + this.currentUser +"-" + this.currentDateTime;
  this.showNDAForm = !this.showNDAForm;
}

processSuccess(){
  this.showNDAForm = false;
  this.snackBarmessage = "NDA request submitted!";
  this.snackBarValue = "close";
  this.openSnackBar(this.snackBarmessage,this.snackBarValue);
}

}
