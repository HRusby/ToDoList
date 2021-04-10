using System;
using System.Text.Json;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
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

        public ToDoListController(ILogger<ToDoListController> logger, IConfiguration configuration)
        {
            _logger = logger;
            string connString = configuration.GetValue<string>("ConnectionStrings:ToDoList");
            Dao = new ToDoListDao(connString);
        }

        [HttpPost]
        [Route("GetAllListsForUser")]
        public IEnumerable<ToDoList> GetAllListsForUser([FromBody] int userId)
        {
            return Dao.GetAllLists(userId);
        }

        [HttpPost]
        [Route("GetAllListItemsForListId")]
        public IEnumerable<ListItem> GetAllListItemsForListId([FromBody] int listId)
        {
            return Dao.GetAllItemsForList(listId);
        }

        [HttpPost]
        [Route("InsertItemForList")]
        public int InsertItemForList([FromBody]JsonElement data)
        {
            int listId = Convert.ToInt32(data.GetProperty("listId").ToString());
            int userId = Convert.ToInt32(data.GetProperty("userId").ToString());
            string text = data.GetProperty("text").ToString();
            bool isCompleted = Convert.ToBoolean(data.GetProperty("isCompleted").ToString());
            return Dao.AddItemToList (listId, userId, text, isCompleted);
        }

        [HttpPost]
        [Route("UpdateSpecificListItem")]
        public void UpdateSpecificListItem(ListItem item){
            Dao.UpdateSpecificListItem(item);
        }

        [HttpPost]
        [Route("UpdateListItemSet")]
        public void UpdateListItemSet(List<ListItem> items){
            foreach(ListItem item in items){
                Dao.UpdateSpecificListItem(item);
            }
        }

        [HttpPost]
        [Route("RemoveCompletedItemsForList")]
        public int RemoveCompletedItemsForList(int listId){
            // Returns number of rows deleted
            return Dao.DeleteCompletedItemsForList(listId);
        }

        [HttpPost]
        [Route("DeleteListItem")]
        public int DeleteListItem([FromBody]JsonElement data){
            int listId = Convert.ToInt32(data.GetProperty("listId").ToString());
            int itemId = Convert.ToInt32(data.GetProperty("itemId").ToString());
            // Returns number of rows deleted (should always be 1)
            return Dao.DeleteListItem(listId, itemId);
        }

        [HttpPost]
        [Route("AddNewList")]
        public ToDoList AddNewList([FromBody]JsonElement data){
            string listName = data.GetProperty("listName").ToString();
            int userId = Convert.ToInt32(data.GetProperty("userId").ToString());
            return Dao.AddNewList(listName, userId);
        }

        [HttpPost]
        [Route("DeleteList")]
        public int DeleteList([FromBody]JsonElement data){
            int listId = Convert.ToInt32(data.GetProperty("listId").ToString());
            int userId = Convert.ToInt32(data.GetProperty("userId").ToString());
            return Dao.DeleteList(listId, userId);
        }
    }
}
