import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleTreeView';
  data:any[] =  [
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
}
