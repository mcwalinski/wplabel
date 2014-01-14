// PuP Controller Start //

// define angular module/app
    var formApp = angular.module('formApp', []);

    // create angular controller and pass in $scope and $http
    function formController($scope, $http) {

      //dummy data
      var creatorName = "whiteLabel";
      var creatorMSID = "112517";
      var pupSalt = "test1234salt";

      //create secure header
      var hash = CryptoJS.SHA256(creatorName + creatorMSID + pupSalt);
       $header = hash.toString(CryptoJS.enc.Base64);
      console.log("header: " + $header);

      // create a blank object to hold our form information
      $scope.formData = {};

      // $scope will allow this to pass between controller and view
      $scope.formData = {
                  approvalRequired: '0',
                  creatorMediaSetIdentifier: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                  numOnlinePhotos: '1',
                  creatorName: 'wplabel',
                  expirationDate: '2016-11-30 09:55:54.0',
                  hasPrint: false,
                  adNumber: '1231231234',
      };

  // $scope.formData = {
                    // Either 0 or 1
//                 approvalRequired: '0', 
                    // Will be time stamp generated
//                 creatorMediaSetIdentifier: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                    // Number of Photos, 0 = max num of photos
//                 numOnlinePhotos: '1',
                    // Will be app id
//                 creatorName: 'wplabel',
                    // We are using exp date
//                 expirationDate: '2014-11-30 09:55:54.0',
                    // Not needed, only used for current testing purposes
//                 hasPrint: false,
                    // Will be replaced by new useful ID, needs to be unique
//                 adNumber: '1231231234',
  // 
  // };

      // process the form
      $scope.processForm = function() {
        console.log('start pup');
        $http({
              method  : 'POST',
              // QA SSA PUP
              //url     : 'http://uploadtest.digitalink.com/photo-uploader/api/createMediaSet',
              // PROD SSA PUP
              url     : 'https://upload.washingtonpost.com/photo-uploader/api/createMediaSet',
              data    : $.param($scope.formData),  // pass in data as strings
              headers : { 'Content-Type': 'application/x-www-form-urlencoded'},  // set the headers so angular passing info as form data (not request payload)
              headers : $header  // set the headers so angular passing info as form data (not request payload)
          })
          .success(function(data) {
              console.log(data);
              console.log('success');

              if (!data.success) {
                // if not successful, bind errors to error variables, MediaSetID is the only thing we need to get back, is the only thing we get back?
                 $scope.mediaSetId = 'Null';
              } else {
                // if successful, bind success message to message
                  $scope.message = data.message;
                  console.log('no data error');
              }
          })
          .error(function(data, status, headers, config) {
            console.log('no post error')
          })

          $scope.pup = {
            pupData : {
                        mediasetid: '111111111111111111111111111111',
                      }
          };
          // This will be the posts returned media set id
          // $scope.mediaSetId = data;

        };
    } 
