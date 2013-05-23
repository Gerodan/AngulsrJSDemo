function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S.",
	 "imageUrl": "OwenLiv.jpg",
     "age": 0},
    {"name": "Motorola XOOM? with Wi-Fi",
     "snippet": "The Next, Next Generation tablet.",
	 "imageUrl": "OwenLiv.jpg",
     "age": 1},
    {"name": "MOTOROLA XOOM?",
     "snippet": "The Next, Next Generation tablet.",
	 "imageUrl": "OwenLiv.jpg",
     "age": 2}
  ];

  $scope.orderProp = 'age';

}

//跨域问题,不能加载本地文件
function PhoneListCtrlRemote($scope, $http) {
  $http.get('phones.json').success(function(data) {
    $scope.phones = data;
	//分页,前0-5个
	$scope.phones = data.splice(0, 5);
  });

  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];



function PhoneDetailCtrl($scope, $routeParams, $http) {
  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
    $scope.mainImageUrl = data.images[0];
  });
 
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}
 
//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];

//使用自定义的Service获得数据
function PhoneListCtrlREST($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
}
 
//PhoneListCtrl.$inject = ['$scope', 'Phone'];
 
 
 
function PhoneDetailCtrlREST($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });
 
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}
 
//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];