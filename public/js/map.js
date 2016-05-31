/**
 * Created by Girya on 28/05/2016.
 */
var app = angular.module("map",[]);
app.controller("mapController",function ($scope,$http) {
    $http.get("http://localhost:3000/getAllMap").success(function (data) {
        console.log(data);
    });
});