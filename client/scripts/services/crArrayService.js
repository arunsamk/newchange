cfapplication.factory('crArrayService', function($rootScope) {
    var buffarray = [];
    mkarr.val = function(buffarray) {
        buffarray = $rootScope.chformData.chService[0].split('\n');
        this.buffarray = buffarray;
    }
})