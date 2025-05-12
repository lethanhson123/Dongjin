namespace HelperMySQL
{
	public static class MySQLHelper
	{
        public static string ExecuteNonQuery(string connectionString, string sql, params MySqlParameter[] parameters)
        {
            string result = "";
            try
            {

                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    using (MySqlCommand cmd = new MySqlCommand(sql, conn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddRange(parameters);
                        conn.Open();
                        result = cmd.ExecuteNonQuery().ToString();                       
                    }
                }
            }
            catch (Exception e)
            {
                result = e.Message;
            }
            return result;
        }
        public static async Task<string> ExecuteNonQueryAsync(string connectionString, string sql, params MySqlParameter[] parameters)
        {
            string result = "";
            try
            {
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    using (MySqlCommand cmd = new MySqlCommand(sql, conn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddRange(parameters);
                        await conn.OpenAsync();
                        int result01 = await cmd.ExecuteNonQueryAsync();
                        result = result01.ToString();
                    }
                }
            }
            catch (Exception e)
            {
                result = e.Message;
            }
            return result;
        }
        public static DataSet FillDataSetBySQL(string connectionString, string sql, params MySqlParameter[] parameters)
        {
            DataSet ds = new DataSet();
            string result = "";
            try
            {
                MySqlConnection conn = new MySqlConnection(connectionString);
                using (MySqlCommand cmd = new MySqlCommand(sql, conn))
                {
                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.AddRange(parameters);
                    MySqlDataAdapter adapter = new MySqlDataAdapter();
                    adapter.SelectCommand = cmd;
                    conn.Open();
                    adapter.Fill(ds);
                }
            }
            catch (Exception e)
            {
                result = e.Message;
            }
            return ds;
        }
        public static async Task<DataSet> FillDataSetBySQLAsync(string connectionString, string sql, params MySqlParameter[] parameters)
        {
            DataSet ds = new DataSet();
            string result = "";
            try
            {
                MySqlConnection conn = new MySqlConnection(connectionString);
                using (MySqlCommand cmd = new MySqlCommand(sql, conn))
                {
                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.AddRange(parameters);
                    MySqlDataAdapter adapter = new MySqlDataAdapter();
                    adapter.SelectCommand = cmd;
                    await conn.OpenAsync();
                    adapter.Fill(ds);
                }
            }
            catch (Exception e)
            {
                result = e.Message;
            }
            return ds;
        }
        public static DataSet FillDataSet(string connectionString, string storedProcedureName, params MySqlParameter[] parameters)
		{
			DataSet ds = new DataSet();
			string result = "";
			try
			{
                MySqlConnection conn = new MySqlConnection(connectionString);
				using (MySqlCommand cmd = new MySqlCommand(storedProcedureName, conn))
				{
					cmd.CommandType = CommandType.StoredProcedure;
					cmd.Parameters.AddRange(parameters);
                    MySqlDataAdapter adapter = new MySqlDataAdapter();
					adapter.SelectCommand = cmd;
					conn.Open();
					adapter.Fill(ds);
				}
			}
			catch (Exception e)
			{
				result = e.Message;
			}
			return ds;
		}

		public static async Task<DataSet> FillDataSetAsync(string connectionString, string storedProcedureName, params MySqlParameter[] parameters)
		{
			DataSet ds = new DataSet();
			string result = "";
			try
			{
                MySqlConnection conn = new MySqlConnection(connectionString);
				using (MySqlCommand cmd = new MySqlCommand(storedProcedureName, conn))
				{
					cmd.CommandType = CommandType.StoredProcedure;
					cmd.Parameters.AddRange(parameters);
                    MySqlDataAdapter adapter = new MySqlDataAdapter();
					adapter.SelectCommand = cmd;
					await conn.OpenAsync();
					adapter.Fill(ds);
				}
			}
			catch (Exception e)
			{
				result = e.Message;
			}
			return ds;
		}
	}
}
