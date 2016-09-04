const Mentors = function($http, $q) {
  const url = 'localhost:1337/#/';

  const service = {
    
    fetchLocalMentors: (location) => {
      return $http({
        method: 'GET',
        url: url + '/mentor/' + location
      })
      .then((resp, err) => {
        if(err) {
          console.log(err);
          return err;
        } else {
          return resp.data;
        }
      })
      .catch((err) => {
        console.log("Error in fetchLocalMentors in mentors service");
        return err;
      });
    },
    test: () => {
      const mentors = [{
        id: 1,
        fullname:'Ryan',
        type: 'Vet',
        industry: 'Taco'
      },
      {
        id: 2,
        fullname:'Ryan',
        type: 'Vet',
        industry: 'Taco'
      }
      ];
      return mentors;
    }
  };

  return service;
};

Mentors.$inject = ['$http', '$q'];

export default Mentors;
