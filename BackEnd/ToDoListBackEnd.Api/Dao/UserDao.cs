using ToDoListBackEnd.Api.Dao.Abstracts;
using MySql.Data.MySqlClient;
namespace ToDoListBackEnd.Api.Dao
{
    public class UserDao : ADao
    {
        public int GetUserId(string userName, string encryptedPass)
        {
            string sql = $"SELECT userId FROM Users Where Username={userName} AND EncryptedPass={encryptedPass};";
            MySqlCommand cmd = new MySqlCommand(sql, Connection);
            MySqlDataReader rdr = cmd.ExecuteReader();
            //if(rdr.RecordsAffected;
            while (rdr.Read())
            {
                return 0;
            }

            return 0;
        }
    }
}