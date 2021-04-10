using System;
using MySql.Data.MySqlClient;

namespace ToDoListBackEnd.Api.Dao.Abstracts
{
    public class ADao : IDisposable
    {
        protected MySqlConnection Connection {get;private set;}
        public ADao(string connectionString)
        {
            Connection = new MySqlConnection(connectionString);
            Connection.Open();
        }

        public void Dispose()
        {
            Connection.Close();
        }
    }
}