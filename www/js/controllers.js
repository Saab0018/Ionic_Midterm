angular.module('starter.controllers', [])



.controller('booksCtrl', ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {
  //alert($stateParams.categoryID);
  $scope.books = [];
  $scope.booksInCategory = [];
  Items.getAll().then(
    function (response) {
      $scope.categoryID = $stateParams.categoryID;
      $scope.allData = response.data;
      $scope.books = $scope.allData.books;
      var numBooks = $scope.books.length;
      for (var i = 0; i < numBooks; i++) {
        if ($scope.books[i].cat_id == $scope.categoryID) {
          $scope.booksInCategory.push($scope.books[i]);
        }
      }
    },
    function (err) {});

}])

.controller('detailsCtrl', ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {
  $scope.bookID = $stateParams.bookID;

  Items.getAll().then(
    function (response) {
      $scope.allData;

      $scope.allData = response.data;
      $scope.books = $scope.allData.books;
      var numBooks = $scope.books.length;
      for (var i = 0; i < numBooks; i++) {
        if ($scope.books[i]._id == $scope.bookID) {
          $scope.title = $scope.books[i].title;
          $scope.shortDescription = $scope.books[i].short_description;
          $scope.longDescription = $scope.books[i].long_description;
          $scope.price = $scope.books[i].price;
          $scope.rating = $scope.books[i].rating;
          $scope.author = $scope.books[i].author;
          $scope.authorImage = $scope.books[i].author_image;
        }
      }
    },
    function (err) {});

  $scope.ratingsObject = {
    iconOn: 'ion-ios-star', //Optional
    iconOff: 'ion-ios-star-outline', //Optional
    iconOnColor: 'rgb(200, 200, 100)', //Optional
    iconOffColor: 'rgb(200, 100, 100)', //Optional
    rating: localStorage.getItem($scope.bookID), //Optional
    minRating: 1, //Optional
    readOnly: true, //Optional
    callback: function (rating, index) { //Mandatory
      $scope.ratingsCallback(rating, index);

    }
  };

  $scope.ratingsCallback = function (rating, index) {
    console.log('Selected rating is : ', rating, ' and the index is : ', index);
    localStorage.setItem($scope.bookID, rating);
  };


}])

.controller('mainCtrl', ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {
  $scope.allData;
  Items.getAll().then(
    function (response) {
      $scope.allData = response.data;
    },
    function (err) {});
}]);