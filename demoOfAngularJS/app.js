//angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
angular.module('phonecat', ['phonecatFilters']).

  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:name', {templateUrl: 'phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);