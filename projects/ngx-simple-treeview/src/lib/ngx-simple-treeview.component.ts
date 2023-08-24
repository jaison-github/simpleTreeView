import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ContextMenuModel } from './context-menu/context-menu.interface';

@Component({
  selector: 'ngx-simple-treeview',
  templateUrl: './ngx-simple-treeview.component.html',
  styleUrls: ['./ngx-simple-treeview.component.scss']
})
export class NgxSimpleTreeviewComponent {

  @Input() treeViewData:any[] = [];
  @Output() onItemClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onItemExpandEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelectEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectAllEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() expandAllEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() collapseAllEvent: EventEmitter<any> = new EventEmitter<any>();
  
  @Input() rightClickMenuItems:Array<ContextMenuModel>  = [];

  searchValue:any = "";
  selectedItemList:any = [];
  sourceData:any[] = [];

  isDisplayContextMenu: boolean = false;;
  rightClickMenuPositionX: number = 0;
  rightClickMenuPositionY: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.rightClickMenuItems = [
      {
        menuText: 'copy',
        menuEvent: 'Copy Text',
      },
      {
        menuText: 'Format',
        menuEvent: 'Handle format',
      },
    ];

       this.sourceData = JSON.parse(JSON.stringify(this.treeViewData));
  }

  onItemClick(item:any) {
    console.log(item)
    this.onItemClickEvent.emit(item);
  }


  onItemExpand(item:any) {
    if (item.isExpanded) { item.isExpanded = !item.isExpanded; }
    else { item.isExpanded = true; }
    let obj = { expand: item.isExpanded, item: item }
    this.onItemClickEvent.emit(obj)
  }


  onSelect(item:any) {
    this.selectedItemList = [];
    if (item.selected) {
      item.selected = !item.selected;
      item.isExpanded = item.selected;
      if (item.selected) {
        this.selectedItemList.push(item);
      }
      this.recursiveSelect(item);
    }
    else {
      item.selected = true;
      item.isExpanded = item.selected;
      if (item.selected) {
        this.selectedItemList.push(item);
      }
      this.recursiveSelect(item);
    }

    let obj = { parentNode: item, selectedNodes: this.selectedItemList }
    this.onSelectEvent.emit(obj);
    console.log("onSelect =>", obj);
  }


  recursiveSelect(item:any) {
    item.internalChildren?.forEach((obj:any) => {
      obj.selected = item.selected;
      obj.isExpanded = obj.selected;

      if (obj.selected) {
        this.selectedItemList.push(obj);
      }

      if (obj.internalChildren) {
        this.recursiveSelect(obj);
      }
    });
  }

  filterTree(filterText: string) {
    this.sourceData = this.filterRecursive(filterText, this.treeViewData, 'text');
    if (this.sourceData) {
      this.expandAll(this.sourceData);
    }
  }

  applyFilter(event: any) {
    let filterText = event.target.value;
    this.filterTree(filterText);  
  }


  filterRecursive(filterText: string, array: any[], property: string) {
    let filteredData;

    //make a copy of the data so we don't mutate the original
    function copy(o: any) {
      return Object.assign({}, o);
    }

    // has string
    if (filterText) {
      // need the string to match the property value
      filterText = filterText.toLowerCase();
      // copy obj so we don't mutate it and filter
      filteredData = array.map(copy).filter(function x(y) {
        if (y[property].toLowerCase().includes(filterText)) {
          return true;
        }
        // if children match
        if (y.internalChildren) {
          return (y.internalChildren = y.internalChildren.map(copy).filter(x)).length;
        }
      });
      // no string, return whole array
    } else {
      filteredData = array;
    }

    return filteredData;
  }

  expandAll(arr = this.sourceData) {
    arr.forEach((item:any) => {
      item.isExpanded = true;
      if (item.internalChildren) {
        this.expandAll(item.internalChildren);
      }

    });


    this.expandAllEvent.emit();

  }



  collapseAll(arr = this.sourceData) {
    arr.forEach((item:any) => {
      item.isExpanded = false;
      if (item.internalChildren) {
        this.expandAll(item.internalChildren);
      }

    })

    this.collapseAllEvent.emit();
  }


  selectAllNode(arr = this.sourceData) {
    arr.forEach((item:any) => {
      this.onSelect(item);
    });
  }





  displayContextMenu(event:any, node:any) {

    this.isDisplayContextMenu = true;

 

    this.rightClickMenuPositionX = event.clientX;
    this.rightClickMenuPositionY = event.clientY;

  }

  getRightClickMenuStyle() {
    return {
      position: 'fixed',
      left: `${this.rightClickMenuPositionX}px`,
      top: `${this.rightClickMenuPositionY}px`
    }
  }

  handleMenuItemClick(event:any) {
    switch (event.data) {
      case this.rightClickMenuItems[0].menuEvent:
           console.log('To handle refactor');
           break;
      case this.rightClickMenuItems[1].menuEvent:
          console.log('To handle formatting');
    }
  }

  @HostListener('document:click')
  documentClick(): void {
    this.isDisplayContextMenu = false;
  }
}




