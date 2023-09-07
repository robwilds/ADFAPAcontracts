import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NodesApiService } from '@alfresco/adf-content-services';
import { MinimalNode } from '@alfresco/js-api';



@Component({
  selector: 'associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css']
})

export class AssociationsComponent {

 @Input() node:MinimalNode;
 @Output() assocInfo = new EventEmitter();

  nodeinfo:any;
  selectedNode:any;
  justText:string = "";

  constructor(private nodeapi:NodesApiService) {
    //fetch the node information to get the associations property from contractmanagement:associations

    //this.assocInfo.emit("just some text from association component");

  //   if (this.nodeId == null){
  //     //do nothing
  //     this.nodeId = "this is now null"
  //   }
  //   else {
  //   this.nodeapi.getNode(this.nodeId).subscribe((entry: MinimalNode) => {

  //     this.nodeinfo = entry.parentId;
  //     console.log("from assocations: ",String(entry));

  //   });
  //   //console.log("from assocations: ",this.nodeId);
  // }
  }


  ngOnChanges(changes) {
    this.updateNodeID();
  }


  updateNodeID(){

    this.nodeinfo = this.node.properties['ContractManagement:associations'];

    // this.nodeapi.getNodeMetadata(this.node).subscribe(entry => {
    //   this.nodeinfo = String(entry.metadata.ContractManagement.entries) ;console.log("from associations ",entry);
    // });


  }

  rowClicked(rownode){
    this.selectedNode = rownode;

  }



}



