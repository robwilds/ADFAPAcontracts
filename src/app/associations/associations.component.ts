import { Component, Input, Output, EventEmitter, AfterViewInit,OnInit,ViewChild, OnDestroy } from '@angular/core';
import { DocumentListComponent, NodesApiService } from '@alfresco/adf-content-services';
import { MinimalNode, NodeEntry } from '@alfresco/js-api';
import { MatDialog } from '@angular/material/dialog';
import {trigger, style, animate, transition} from '@angular/animations';
import { MatTable,MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatSortable } from '@angular/material/sort';

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
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AssociationsComponent implements OnInit,AfterViewInit,OnDestroy{
  //table example: https://stackblitz.com/run?file=src%2Fexample%2Ftable-basic-example.html,src%2Fexample%2Ftable-basic-example.ts
  selectedAssociationTab:number;

  isTroubleshooting:boolean = false;
  node:MinimalNode;
  @Input() set _node(value:MinimalNode){console.log("association node change in setter",value);this.node = value;this.updateNodeID(this.node);}
  @Input() showAssociations: boolean = false;
  @Output() assocInfo = new EventEmitter();

  close:boolean = true;
  displayedColumns: string[] = ['id', 'name', 'nodeid','action'];
  dataSource: MatTableDataSource<nodeData>;
  nodeAssociations: any[];
  selectedNode: string;
  newAssociationArray:nodeData[] = [];
  showSaveCancelButtons:boolean = false;
  isSaveButtonDisabled:boolean = false;
  currentFolderId:string="-my-";

  @ViewChild('table',{static:true}) table: MatTable<any>;
  @ViewChild('documentList') doclist: DocumentListComponent;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private nodeapi: NodesApiService,dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.newAssociationArray);
  }

  ngOnInit(): void {
    this.close = true;
    this.dataSource.paginator = this.paginator;
    this.sort.sort(({ id: 'id', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
  }
  ngOnChanges(changes) {
  }
  ngOnDestroy(): void {
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

    let tempSorted:nodeData[] = [];
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
          this.dataSource = new MatTableDataSource(this.newAssociationArray);
          this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

      })
    }

    //console.log("association table data is: ",this.dataSource);
    this.dataSource = new MatTableDataSource(this.newAssociationArray);
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;
    this.table.renderRows();
    //console.log("associations for loop done: ",this.dataSource);
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
    this.dataSource = new MatTableDataSource(this.newAssociationArray);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //this.table.renderRows();

    //now set the tab back to zero (the initial tab)
    this.selectedAssociationTab = 0;
    this.showSaveCancelButtons = true;
  }

  saveAssociations(){
    //now loop through the array and create a new array with just the nodeIds
    let tempArray:string[] = [];

    for (let entry of this.newAssociationArray) {
      tempArray.push(`"${entry.nodeid}"`)
 }

    //take new array and push to update properties on node
    let updateStr = `{
      "properties":
      {
        "ContractManagement:associations":[${tempArray}]
      }
     }`

    console.log("associations update string: ",updateStr);

    this.nodeapi.updateNode(this.node.id,updateStr).subscribe( val => {console.log("updated node: ",val);this.isSaveButtonDisabled = true;})

  }

  closeit(){
    this.close = false;
  }

  onSeachItemClicked(event:NodeEntry)
  {
    //this.doclist.currentFolderId = event.entry.parentId;
    this.currentFolderId = event.entry.parentId;

    //console.log("doc list data: ",this.doclist.data);
    //console.log("parent id of search item clicked: ",event.entry.parentId);

  }

  RemoveElementFromObjectArray(key: number) {
    this.newAssociationArray.forEach((value,index)=>{
        if(value.id==key) this.newAssociationArray.splice(index,1);
    });

    //once all done, push the new array to the datasource so it can be seen
    this.dataSource = new MatTableDataSource(this.newAssociationArray);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.showSaveCancelButtons = true;
}


}



