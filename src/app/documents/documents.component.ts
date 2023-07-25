import { Component, ViewChild, Input } from '@angular/core';
import { NotificationService } from '@alfresco/adf-core';
import { DocumentListComponent } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';
import { Router } from '@angular/router';
import { MinimalNodeEntity } from '@alfresco/js-api';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  @Input()
  showViewer: boolean = false;
  
  thumbnails: boolean = true;

  nodeId: string = null;

  displayDefaultProperties: boolean = true;
  
  currentFolderId: string;

  @ViewChild('documentList', { static: true })
  documentList: DocumentListComponent;

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
        this.preview.showResource(event.entry.id);
    } else if (event.entry.isFolder) {
       //this.router.navigate(['/files', event.entry.id]);
       //change folder view to show contents of current folder

       this.documentList.currentFolderId = event.entry.id.toString();
       console.log("doc list folder id: ", this.documentList.currentFolderId)
    }
}

nodeClicked(event: MinimalNodeEntity){
  this.showViewer = true;
  this.nodeId = (event.entry.id);
  //this.showViewer = true;
}

}
