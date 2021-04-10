using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ToDoListBackEnd.Api.Domain;
using ToDoListBackEnd.Api.Dao;
namespace ToDoListBackEnd.Api.Controllers
{
    [ApiController]
    [Route("User")]
    public class UserController: ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        
        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
            //Dao = new ToDoListDao();
        }

        [HttpPost]
        public bool LogIn(string userName, string encryptedPass){
            return true;
        }
    }
}