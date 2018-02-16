 

var employeesys = angular.module('Empapp', ['ngRoute']);
 
employeesys.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //$locationProvider.hashPrefix("/");
    $locationProvider.html5Mode(false);
    $routeProvider
        .when('/', { templateUrl: 'partials/Landing.html', controller: 'EmpListController' })
        .when('/Empdashboard', { templateUrl: 'partials/Employee_dashboard.html', controller: 'dashboardController' })
        .when('/Emplist', { templateUrl: 'partials/List_all.html', controller: 'EmpListController' })
        .when('/Empadd', { templateUrl: 'partials/Add_detail.html', controller: 'InsertEmpDetailsController' })
        .when('/Empedit/:itemId', { templateUrl: 'partials/Edit_detail.html', controller: 'EditEmpDetailsController' })
        .otherwise({redirectTo: "/"});
}]);
employeesys.controller('EmpListController',  function ($scope, $http) {
    $http.get('js/data_1.json').success(function (data) {
        $scope.emp = data;
    });
});


employeesys.controller('dashboardController', function ($scope, $http) {
    
    $http.get('js/Leaveslist.json').success(function (data) {
        $scope.Leaves = data;
    });
   
    $http.get('js/holidaytlist.json').success(function (data) {
        $scope.Holidays = data;
        });
});
employeesys.controller('EditEmpDetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('js/data_1.json').success(function (data) {
        $scope.emp = data;

        $scope.param = $routeParams;

     //   $scope.id = $routeParams.itemId;

        $scope.whichItem = $routeParams.itemId;

    });
}]);
employeesys.controller('InsertEmpDetailsController',  function ($scope, $http) {

    $scope.AddEmp = function () {
        
        $scope.emp.push({
        Emp_ID: $scope.Emp_ID,
        Emp_Name: $scope.Emp_Name,
        Emp_gender: $scope.Emp_gender,
        Emp_Email: $scope.Emp_Email,
        Emp_Address: $scope.Emp_Address,
        Emp_DOB: $scope.Emp_DOB,
        Emp_DOJ: $scope.Emp_DOJ,
        Emp_Bloodgroup: $scope.Emp_Bloodgroup
    });
    }
   
      //  $http.push('js/data_2.json').success(function (data) { $scope.emp = data; });
  
});

//function MainCtrl($scope, dateFilter) {
//    $scope.date = new Date();

//    $scope.$watch('date', function (date) {
//        $scope.dateString = dateFilter(date, 'yyyy-MM-dd');
//    });

//    $scope.$watch('DOB', function (dateString) {
//        $scope.date = new Date(dateString);
//    });

//    $scope.$watch('DOJ', function (dateString) {
//        $scope.date = new Date(dateString);
//    });
//}
//employeesys.controller('EditEmpDetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
//    $http.get('js/data_1.json').success(function (data) {
//        $scope.emp = data;
 
//        $scope.param = $routeParams;
       
//        $scope.id = $routeParams.itemId;
       
//        $scope.whichItem = $routeParams.itemId;
//        if ($routeParams.itemId > 0) {
//            $scope.prevItem = Number($routeParams.itemId) - 1;
//        } else {
//            $scope.prevItem = $scope.emp.length - 1;
//        }
//        if ($routeParams.itemId < $scope.emp.length - 1) {
//            $scope.nextItem = Number($routeParams.itemId) + 1;
//            console.log("second if loop " + $routeParams.itemId);
//        } else {
//            $scope.nextItem = 0;
//            console.log("second else loop " + $routeParams.itemId);
//        }
//    });

 

 