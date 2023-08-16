import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { NotificationService } from '@alfresco/adf-core';
import { DocumentListComponent, NodeEntityEvent, NodeEntryEvent } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';
import { ActivatedRoute,Router,PRIMARY_OUTLET } from '@angular/router';
import { MinimalNode, MinimalNodeEntity} from '@alfresco/js-api';
import { NodesApiService } from '@alfresco/adf-content-services';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { empty } from '@apollo/client';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
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
export class DocumentsComponent implements OnInit{

  @ViewChild('documentList', { static: true })
  documentList: DocumentListComponent;
  fxFlexForDocList: number = 0;
  fxFlexForAux: number = 0;
  
  isHidden:boolean = false;

  showMetaContent:boolean = false;
  showDocListContent: boolean=true;
  showPreviewContent: boolean=false;

  @Input()
  showViewer: boolean = false;
  
  showView: boolean = false;

  thumbnails: boolean = true;

  nodeId: string = null;
  node: MinimalNode;

  displayDefaultProperties: boolean = true;
  
  currentFolderId: string = "5be4a4cc-f413-4f28-8329-dce29671b224";

  nodeEntry: any;
  sub: any;

  constructor(private route: ActivatedRoute, public router: Router, private notificationService: NotificationService, private preview: PreviewService, private nodeService: NodesApiService) {
  this.fxFlexForDocList = 100;
  this.fxFlexForAux = 0;
  }

  ngOnInit(): void {
    this.sub = this.route
    .params
    .subscribe
    (
      value => (this.currentFolderId = value['fid'] == null? '5be4a4cc-f413-4f28-8329-dce29671b224' : value['fid'])
      
    );
  }
  onViewerVisibilityChanged() {
    const primaryUrl = this.router
      .parseUrl(this.router.url)
      .root.children[PRIMARY_OUTLET].toString();
    this.router.navigateByUrl(primaryUrl);
  }

  uploadSuccess(event: any) {
    this.notificationService.openSnackMessage('File uploaded');
    this.documentList.reload();
  }

  showPreview(event) {
    const entry = event.value.entry;
    if (entry && entry.isFile) {
      this.preview.showResource(entry.id);
    }
  }

  onGoBack(event: any) {
    this.showViewer = false;
    this.nodeId = null;
  }

  onSearchSubmit($event:any){
    console.log("on search submit: ", event)
  }
  
  onSearchItemClicked(event: MinimalNodeEntity) {

    console.log("option clicked object: ", event.entry.id)
    console.log("seach item object: ",event)
    if (event.entry.isFile === true) {
      this.currentFolderId = event.entry.parentId;

    } else {
      this.currentFolderId = event.entry.id;
    }
}

nodeClicked(event: NodeEntityEvent){

  if (this.documentList.selection[0].entry.isFile === true) {

  this.fxFlexForDocList = 0;
  this.isHidden = true;
  this.showDocListContent = false;
  this.fxFlexForAux = 50;

  this.nodeId = this.documentList.selection[0].entry.id;
  this.node = this.documentList.selection[0].entry;

  console.log("clicked node id:", this.nodeId);
  console.log("document list object for clicked node is: ",this.node);

  this.showViewer = false;
  this.showViewer = true;
  this.showView = true;
  }
  else{
    this.isHidden = false;
    this.showViewer = false;
    this.fxFlexForDocList = 100;
    this.fxFlexForAux = 0;
    this.showDocListContent = true;
    //this.showMetaContent = false;
    this.nodeId = this.documentList.selection[0].entry.id;
    this.node = this.documentList.selection[0].entry;

  console.log("clicked foldernode id:", this.nodeId);
  console.log("document list object for clicked foldernode is: ",this.node);
  
  }
  

}

backButtonClicked(){
  this.fxFlexForDocList = 100;
    this.fxFlexForAux = 0;
    this.showDocListContent = true;

}

viewerClosed(){
  this.showViewer = false;
  this.fxFlexForDocList = 100;
    this.fxFlexForAux = 0;
    this.showDocListContent = true;
    this.isHidden = false;


}

}
