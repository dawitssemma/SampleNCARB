﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestApi1.Models
{
  public class PersonModel
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string JobTitle { get; set; }
  }
}