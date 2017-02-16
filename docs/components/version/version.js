'use strict';

angular.module('golosuy.version', [
  'golosuy.version.interpolate-filter',
  'golosuy.version.version-directive'
])

.value('version', '1.0')

.constant('API_END_POINT','http://api.esteem.ws:8080')

.service('APIs', ['$http', '$rootScope', 'API_END_POINT', function ($http, $rootScope, API_END_POINT) {
  'use strict';
  return {
    addPoll: function(poll) {
      return $http.post(API_END_POINT+"/api/polls", {title: poll.title, description: poll.description, choices: poll.choices, preferences: poll.preferences, email: poll.email, chain: "golos"});
    },
    getPoll: function(id) {
      return $http.get(API_END_POINT+"/api/poll/"+id);
    }
  };
}]);
