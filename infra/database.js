import sql from 'mssql';
async function query(queryString) {
  const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.MSSQL_SA_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_HOST,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
  }
  let pool = await sql.connect(sqlConfig)
  let result1 = await pool.request()
    .query(queryString)

  await pool.close();
  return result1.recordset;


}

export default query;
