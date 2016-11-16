angular.module('starter.services', [])


.factory('Items', function ItemsFactory($http) {
  return {
    getAll: function () {
      return $http({
        method: 'GET',
        url: 'data.json'
      });
    },

  }
});