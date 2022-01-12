(function () {

angular.module('data')
.service('MenuDataService', MenuDataServiceFct)
.constant('ApiBasePath',"http://davids-restaurant.herokuapp.com");

MenuDataServiceFct.$inject = ['$q','$http','ApiBasePath'];
function MenuDataServiceFct($q,$http,ApiBasePath) {
  var MenuDataService = this;
  
  MenuDataService.getAllCategories = function(){
    var deferred = $q.defer();
    var result = [];

    $http(
      {
        method: "GET",
        url:(ApiBasePath + "/categories.json")
      }
      ).then(function(result){
          deferred.resolve(result.data);
      }).
      catch(function(error){
        deferred.reject(error);
      });

    return deferred.promise;
  }; 


  MenuDataService.getItemsForCategory = function(CategoryShortName){
    var deferred = $q.defer();
    var result = [];

    $http(
      {
        method: "GET",
        url:(ApiBasePath + "/menu_items.json"),
        params: {
          category: CategoryShortName
        }
      }
      ).then(function(result){
          deferred.resolve(result.data);
      }).
      catch(function(error){
        deferred.reject(error);
      });

    return deferred.promise;
  };
}


})();
