using System.Collections.Generic;
using ToDoListBackEnd.Api.Domain;
using ToDoListBackEnd.Api.Dao.Abstracts;
using MySql.Data.MySqlClient;
using MySql.Data;
using System;
using System.Linq;
using System.Text;

using System.Data;

namespace ToDoListBackEnd.Api.Dao
{
    public class ToDoListDao : ADao
    {
        // Return all lists for a given user
        public List<ToDoList> GetAllLists(int userId)
        {
            List<ToDoList> results = new List<ToDoList>();
            string sql = $"SELECT ListId, RelatedGroup, ListName FROM Lists WHERE UserId = {userId}";
            MySqlCommand cmd = new MySqlCommand(sql, Connection);
            MySqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                ToDoList list = new ToDoList(
                    rdr.GetInt32("ListId"),
                    rdr.GetString("ListName"));
                results.Add(list);
            }

            return results;
        }

        // Return all ListItems for a given list
        public List<ListItem> GetAllItemsForList(int listId)
        {
            List<ListItem> results = new List<ListItem>();
            string sql = $"SELECT ItemId, Text, Completed FROM ListItems WHERE ListId = {listId};";
            MySqlCommand cmd = new MySqlCommand(sql, Connection);
            MySqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                ListItem item = new ListItem(
                    rdr.GetInt32("ItemId"),
                    rdr.GetString("Text"),
                    rdr.GetBoolean("Completed"));
                results.Add(item);
            }

            return results;
        }

        // Add a new item to a specific list
        public int AddItemToList(int listId, int userId, string itemText, bool isCompleted){
            using(MySqlCommand cmd = new MySqlCommand("AddListItem", Connection)){
                cmd.CommandType = CommandType.StoredProcedure;
                MySqlParameter generatedId = new MySqlParameter("generatedId", MySqlDbType.Int32);
                generatedId.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(new MySqlParameter("lId", listId));
                cmd.Parameters.Add(new MySqlParameter("itemText", itemText));
                cmd.Parameters.Add(new MySqlParameter("isCompleted", isCompleted));
                cmd.Parameters.Add(new MySqlParameter("uId", userId));
                cmd.Parameters.Add(generatedId);
                cmd.ExecuteNonQuery();
                return Convert.ToInt32(generatedId.Value);
            }
        }

        // Update the ItemText/IsCompleted values of a specific listItem
        public void UpdateSpecificListItem(ListItem item){
            using(MySqlCommand cmd = new MySqlCommand("UpdateSpecificListItem", Connection)){
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id", item.Id);
                cmd.Parameters.AddWithValue("itemText", item.Text);
                cmd.Parameters.AddWithValue("isCompleted", item.IsCompleted);
                int rows = cmd.ExecuteNonQuery();
            }            
        }

        // Delete all CompletedItems from a specific list
        public int DeleteCompletedItemsForList(int listId){
            using(MySqlCommand cmd = new MySqlCommand("DeleteCompletedItemsForList", Connection)){
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("listId", listId);
                return cmd.ExecuteNonQuery();
            }
        }

        // Delete a specific item from a specific list
        public int DeleteListItem(int listId, int itemId){
            using(MySqlCommand cmd = new MySqlCommand("DeleteListItem", Connection)){
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("$listId", listId);
                cmd.Parameters.AddWithValue("$itemId", itemId);
                return cmd.ExecuteNonQuery();
            }
        }

        // Adds a new List to the db and returns a corresponding object
        public ToDoList AddNewList(string listName, int userId){
            using(MySqlCommand cmd = new MySqlCommand("AddNewList", Connection)){
                cmd.CommandType = CommandType.StoredProcedure;
                MySqlParameter generatedId = new MySqlParameter("$generatedId", MySqlDbType.Int32);
                generatedId.Direction = ParameterDirection.Output;
                cmd.Parameters.AddWithValue("$listName", listName);
                cmd.Parameters.AddWithValue("$userId", userId);
                cmd.Parameters.Add(generatedId);
                cmd.ExecuteNonQuery();
                return new ToDoList(Convert.ToInt32(generatedId.Value), listName);
            }
        }

        // Deletes a list (and child ToDoItems) assuming the list belongs to the user
        public int DeleteList(int listId, int userId){
            using(MySqlCommand cmd = new MySqlCommand("DeleteList", Connection)){
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("$listId", listId);
                cmd.Parameters.AddWithValue("$userId", userId);
                return cmd.ExecuteNonQuery();
            }
        }
    }
}