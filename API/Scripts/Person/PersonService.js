//
app.service("PersonService", function ($http) {
  this.getPerson = function () {
    return $http.get("api/Person")
  }

  this.getPeople = function () {
    return $http.get("api/GetPeople")
  }

  this.updatePerson = function (person) {

    return $http(
      {
        method: 'UpdatePerson',
        data: person,
        url: 'api/Person'
      });
  }   
});   