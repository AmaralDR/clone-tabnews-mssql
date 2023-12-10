import query from "../../../../infra/database";

async function handleStatus(req, res) {
 const [row] =  await query("SELECT @@MAX_CONNECTIONS max_connections, @@version version_complete, SERVERPROPERTY ('ProductMajorVersion') version;");
 
 const output = {
  update_at: new Date(),
  dependencies: {
    database: {
      max_connections: row.max_connections,
      version: row.version,
    }
  }

 }
   res.status(200).json(output)
}

export default handleStatus;
