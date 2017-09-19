using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using TestApi1.Models;

namespace TestApi1.Controllers
{
  public class PersonController : ApiController
  {

    private List<PersonModel> people = new List<PersonModel>();

    [Route("api/people")]
    [HttpGet]
    public IEnumerable<PersonModel> GetPeople()
    {
      SetPeopleData();

      return people;
    }

    [Route("api/UpdatePerson")]
    [HttpPost]
    public bool UpdatePerson(PersonModel model)
    {
      if(model == null)
      {
        throw new ArgumentNullException("people");
      }
      
      Console.WriteLine("Person info updated");
      Console.WriteLine("First Name: " + model.FirstName);
      Console.WriteLine("Last Name: " + model.LastName);
      Console.WriteLine("Job Title: " + model.JobTitle);

      return true;
    }
    
    private void SetPeopleData()
    {
      PersonModel model1 = new PersonModel()
      {
        Id=1,
        FirstName = "John",
        LastName = "Doe",
        JobTitle = "Software Engineer"
      };

      PersonModel model2 = new PersonModel()
      {
        Id=2,
        FirstName = "Mark",
        LastName = "Wood",
        JobTitle = "System Engineer"
      };
      
      people.Add(model1);
      people.Add(model2);
    }

  }
}