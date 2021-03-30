using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ToDoListBackEnd.Api.Dao;
using ToDoListBackEnd.Api.Domain;

namespace ToDoListBackEnd.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : ControllerBase
    {
        private readonly ILogger<ToDoListController> _logger;

        private readonly ToDoListDao Dao;

        public ToDoListController(ILogger<ToDoListController> logger)
        {
            _logger = logger;
            Dao = new ToDoListDao();
        }

        [HttpGet]
        public String Test()
        {
            return "Test";
        }

        [HttpGet]
        [Route("GetAllLists")]
        public IEnumerable<ToDoList> GetAllLists()
        {
            return Dao.GetAllLists(1);
        }

        [HttpPost]
        [Route("GetAllListItemsForListId")]
        public IEnumerable<ListItem>
        GetAllListItemsForListId([FromBody] int listId)
        {
            return Dao.GetAllItemsForList(listId);
        }

        [HttpPost]
        [Route("InsertItemForList")]
        public void InsertItemForList(
            int listId,
            int userId,
            string text,
            bool isComplete
        )
        {
            Dao.AddItemToList (listId, userId, text, isComplete);
        }
    }
}
