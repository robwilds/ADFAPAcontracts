import { Component, ViewChild, Input } from '@angular/core';
import { NotificationService } from '@alfresco/adf-core';
import { DocumentListComponent, NodeEntityEvent } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';
import { Router } from '@angular/router';
import { MinimalNodeEntity, NodeEntry } from '@alfresco/js-api';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  @ViewChild('documentList', { static: true })
  documentList: DocumentListComponent;

  @Input()
  showViewer: boolean = false;
  
  thumbnails: boolean = true;

  nodeId: string = null;

  displayDefaultProperties: boolean = true;
  
  currentFolderId: string = "5be4a4cc-f413-4f28-8329-dce29671b224";

  constructor(public router: Router, private notificationService: NotificationService, private preview: PreviewService) {
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
    if (event.entry.isFile) {
        console.log("clicked node id:",event.entry.id);
        this.preview.showResource(event.entry.id);
    } else if (event.entry.isFolder) {
       //this.router.navigate(['/files', event.entry.id]);
       //change folder view to show contents of current folder

       this.documentList.currentFolderId = event.entry.id.toString();
       console.log("doc list folder id: ", this.documentList.currentFolderId)
    }
}

nodeClicked(event: NodeEntityEvent){
  console.log("clicked node id:", event.value.entry.id);
  this.nodeId = (event.value.entry.id);
  this.showViewer = false;
  this.showViewer = true;
  

}

}
