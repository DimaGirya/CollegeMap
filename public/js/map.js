var app = angular.module("map",[]);
app.controller("mapController",function ($scope,$http) {
    /*
     $http.get("http://localhost:3000/getAllMap").success(function (data) {
     console.log(data);
     });
     */
    $scope.serverStr = "http://localhost:3000";
    $scope.inputFrom = "";
    $scope.inputTo = "";
    $scope.sendFindPatchRequest = function(){
        console.log("inputFrom:"+$scope.inputFrom);
        console.log("inputTo:"+$scope.inputTo);
        $http.get( $scope.serverStr+"/getPath/"+$scope.inputFrom+"/"+$scope.inputTo).success(function () {
           console.log(data); 
        });
        $scope.inputFrom = "";
        $scope.inputTo = "";
    };

    //tempory json of data for example. It's must be output from server function. Todo!
    $scope.mapData =  {
        "columns": [
            {
                "boxes": [
                    {
                        "boxesType": "room",
                        "border": "borderLeftTop",
                        "place_id": 1,
                        "box_id": 0,
                        "in_path": false

                    },
                    {
                        "boxesType": "room",
                        "border": "borderTop",
                        "place_id": 1,
                        "box_id": 1,
                        "in_path": false
                    },
                    {
                        "boxesType": "hallway",
                        "border": "borderNone",
                        "place_id": 2,
                        "box_id": 2,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderTopRightBottom",
                        "place_id": 1,
                        "box_id": 3,
                        "in_path": false
                    }
                ]
            },
            {
                "boxes": [
                    {
                        "boxesType": "room",
                        "border": "borderLeftBottom",
                        "place_id": 1,
                        "box_id": 4,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderRightBottom",
                        "place_id": 1,
                        "box_id": 5,
                        "in_path": false
                    },
                    {
                        "boxesType": "hallway",
                        "border": "borderNone",
                        "place_id": 2,
                        "box_id": 6,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderTopRightBottom",
                        "place_id": 3,
                        "box_id": 7,
                        "in_path": false
                    }
                ]
            },{
                "boxes": [
                    {
                        "boxesType": "room",
                        "border": "borderLeftTop",
                        "place_id": 22,
                        "box_id": 8,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderTop",
                        "place_id": 2,
                        "box_id": 9,
                        "in_path": false
                    },
                    {
                        "boxesType": "hallway",
                        "border": "borderNone",
                        "place_id": 2,
                        "box_id": 10,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderTopRightBottom",
                        "place_id": 3,
                        "box_id": 11,
                        "in_path": false
                    }
                ]
            }, {
                "boxes": [
                    {
                        "boxesType": "room",
                        "border": "borderLeft",
                        "place_id": 22,
                        "box_id": 12,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderRight",
                        "place_id": 2,
                        "box_id": 13,
                        "in_path": false
                    },
                    {
                        "boxesType": "hallway",
                        "border": "borderNone",
                        "place_id": 2,
                        "box_id": 14,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderTopRightBottom",
                        "place_id": 3,
                        "box_id": 15,
                        "in_path": false
                    }
                ]
            },
            {
                "boxes": [
                    {
                        "boxesType": "room",
                        "border": "borderLeftBottom",
                        "place_id": 2,
                        "box_id": 16,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderRightBottom",
                        "place_id": 2,
                        "box_id": 17,
                        "in_path": false
                    },
                    {
                        "boxesType": "hallway",
                        "border": "borderNone",
                        "place_id": 2,
                        "box_id": 18,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderTopRightBottom",
                        "place_id": 3,
                        "box_id": 19,
                        "in_path": false
                    }
                ]
            },
            {
                "boxes": [
                    {
                        "boxesType": "room",
                        "border": "borderLeftTopBottom",
                        "place_id": 2,
                        "box_id": 20,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderTopBottom",
                        "place_id": 2,
                        "box_id": 21,
                        "in_path": false
                    },
                    {
                        "boxesType": "hallway",
                        "border": "borderNone",
                        "place_id": 2,
                        "box_id": 22,
                        "in_path": false
                    },
                    {
                        "boxesType": "hallway",
                        "border": "borderNone",
                        "place_id": 3,
                        "box_id": 23,
                        "in_path": false
                    }
                ]
            },
            {
                "boxes": [
                    {
                        "boxesType": "room",
                        "border": "borderLeftTopBottom",
                        "place_id": 1,
                        "box_id": 24,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderTopBottom",
                        "place_id": 2,
                        "box_id": 25,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderRightBottom",
                        "place_id": 2,
                        "box_id": 26,
                        "in_path": false
                    },
                    {
                        "boxesType": "room",
                        "border": "borderLeftRightBottom",
                        "place_id": 3,
                        "box_id": 27,
                        "in_path": false
                    }
                ]
            }
        ]
    }
});