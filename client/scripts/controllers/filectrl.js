var app = angular.module('cfApp');
app.controller('FileCtrl', ['$scope', '$http', '$window', '$rootScope', '$filter', function($scope, $http, $window, $rootScope, $filter) {
    $http.get('/public/data.json').then(function(res) {
        console.log('Res', res);
        $rootScope.newfile = res.data;
        $scope.data = $rootScope.newfile;
        // $scope.data = res.data;
        // var splitarr = res.data.ChurchService.split(", ");
        // console.log('Service Array Initial Get Request  ', splitarr);
        // for (var i = 0; i < $scope.data.length; i++) {
        //     //$scope.data.ChurchService[i] = $scope.data.ChurchService[i].split(",").join("\n");
        // }
        // console.log('ChurchService', $scope.data.ChurchService);
        // $scope.data.ChurchAddress =  
        //    console.log($scope.data[0].churchname);

    });
    $scope.order = function() {
        $scope.data = [];
        //   $scope.arrlen = $rootScope.newfile.ChurchName.s;
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('A')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
        console.log('Service Array ', $scope.data.ChurchService);
    };
    $scope.border = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('B')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.corder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('C')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.dorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('D')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.eorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('E')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.forder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('F')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.gorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('G')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.horder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('H')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.iorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('I')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.jorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('J')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.korder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('K')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.lorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('L')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.morder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('M')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.norder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('N')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.oorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('O')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.porder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('P')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.qorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('Q')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.rorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('R')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.sorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('S')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.torder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('T')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.uorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('U')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.vorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('V')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.worder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('W')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.xorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('X')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.yorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('Y')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };
    $scope.zorder = function() {
        $scope.data = [];
        for (var i = 0; i < $rootScope.newfile.length; i++) {
            if ($rootScope.newfile[i].ChurchName.startsWith('Z')) {
                $scope.data.push($rootScope.newfile[i]);
            }
        }
    };

}]);