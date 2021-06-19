import { Router } from 'express';
import { deleteTask, getTask, getTasks, getTasksCount, saveTask, updateTask } from '../controllers/tasks'

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 */
router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *     summary: Get total tasks counter
 *     tags: [Tasks]
 */
router.get('/tasks/count', getTasksCount)

/**
 * @swagger
 * /task:
 *  get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 */
router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /task:
 *  post:
 *     summary: Save a new task
 *     tags: [Tasks]
 */
router.post('/tasks', saveTask) // create a new task

/**
 * @swagger
 * /task:
 *  delete:
 *     summary: Delete a task by id
 *     tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /task:
 *  put:
 *     summary: Upsate a task by id
 *     tags: [Tasks]
 */
router.put('/tasks/:id', updateTask) // actualice a task

export default router