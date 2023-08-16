
import { MinimalNode, MinimalNodeEntity} from '@alfresco/js-api';
import { NodesApiService } from '@alfresco/adf-content-services';
import { DocumentListComponent, NodeEntityEvent, NodeEntryEvent } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';
import { Component, ViewChild, Input, OnInit, ElementRef, Inject,HostListener } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AlfrescoApiService} from '@alfresco/adf-core';
import { AlfrescoApiHttpClient } from '@alfresco/adf-core/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessCloudService } from '@alfresco/adf-process-services-cloud';
import { AuthenticationService } from '@alfresco/adf-core';
import { MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DOCUMENT } from '@angular/common';


export interface folderData {
  nd: string;
  name: string;
  node: string;
}

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
            style({ height: 0, opacity: 1 }),
            animate('2s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 0, opacity: 1 }),
            animate('2s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})


export class DashboardComponent implements OnInit {
  windowScrolled: boolean;
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




  thirtyDayArray = [];
  sixtyDayArray = [];
  ninetyDayArray = [];

  newChartDataArray = [];
  LegalReviewChartDataArray = [];
  inProgressChartDataArray = [];
  externalChartDataArray = [];
  negotiationChartDataArray = [];

  mainDataArray = [];
  chartDataArray = [];


  displayedColumns: string[] = ['id', 'name','node'];
  

  constructor(@Inject(DOCUMENT) private document: Document,private _snackBar: MatSnackBar,private authService: AuthenticationService, private processService: ProcessCloudService, private router: Router,
    private route: ActivatedRoute,private http: HttpClient,private alfrescoJsApi: AlfrescoApiHttpClient, private nodeApiService: NodesApiService, private preview: PreviewService, private nodeService: NodesApiService, private apiService: AlfrescoApiService) {

    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } 
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }

  ngOnInit() {
    this.currentUser = this.authService.getEcmUsername();
    console.log("current date time is: ",this.currentDateTime)

    this.getCounts();
    
}

thirty6090Clicked(id)
{

  switch(id) { 
    case 1: { 
       this.mainDataArray = this.thirtyDayArray;
       console.log("detail 1 clicked ",this.mainDataArray)
       break; 
    } 
    case 2: { 
       this.mainDataArray = this.sixtyDayArray;
       console.log("detail 2 clicked ",this.mainDataArray)
       break; 
    } 
    case 3: {
      this.mainDataArray = this.ninetyDayArray;
      console.log("detail 3 clicked ",this.mainDataArray)
      break;
    }
    default: { 
       //statements; 
       break; 
    } 
 } 

 if (this.showSummaryPanel){
  //if panel is showing, turn off then back on (this refreshes content)
  this.showSummaryPanel = !this.showSummaryPanel;
  this.showSummaryPanel = !this.showSummaryPanel;
 }else{ this.showSummaryPanel = !this.showSummaryPanel;}

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

          //Now process the rows for the mat table.  make sure array is empty first
   this.newChartDataArray = [];
    for (var ent in val['list']['entries']){
      this.newChartDataArray.push({
        id:ent,
        name:val['list']['entries'][ent]['entry']['name'],
        node:val['list']['entries'][ent]['entry']['id']
      });
    }
                      
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
      //Now process the rows for the mat table.  make sure array is empty first
   this.inProgressChartDataArray = [];
   for (var ent in val['list']['entries']){
    this.inProgressChartDataArray.push({
       id:ent,
       name:val['list']['entries'][ent]['entry']['name'],
       node:val['list']['entries'][ent]['entry']['id']
     });
   }
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
      //Now process the rows for the mat table.  make sure array is empty first
   this.LegalReviewChartDataArray = [];
   for (var ent in val['list']['entries']){
    this.LegalReviewChartDataArray.push({
       id:ent,
       name:val['list']['entries'][ent]['entry']['name'],
       node:val['list']['entries'][ent]['entry']['id']
     });
   }            
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
      //Now process the rows for the mat table.  make sure array is empty first
   this.externalChartDataArray = [];
   for (var ent in val['list']['entries']){
    this.externalChartDataArray.push({
       id:ent,
       name:val['list']['entries'][ent]['entry']['name'],
       node:val['list']['entries'][ent]['entry']['id']
     });
   }            
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
      //Now process the rows for the mat table.  make sure array is empty first
   this.negotiationChartDataArray = [];
   for (var ent in val['list']['entries']){
    this.negotiationChartDataArray.push({
       id:ent,
       name:val['list']['entries'][ent]['entry']['name'],
       node:val['list']['entries'][ent]['entry']['id']
     });
   }            
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
      //val has the object with the node information in entries then each entry has id, name, nodetype

    //Now process the rows for the mat table.  make sure array is empty first
    this.thirtyDayArray = [];
    for (var ent in val['list']['entries']){
      this.thirtyDayArray.push({
        id:ent,
        name:val['list']['entries'][ent]['entry']['name'],
        node:val['list']['entries'][ent]['entry']['id']
      });
    }

    //this.dataSource = new MatTableDataSource<folderData>(this.thirtyDayArray)

    console.log("ROW ENTRY ",this.thirtyDayArray);
    console.log("sample ROW data ",[{nd: "0", name: "test"}, {nd: "1", name: "test"}])
    //now loop is done add data to datatable adapter
    
    //console.log("isolated 30 day data is ",this.thirtyDayDataListData);

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

      //Now process the rows for the mat table.  make sure array is empty first
    this.sixtyDayArray = [];
    for (var ent in val['list']['entries']){
      this.sixtyDayArray.push({
        id:ent,
        name:val['list']['entries'][ent]['entry']['name'],
        node:val['list']['entries'][ent]['entry']['id']
      });
    }


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

      //Now process the rows for the mat table.  make sure array is empty first
    this.ninetyDayArray = [];
    for (var ent in val['list']['entries']){
      this.ninetyDayArray.push({
        id:ent,
        name:val['list']['entries'][ent]['entry']['name'],
        node:val['list']['entries'][ent]['entry']['id']
      });
    }

      console.log("90 day count: ", this.ninetyDayCount)
                  
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
      type: 'polarArea',
      data: this.data,
      options: {

        onClick: (evt, item) => {
          console.log("This is working!");
          this.chartclickval = item[0]['_index'].toString();
         
          this.openSnackBar("clicked on chart "+ item[0]['_index'].toString(),"close")
          
          //clear chartdataarray now!
          this.chartDataArray = [];

          switch(item[0]['_index']) { 
            case 0: { 
               this.chartDataArray = this.newChartDataArray;
               break; 
            } 
            case 1: { 
               this.chartDataArray = this.inProgressChartDataArray; 
               break; 
            } 
            case 2: {
              this.chartDataArray = this.LegalReviewChartDataArray;
              break;
            }
            case 3: {
              this.chartDataArray = this.externalChartDataArray;
              break;
            }
            case 4: {
              this.chartDataArray = this.negotiationChartDataArray;
              break;
            }
            default: { 
               //statements; 
               break; 
            } 

         } 

         if (this.showChartPanel ){
          this.showChartPanel = !this.showChartPanel;
          this.showChartPanel = !this.showChartPanel;
        }
        else
        {
        this.showChartPanel = !this.showChartPanel;
        }


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

clickedDetailRow(row){
  console.log("row object clicked: ",row['node']);
  this.router.navigate(['/documents', {fid:row['node']}]);
}

}
