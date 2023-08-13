
import { MinimalNode, MinimalNodeEntity, AlfrescoApi, MinimalNodeEntryEntity, NodeEntry} from '@alfresco/js-api';
import { NodesApiService } from '@alfresco/adf-content-services';
import { DocumentListComponent, NodeEntityEvent, NodeEntryEvent } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';
import { Component, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AlfrescoApiService} from '@alfresco/adf-core';
import { AlfrescoApiHttpClient } from '@alfresco/adf-core/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessCloudService } from '@alfresco/adf-process-services-cloud';
import { AuthenticationService } from '@alfresco/adf-core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ObjectDataTableAdapter }  from '@alfresco/adf-core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
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
  
  globalSearchUrl = "https://sse.dev.alfrescocloud.com/alfresco/api/-default-/public/search/versions/1/search";
  //let url = "http://3.90.226.222/alfresco/api/-default-/public/search/versions/1/search";

  isAutoRefreshChart: boolean = false;
  newCount: any;
  inProgressCount: any;
  legalReviewCount: any;
  externalPartyReviewCount: any;
  negotiationCount: any;
  sevenDayCount: any;
  thirtyDayCount: any;
  sixtyDayCount: any;
  ninetyDayCount: any;
  sevenDayMessage: string = "";
  sevenDayShowMessage: boolean = false;
  showSummaryPanel: boolean = false;
  showChartPanel: boolean = false;

  data:any;

  newQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:new) AND TYPE:'cm:folder'" \
    } \
  }`;

  inProgressQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:'In Progress') AND TYPE:'cm:folder'" \
    } \
  }`;

  legalReviewQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:'Legal Review') AND TYPE:'cm:folder'" \
    } \
  }`;

  externalPartyQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:'External Party Review') AND TYPE:'cm:folder'" \
    } \
  }`;

  negotiationQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:Negotiation) AND TYPE:'cm:folder'" \
    } \
  }`;

  sevenDayQuery = `{
    "query": { \
      "query": "ContractManagement:Expiration:[NOW/DAY TO NOW/DAY+7DAY] AND TYPE:'cm:folder'" \
    } \
  }`;

  thirtyDayQuery = `{
    "query": { \
      "query": "ContractManagement:Expiration:[NOW/DAY TO NOW/DAY+30DAY] AND TYPE:'cm:folder'" \
    } \
  }`;

  sixtyDayQuery = `{
    "query": { \
      "query": "ContractManagement:Expiration:[NOW/DAY+31DAY TO NOW/DAY+90DAY] AND TYPE:'cm:folder'" \
    } \
  }`;

  ninetyDayQuery = `{
    "query": { \
      "query": "ContractManagement:Expiration:[NOW/DAY+91DAY TO NOW/DAY+120DAY] AND TYPE:'cm:folder'" \
    } \
  }`;

  datalistdata: any;
  schema:any;
  

  constructor(private _snackBar: MatSnackBar,private authService: AuthenticationService, private processService: ProcessCloudService, private router: Router,
    private route: ActivatedRoute,private http: HttpClient,private alfrescoJsApi: AlfrescoApiHttpClient, private nodeApiService: NodesApiService, private preview: PreviewService, private nodeService: NodesApiService, private apiService: AlfrescoApiService) {


      //this.currentDateTime = formatDate(this.currentDateTime, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  
      this.datalistdata = new ObjectDataTableAdapter(
        // data
        [
            {id: 1, name: 'Name 1'},
            {id: 2, name: 'Name 2'}
        ],
        []
    );
    // columns
    this.schema =
        [
            {
                type: 'text',
                key: 'id',
                title: 'Id',
                sortable: true
            },
            {
                type: 'text',
                key: 'name',
                title: 'Name',
                sortable: true
            }
        ];
    }

  ngAfterViewInit() {
    //Copy in all the js code from the script.js. Typescript will complain but it works just fine
 }

  ngOnInit() {
    this.currentUser = this.authService.getEcmUsername();
    console.log("current date time is: ",this.currentDateTime)

    this.getCounts();
}

thirty6090Clicked(id)
{
  this.showSummaryPanel = !this.showSummaryPanel;
  console.log("summary 1 clicked");
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}

  getCounts(){

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization","Basic cndpbGRzOmRlbW8=");

    //Run New
    this.http.post(this.globalSearchUrl, this.newQuery,{headers}).subscribe(
      val => {
          console.log("PUT call successful value returned in body", val);
          this.newCount = Number(val['list']['pagination']['count']);
          //this.processChart();
          console.log("new count: ", this.newCount )
                      
      },

      response => {
          console.log("PUT call in error", response);
      },

      () => {
          console.log("The PUT observable is now completed.");
      }
  );

 //Run In Progress
 this.http.post(this.globalSearchUrl, this.inProgressQuery,{headers}).subscribe(
  val => {
      console.log("PUT call successful value returned in body", val);
      this.inProgressCount = Number(val['list']['pagination']['count']);
      //this.processChart();
      console.log("in progress count: ", this.inProgressCount )
                  
  },

  response => {
      console.log("PUT call in error", response);
  },

  () => {
      console.log("The PUT observable is now completed.");
  }
);

//Run legal review
this.http.post(this.globalSearchUrl, this.legalReviewQuery,{headers}).subscribe(
  val => {
      console.log("PUT call successful value returned in body", val);
      this.legalReviewCount = Number(val['list']['pagination']['count']);
      //this.processChart();
      console.log("in progress count: ", this.legalReviewCount )
                  
  },

  response => {
      console.log("PUT call in error", response);
  },

  () => {
      console.log("The PUT observable is now completed.");
  }
);

//Run external party review
this.http.post(this.globalSearchUrl, this.externalPartyQuery,{headers}).subscribe(
  val => {
      console.log("PUT call successful value returned in body", val);
      this.externalPartyReviewCount = Number(val['list']['pagination']['count']);
      //this.processChart();
      console.log("in progress count: ", this.externalPartyReviewCount)
                  
  },

  response => {
      console.log("PUT call in error", response);
  },

  () => {
      console.log("The PUT observable is now completed.");
  }
);

//Run negotiation
this.http.post(this.globalSearchUrl, this.negotiationQuery,{headers}).subscribe(
  val => {
      console.log("PUT call successful value returned in body", val);
      this.negotiationCount = Number(val['list']['pagination']['count']);
      //this.processChart();
      console.log("in progress count: ", this.negotiationCount)
                  
  },

  response => {
      console.log("PUT call in error", response);
  },

  () => {
      console.log("The PUT observable is now completed.");
  }
);

//Run 7 day count
this.http.post(this.globalSearchUrl, this.sevenDayQuery,{headers}).subscribe(
  val => {
      console.log("PUT call successful value returned in body", val);
      this.sevenDayCount = Number(val['list']['pagination']['count']);
      //this.processChart();
      console.log("7 day count: ", this.sevenDayCount)
      if (this.sevenDayCount > 1){
        this.sevenDayMessage = "There are " + this.sevenDayCount + " Contracts expiring this week!!"
        this.sevenDayShowMessage = true;
      }
      else if(this.sevenDayCount == 1){
        this.sevenDayMessage = "There's " + this.sevenDayCount + " Contract expiring this week!!"
        this.sevenDayShowMessage = true;
      } else if (this.sevenDayCount == 0){
        this.sevenDayShowMessage = false;
      }
                  
  },

  response => {
      console.log("PUT call in error", response);
  },

  () => {
      console.log("The PUT observable is now completed.");
  }
);

//Run 30 day count
this.http.post(this.globalSearchUrl, this.thirtyDayQuery,{headers}).subscribe(
  val => {
      console.log("PUT call successful value returned in body", val);
      this.thirtyDayCount = Number(val['list']['pagination']['count']);
      //this.processChart();
      console.log("30 day count: ", this.thirtyDayCount)
                  
  },

  response => {
      console.log("PUT call in error", response);
  },

  () => {
      console.log("The PUT observable is now completed.");
  }
);

//Run 60 day count
this.http.post(this.globalSearchUrl, this.sixtyDayQuery,{headers}).subscribe(
  val => {
      console.log("PUT call successful value returned in body", val);
      this.sixtyDayCount = Number(val['list']['pagination']['count']);
      //this.processChart();
      console.log("7 day count: ", this.sixtyDayCount)
                  
  },

  response => {
      console.log("PUT call in error", response);
  },

  () => {
      console.log("The PUT observable is now completed.");
  }
);

//Run 90 day count
this.http.post(this.globalSearchUrl, this.ninetyDayQuery,{headers}).subscribe(
  val => {
      console.log("PUT call successful value returned in body", val);
      this.ninetyDayCount = Number(val['list']['pagination']['count']);
      this.processChart();
      console.log("7 day count: ", this.ninetyDayCount)
                  
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
    
    console.log("now setting data array for chart");
    this.data = {
      labels: [
        'New',
        'In Progress',
        'Legal Review',
        'External Party Review',
        'Negotiation'
      ],
      datasets: [{
        label: 'Contract Status',
        data: [this.newCount, this.inProgressCount, this.legalReviewCount, this.externalPartyReviewCount,this.negotiationCount],
        backgroundColor: ['yellow','green','red','purple','orange'],
        hoverBorderColor: ['grey', 'grey', 'grey','grey','grey'],
        hoverBorderWidth: 1,
        borderWidth: 7
      }],
      options: [{responsive: true,
      maintainAspectRatio: true}]
    };
    
    console.log("data set is: ",this.data)
    console.log("now instantiating chart object");
    
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: this.data,
      options: {
        /* onClick : function (evt, item) {
            console.log ('legend onClick', evt);
            console.log('legd item', item);
            this.chartclickval = item[0]['_index'].toString();
            this.showChartPanel = !this.showChartPanel;
            this.openSnackBar("clicked on chart "+ item[0]['_index'].toString(),"close")
            console.log('clicked value',this.chartclickval); 
            
        }*/
        onClick: (evt, item) => {
          console.log("This is working!");
          this.chartclickval = item[0]['_index'].toString();
          this.showChartPanel = !this.showChartPanel;
          this.openSnackBar("clicked on chart "+ item[0]['_index'].toString(),"close")
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
