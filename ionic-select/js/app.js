angular.module('kuwuya', ['ionic'])
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-back');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-back');  

  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');

  $ionicConfigProvider.views.swipeBackEnabled(false); //禁止侧滑后退事件
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }

      }
    })
    .state('eventmenu.lists',{
      url:"/lists",
      views: {
        'menuContent' :{
          templateUrl: "templates/lists.html"
        }
      }
    })
  
 $urlRouterProvider.otherwise("/event/home/1");
})

.controller('MainCtrl',function ($scope) {
    $scope.names = [
      {"id":"1","name":"AAAAAA"},
      {"id":"2","name":"BBBBBB"},
      {"id":"3","name":"CCCCCC"},
      {"id":"4","name":"DDDDDD"},
      {"id":"5","name":"FFFFFF"},
      {"id":"6","name":"GGGGGG"},
      {"id":"7","name":"WWWWWW"},
      {"id":"8","name":"EEEEEE"},
      {"id":"9","name":"TTTTTT"}
    ];
    $scope.listShow = {"name":"请选择"}; //默认打开
    $scope.list_show = function($id){
        var id = $id;
      if(id =='1'){
        $scope.listShow = [
          {"pid":"1","name":"1AAAAAA"},
          {"pid":"1","name":"2AAAAAA"},
          {"pid":"1","name":"3AAAAAA"},
          {"pid":"1","name":"4AAAAAA"},
          {"pid":"1","name":"5AAAAAA"},
          {"pid":"1","name":"6AAAAAA"},
          {"pid":"1","name":"7AAAAAA"},
          {"pid":"1","name":"8AAAAAA"},
          {"pid":"1","name":"9AAAAAA"},
          {"pid":"1","name":"10AAAAAA"},
          {"pid":"1","name":"11AAAAAA"},
          {"pid":"1","name":"12AAAAAA"},
          {"pid":"1","name":"13AAAAAA"},
          {"pid":"1","name":"14AAAAAA"},
          {"pid":"1","name":"15AAAAAA"},
          {"pid":"1","name":"16AAAAAA"},
          {"pid":"1","name":"17AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"},
          {"pid":"1","name":"AAAAAA"}
        ];
      };
      if(id =='2'){
        $scope.listShow = [
          {"pid":"1","name":"1BBBBBB"},
          {"pid":"1","name":"2BBBBBB"},
          {"pid":"1","name":"3BBBBBB"},
          {"pid":"1","name":"4BBBBBB"},
          {"pid":"1","name":"5BBBBBB"},
          {"pid":"1","name":"6BBBBBB"},
          {"pid":"1","name":"7BBBBBB"},
          {"pid":"1","name":"8BBBBBB"},
          {"pid":"1","name":"9BBBBBB"},
          {"pid":"1","name":"10BBBBBB"},
          {"pid":"1","name":"11BBBBBB"},
          {"pid":"1","name":"12BBBBBB"},
          {"pid":"1","name":"13BBBBBB"},
          {"pid":"1","name":"14BBBBBB"},
          {"pid":"1","name":"15BBBBBB"},
          {"pid":"1","name":"16BBBBBB"},
          {"pid":"1","name":"17BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"},
          {"pid":"1","name":"BBBBBB"}
        ];
      };
      if(id =='3'){
        $scope.listShow = [
          {"pid":"1","name":"1CCCCCC"},
          {"pid":"1","name":"2CCCCCC"},
          {"pid":"1","name":"3CCCCCC"},
          {"pid":"1","name":"4CCCCCC"},
          {"pid":"1","name":"5CCCCCC"},
          {"pid":"1","name":"6CCCCCC"},
          {"pid":"1","name":"7CCCCCC"},
          {"pid":"1","name":"8CCCCCC"},
          {"pid":"1","name":"9CCCCCC"},
          {"pid":"1","name":"10CCCCCC"},
          {"pid":"1","name":"11CCCCCC"},
          {"pid":"1","name":"12CCCCCC"},
          {"pid":"1","name":"13CCCCCC"},
          {"pid":"1","name":"14CCCCCC"},
          {"pid":"1","name":"15CCCCCC"},
          {"pid":"1","name":"16CCCCCC"},
          {"pid":"1","name":"17CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"},
          {"pid":"1","name":"CCCCCC"}
        ];
      };
      if(id =='4'){
        $scope.listShow = [
          {"pid":"1","name":"1DDDDDD"},
          {"pid":"1","name":"2DDDDDD"},
          {"pid":"1","name":"3DDDDDD"},
          {"pid":"1","name":"4DDDDDD"},
          {"pid":"1","name":"5DDDDDD"},
          {"pid":"1","name":"6DDDDDD"},
          {"pid":"1","name":"7DDDDDD"},
          {"pid":"1","name":"8DDDDDD"},
          {"pid":"1","name":"9DDDDDD"},
          {"pid":"1","name":"10DDDDDD"},
          {"pid":"1","name":"11DDDDDD"},
          {"pid":"1","name":"12DDDDDD"},
          {"pid":"1","name":"13DDDDDD"},
          {"pid":"1","name":"14DDDDDD"},
          {"pid":"1","name":"15DDDDDD"},
          {"pid":"1","name":"16DDDDDD"},
          {"pid":"1","name":"17DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"},
          {"pid":"1","name":"DDDDDD"}
        ];
      };
      if(id =='5'){
        $scope.listShow = [
          {"pid":"1","name":"1EEEEEE"},
          {"pid":"1","name":"2EEEEEE"},
          {"pid":"1","name":"3EEEEEE"},
          {"pid":"1","name":"4EEEEEE"},
          {"pid":"1","name":"5EEEEEE"},
          {"pid":"1","name":"6EEEEEE"},
          {"pid":"1","name":"7EEEEEE"},
          {"pid":"1","name":"8EEEEEE"},
          {"pid":"1","name":"9EEEEEE"},
          {"pid":"1","name":"10EEEEEE"},
          {"pid":"1","name":"11EEEEEE"},
          {"pid":"1","name":"12EEEEEE"},
          {"pid":"1","name":"13EEEEEE"},
          {"pid":"1","name":"14EEEEEE"},
          {"pid":"1","name":"15EEEEEE"},
          {"pid":"1","name":"16EEEEEE"},
          {"pid":"1","name":"17EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"},
          {"pid":"1","name":"EEEEEE"}
        ];
      };
      if(id =='6'){
        $scope.listShow = [
          {"pid":"1","name":"1FFFFFF"},
          {"pid":"1","name":"2FFFFFF"},
          {"pid":"1","name":"3FFFFFF"},
          {"pid":"1","name":"4FFFFFF"},
          {"pid":"1","name":"5FFFFFF"},
          {"pid":"1","name":"6FFFFFF"},
          {"pid":"1","name":"7FFFFFF"},
          {"pid":"1","name":"8FFFFFF"},
          {"pid":"1","name":"9FFFFFF"},
          {"pid":"1","name":"10FFFFFF"},
          {"pid":"1","name":"11FFFFFF"},
          {"pid":"1","name":"12FFFFFF"},
          {"pid":"1","name":"13FFFFFF"},
          {"pid":"1","name":"14FFFFFF"},
          {"pid":"1","name":"15FFFFFF"},
          {"pid":"1","name":"16FFFFFF"},
          {"pid":"1","name":"17FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"},
          {"pid":"1","name":"FFFFFF"}
        ];
      };
      if(id =='7'){
        $scope.listShow = [
          {"pid":"1","name":"1GGGGGG"},
          {"pid":"1","name":"2GGGGGG"},
          {"pid":"1","name":"3GGGGGG"},
          {"pid":"1","name":"4GGGGGG"},
          {"pid":"1","name":"5GGGGGG"},
          {"pid":"1","name":"6GGGGGG"},
          {"pid":"1","name":"7GGGGGG"},
          {"pid":"1","name":"8GGGGGG"},
          {"pid":"1","name":"9GGGGGG"},
          {"pid":"1","name":"10GGGGGG"},
          {"pid":"1","name":"11GGGGGG"},
          {"pid":"1","name":"12GGGGGG"},
          {"pid":"1","name":"13GGGGGG"},
          {"pid":"1","name":"14GGGGGG"},
          {"pid":"1","name":"15GGGGGG"},
          {"pid":"1","name":"16GGGGGG"},
          {"pid":"1","name":"17GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"},
          {"pid":"1","name":"GGGGGG"}
        ];
      };
      if(id =='8'){
        $scope.listShow = [
          {"pid":"1","name":"1WWWWWW"},
          {"pid":"1","name":"2WWWWWW"},
          {"pid":"1","name":"3WWWWWW"},
          {"pid":"1","name":"4WWWWWW"},
          {"pid":"1","name":"5WWWWWW"},
          {"pid":"1","name":"6WWWWWW"},
          {"pid":"1","name":"7WWWWWW"},
          {"pid":"1","name":"8WWWWWW"},
          {"pid":"1","name":"9WWWWWW"},
          {"pid":"1","name":"10WWWWWW"},
          {"pid":"1","name":"11WWWWWW"},
          {"pid":"1","name":"12WWWWWW"},
          {"pid":"1","name":"13WWWWWW"},
          {"pid":"1","name":"14WWWWWW"},
          {"pid":"1","name":"15WWWWWW"},
          {"pid":"1","name":"16WWWWWW"},
          {"pid":"1","name":"17WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"},
          {"pid":"1","name":"WWWWWW"}
        ];
      };
      if(id =='9'){
        $scope.listShow = [
          {"pid":"1","name":"1TTTTTT"},
          {"pid":"1","name":"2TTTTTT"},
          {"pid":"1","name":"3TTTTTT"},
          {"pid":"1","name":"4TTTTTT"},
          {"pid":"1","name":"5TTTTTT"},
          {"pid":"1","name":"6TTTTTT"},
          {"pid":"1","name":"7TTTTTT"},
          {"pid":"1","name":"8TTTTTT"},
          {"pid":"1","name":"9TTTTTT"},
          {"pid":"1","name":"10TTTTTT"},
          {"pid":"1","name":"11TTTTTT"},
          {"pid":"1","name":"12TTTTTT"},
          {"pid":"1","name":"13TTTTTT"},
          {"pid":"1","name":"14TTTTTT"},
          {"pid":"1","name":"15TTTTTT"},
          {"pid":"1","name":"16TTTTTT"},
          {"pid":"1","name":"17TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"},
          {"pid":"1","name":"TTTTTT"}
        ];
      }
    }
});

/*
.controller('MainCtrl', function ($scope,$http) {
    $http.get("http://192.168.7.157/co/index.php/Home/Index/test_json", {cache: true})
    .success(function(response) {$scope.names = response;});

    $http.get("http://192.168.7.157/co/index.php/Home/Index/json_id/id/1")
    .success(function(response) {$scope.listShow = response;});

    $scope.list_show = function($id) {
      var id = $id;
      $http.get("http://192.168.7.157/co/index.php/Home/Index/json_id/id/"+id)
    .success(function(data) {
      $scope.listShow = data;
    });
    }
  });
*/