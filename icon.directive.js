angular
	.module('icon.directive')
	.directive('icon', icon);

function icon() {
	return {
		restrict: 'A',
		scope:{
			name: '@'
		},
		controller: iconController,
		template: '<span ng-bind-html="markup"></span>'
	};
}

function iconController(ICONS, $sce, $scope) {
	if(ICONS && ICONS[$scope.name] && ICONS[$scope.name].data) {
		$scope.markup = $sce.trustAsHtml(ICONS[$scope.name].data);
	}
}
