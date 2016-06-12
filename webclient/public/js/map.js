var app = angular.module("map",[]);
app.controller("mapController",function ($scope,$http) {
    $scope.mapData = null;
    $scope.rooms = null;
    $scope.readyToSendStatusUpdate = false;
    $scope.serverStr = "http://localhost:3000";
    $scope.inputFrom = "";
    $scope.inputTo = "";
    $scope.roomToReport = {
        status:"",
        name:"",
        id :-1
    };
    $scope.bindIdToName = function () {
       console.log( $scope.roomToReport.name);
        var size = $scope.rooms.length;
        for(var i = 0; i <  length; i++){
            if($scope.rooms[i].name ===   $scope.roomToReport.name) {
                $scope.roomToReport.id = $scope.rooms[i].id;
                $scope.readyToSendStatusUpdate = true;
                console.log("$scope.roomToReport.id:");
                console.log($scope.roomToReport.id);
                console.log("$scope.readyToSendStatusUpdate:");
                console.log($scope.readyToSendStatusUpdate);
                return;
            }
        }
        $scope.readyToSendStatusUpdate = false;
        $scope.roomToReport.id = -1;
        console.log("$scope.roomToReport.id:");
        console.log($scope.roomToReport.id);
        console.log("$scope.readyToSendStatusUpdate:");
        console.log($scope.readyToSendStatusUpdate);
    };
    $scope.refreshMapData = function () {
        $http.get( $scope.serverStr+"/getMapToDisplay").success(function (data) {
            $scope.mapData = data;
            console.log("get mapData");
            console.log($scope.mapData);
        });
        $http.get( $scope.serverStr+"/getMap").success(function (data) {
            var size = data.length;
            $scope.rooms = [];
            for(var i = 0; i < size; i++){
                console.log(data[i]);
                if(data[i].type == "class" || data[i].type == "office"){
                    $scope.rooms.push(data[i]);
                }
            }
            console.log("data:");
            console.log($scope.rooms);
        });
    };
    $scope.sendReportRoomRequest = function () {
        if($scope.readyToSendStatusUpdate) {
            $http.get($scope.serverStr + "/setStatusRoom/" + $scope.roomToReport + "/" + $scope.roomStatus).success(function (data) {
                console.log(data);
            });
        }else{
            console.log("not ready to send");
        }
    };
    $scope.sendFindPatchRequest = function(){
        console.log("inputFrom:"+$scope.inputFrom);
        console.log("inputTo:"+$scope.inputTo);
        $http.get( $scope.serverStr+"/getPath/"+$scope.inputFrom+"/"+$scope.inputTo).success(function () {
           console.log(data); 
        });
        $scope.inputFrom = "";
        $scope.inputTo = "";
    };
    console.log("1");
    $scope.refreshMapData();
    console.log("2");
    //tempory json of data for example. It's must be output from server function. Todo!
/*    $scope.mapData=[
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 0
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 1
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 2
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 3
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 4
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 5
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 6
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 7
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 8
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 9
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 10
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 11
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 12
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 13
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 14
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 15
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 16
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 17
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 18
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 19
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 20
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 21
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 22
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 23
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 24
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 25
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 26
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 27
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 28
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 29
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 30
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 31
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 32
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 33
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 34
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 35
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 36
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 37
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 38
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 39
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 40
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 41
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 42
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 43
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 44
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 45
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 46
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 47
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 48
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 49
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 50
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 51
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 52
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 53
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 54
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 55
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 56
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 57
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 58
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 59
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 60
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 61
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 62
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 63
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 64
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 65
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 66
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 67
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 68
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 2,
            "in_path": false,
            "box_id": 69
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 70
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 71
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 72
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 73
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 74
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 75
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 76
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 77
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 78
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 79
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 80
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 81
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 82
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 83
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 84
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 85
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 86
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 87
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 88
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 89
        }],
        [{
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 90
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 91
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 92
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 93
        }, {
            "boxesType": "classroom",
            "border": "none",
            "place_id": 1,
            "in_path": false,
            "box_id": 94
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 95
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 96
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 97
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 98
        }, {
            "boxesType": "hallway",
            "border": "none",
            "place_id": 3,
            "in_path": false,
            "box_id": 99
        }]
    ];
    */
    /* $scope.mapData =  {
         "columns": [
             {
                 "boxes": 1[
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
     */
});