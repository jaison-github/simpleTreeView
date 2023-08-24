import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-simple-treeview',
  templateUrl: './ngx-simple-treeview.component.html',
  styleUrls: ['./ngx-simple-treeview.component.scss']
})
export class NgxSimpleTreeviewComponent {

  @Input() treeViewData:any = [];
  @Output() onItemClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onItemExpandEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelectEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectAllEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() expandAllEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() collapseAllEvent: EventEmitter<any> = new EventEmitter<any>();


  searchValue:any = "";
  selectedItemList:any = [];
  sourceData:any = [];
  constructor() { }

  ngOnInit(): void {
    this.treeViewData = [
      {
        "internalDisabled": false,
        "internalChecked": true,
        "internalCollapsed": false,
        "text": "Project - P 297",
        "value": "1-29",
        "internalChildren": [
          {
            "internalDisabled": false,
            "internalChecked": true,
            "internalCollapsed": false,
            "text": "Workspace - P297 WORK SPACE1",
            "value": "2-17",
            "internalChildren": [
              {
                "internalDisabled": false,
                "internalChecked": true,
                "internalCollapsed": false,
                "text": "Activity Group - P297 WORK SPACE1_Group1",
                "value": "3-13",
                "internalChildren": [
                  {
                    "internalDisabled": false,
                    "internalChecked": true,
                    "internalCollapsed": false,
                    "text": "BOQ - MEP Works",
                    "value": "4-1387",
                    "internalChildren": [
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Painter",
                        "value": "5-2882"
                      }
                    ]
                  },
                  {
                    "internalDisabled": false,
                    "internalChecked": true,
                    "internalCollapsed": false,
                    "text": "BOQ - 72 MM Test",
                    "value": "4-1388",
                    "internalChildren": [
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Painter",
                        "value": "5-2884"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Washing",
                        "value": "5-2885"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Wiring",
                        "value": "5-2886"
                      }
                    ]
                  },
                  {
                    "internalDisabled": false,
                    "internalChecked": true,
                    "internalCollapsed": false,
                    "text": "BOQ - Electrical Works",
                    "value": "4-36",
                    "internalChildren": [
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 2",
                        "value": "5-81"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 3",
                        "value": "5-82"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 4",
                        "value": "5-83"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 5",
                        "value": "5-84"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 6",
                        "value": "5-85"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 8",
                        "value": "5-87"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 9",
                        "value": "5-88"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 10",
                        "value": "5-89"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 11",
                        "value": "5-90"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 12",
                        "value": "5-91"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 13",
                        "value": "5-92"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 14",
                        "value": "5-93"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 15",
                        "value": "5-94"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 16",
                        "value": "5-95"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 17",
                        "value": "5-96"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 18",
                        "value": "5-97"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 19",
                        "value": "5-98"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 20",
                        "value": "5-99"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 21",
                        "value": "5-100"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 22",
                        "value": "5-101"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 23",
                        "value": "5-102"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 24",
                        "value": "5-103"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 7",
                        "value": "5-86"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Activity 1",
                        "value": "5-80"
                      }
                    ]
                  },
                  {
                    "internalDisabled": false,
                    "internalChecked": true,
                    "internalCollapsed": false,
                    "text": "BOQ - Test BOQ",
                    "value": "4-1393",
                    "internalChildren": [
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Painter",
                        "value": "5-2887"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Washing",
                        "value": "5-2888"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Wiring",
                        "value": "5-2889"
                      }
                    ]
                  },
                  {
                    "internalDisabled": false,
                    "internalChecked": true,
                    "internalCollapsed": false,
                    "text": "BOQ - Electrical Works",
                    "value": "4-1392",
                    "internalChildren": [
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Painter",
                        "value": "5-2890"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Washing",
                        "value": "5-2891"
                      },
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Wiring",
                        "value": "5-2892"
                      }
                    ]
                  },
                  {
                    "internalDisabled": false,
                    "internalChecked": true,
                    "internalCollapsed": false,
                    "text": "BOQ - Civil Works",
                    "value": "4-1391",
                    "internalChildren": [
                      {
                        "internalDisabled": false,
                        "internalChecked": true,
                        "internalCollapsed": false,
                        "text": "Activity - Washing",
                        "value": "5-14050"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]

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
}




