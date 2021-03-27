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

        public void AddItemToList(int listId, int userId, string itemText, bool isCompleted){
            MySqlCommand cmd = new MySqlCommand("AddListItem", Connection);
            cmd.Parameters.Add(new MySqlParameter("lId", listId));
            cmd.Parameters.Add(new MySqlParameter("itemText", itemText));
            cmd.Parameters.Add(new MySqlParameter("isCompleted", isCompleted));
            cmd.Parameters.Add(new MySqlParameter("uId", userId));
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.ExecuteNonQuery();
        }
    }
}