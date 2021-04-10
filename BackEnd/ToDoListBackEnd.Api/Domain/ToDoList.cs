using System.Collections.Generic;
using ToDoListBackEnd.Api.Domain;

namespace ToDoListBackEnd.Api.Domain
{
    public class ToDoList
    {
        public int ListId {get; private set;}
        public string ListName {get; private set;}

        public ToDoList(int listId, string listName){
            ListId = listId;
            ListName = listName;
        }
    }
}