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

//��������,���ܼ��ر����ļ�
function PhoneListCtrlRemote($scope, $http) {
  $http.get('phones.json').success(function(data) {
    $scope.phones = data;
	//��ҳ,ǰ0-5��
	$scope.phones = data.splice(0, 5);
  });

  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}
 
//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];