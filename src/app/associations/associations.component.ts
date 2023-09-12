import { Component, Input, Output, EventEmitter, AfterViewInit,OnInit,ViewChild } from '@angular/core';
import { NodesApiService } from '@alfresco/adf-content-services';
import { MinimalNode } from '@alfresco/js-api';
import { MatDialog } from '@angular/material/dialog';
import {trigger, style, animate, transition} from '@angular/animations';
import { MatTable } from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

export interface nodeData {
  id: number;
  name: string;
  nodeid: string;
}

@Component({
  selector: 'associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [ // using status here for transition
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AssociationsComponent implements OnInit,AfterViewInit{
  //table example: https://stackblitz.com/run?file=src%2Fexample%2Ftable-basic-example.html,src%2Fexample%2Ftable-basic-example.ts
  selectedAssociationTab:number;

  isTroubleshooting:boolean = false;
  node:MinimalNode;
  @Input() set _node(value:MinimalNode){console.log("association node change in setter",value);this.node = value;this.updateNodeID(this.node);}
  @Input() showAssociations: boolean = false;
  @Output() assocInfo = new EventEmitter();

  close:boolean = true;
  displayedColumns: string[] = ['id', 'name', 'nodeid'];
  nodeAssociations: any[];
  selectedNode: string;
  newAssociationArray:nodeData[] = [];

  @ViewChild('table') table: MatTable<any>;

  constructor(private nodeapi: NodesApiService,dialog: MatDialog) {}

  ngOnInit(): void {
    this.close = true;
  }

  ngAfterViewInit(): void {

  }
  ngOnChanges(changes) {
  }

  updateNodeID(nodeVal:MinimalNode) {

    //this.newAssociationArray = []; //clear the array now!
    this.nodeAssociations = nodeVal.properties['ContractManagement:associations']; //this should contain array of associations even if 1
    this.getExtendedAssociationInfo();

    //console.log("node updated from associations",this.nodeinfo,"selected node ",this.selectedNode);
  }

  rowClicked(rownode) {
    this.selectedNode = rownode;
  }

  getExtendedAssociationInfo(){

    //get name of each associated node
    for (let i = 0; i < this.nodeAssociations.length; i++){

      this.nodeapi.getNode(this.nodeAssociations[i]).subscribe(val => {

        //console.log("namefromnode current val: ",val.name);

        let data = {
              id: i + 1,
              name: val.name,
              nodeid: this.nodeAssociations[i]
          };

          this.newAssociationArray.push(data);
          //console.log("namefromnode data: ",this.newAssociationArray);
          this.table.renderRows();

      })
    }

    console.log("associations for loop done: ",this.newAssociationArray);
  }

  customAssociationAction(event)
  {
    //console.log("custom association action id is: ",event.value.entry.id)
    //push to the newAssociationArray which will eventually update properties

    //get next available index
    let nextIndex = this.newAssociationArray.length + 1;

      let data = {
        id: nextIndex,
        name: event.value.entry.name,
        nodeid: event.value.entry.id
    };

    this.newAssociationArray.push(data);
    this.table.renderRows();

    //now set the tab back to zero (the initial tab)
    this.selectedAssociationTab = 0;

  }

  closeit(){
    this.close = false;
  }

}



