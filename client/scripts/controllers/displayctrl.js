//angular.module('cfApp',[])
var app = angular.module('cfApp');
app.factory('todoListService', function ($rootScope) {
    
    var todoList = {};
    todoList.transferChoice = function(choice){
        this.choice = choice;
    };
    console.log('Factoy ',todoList);
    return todoList;
});