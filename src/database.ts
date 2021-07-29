import { getConnectionManager } from "typeorm";

export default async function connect () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url: "postgres://postgres:1995@host:5432/repo_provas",
    entities: ["src/entities/*.ts"]
  });
  await connection.connect();
  return connection;
}