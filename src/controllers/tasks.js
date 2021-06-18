import { connect } from "../database";

export const getTasks = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query('SELECT * FROM tasks');
  console.log(rows);
  res.send('Hello World');
}

export const getTask = (req, res) => {
  res.send('Hello World')
}

export const getTasksCount = (req, res) => {
  res.send('Hello World')
}

export const saveTask = (req, res) => {
  res.send('Hello World')
}

export const deleteTask = (req, res) => {
  res.send('Hello World')
}

export const updateTask = (req, res) => {
  res.send('Hello World')
}

