
import { MinimalNode, MinimalNodeEntity, AlfrescoApi} from '@alfresco/js-api';
import { NodesApiService } from '@alfresco/adf-content-services';
import { DocumentListComponent, NodeEntityEvent, NodeEntryEvent } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';
import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AlfrescoApiService} from '@alfresco/adf-core';
import { AlfrescoApiHttpClient } from '@alfresco/adf-core/api';
import { map } from 'rxjs/operators';
import { forkJoin,concat } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

 /*  title = 'ng-chart'; */
  chart: any;

  @ViewChild('documentList', { static: true })
  documentList: DocumentListComponent;

  @Input()
  showViewer: boolean = false;

  thumbnails: boolean = true;

  nodeId: string = null;
  node: MinimalNode;

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
  constructor(private http: HttpClient,private alfrescoJsApi: AlfrescoApiHttpClient, private nodeApiService: NodesApiService, private preview: PreviewService, private nodeService: NodesApiService, private apiService: AlfrescoApiService) {

  }

  ngOnInit() {

/*     forkJoin(

      {
        OC: this.getOpenCount( `{
          "query": { \
            "query": "cm:description:open*" \
          } \
        }`),
        procChart: this.processChart(),
        //ichart: this.instantiateChart()
      }
    ) */

    this.getOpenCount(`{
      "query": { \
        "query": "cm:description:open*" \
      } \
    }`)
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

  return "getopen count done";

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
        backgroundColor: [
          'yellow',
          'green',
          'red',
        ],
      }]
    };
    

    console.log("data set is: ",this.data)
    console.log("now instantiating chart object");
    
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: this.data,
    });

    
  }

  instantiateChart(){

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
}
