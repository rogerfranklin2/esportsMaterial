(function() {
    "use strict";

    angular.module('coinBet', ['ngMaterial'])
        .controller('CoinBetController', ['$scope', '$http',
            function($scope, $http) {}
        ])
        .controller('NavController', ['$scope',
            function($scope) {
                this.selectedMenu = 'test'

                this.setSelectedMenu = function(setTab) {
                    this.selectedMenu = setTab;

                }

                this.isSelectedMenuItem = function(checkTab) {
                    return this.selectedMenu === checkTab
                }

                this.isSectionSelected = function(tab) {
                    return this.selectedMenu === tab;
                }
            }
        ])
        .controller('ContentController', ['$scope',
            function($scope) {
                this.expanded = false;

                this.isExpanded = function() {
                    return this.expanded;
                }

                this.toggleExpanded = function(param) {
                    return this.expanded = param;
                }
            }
        ]);
})();