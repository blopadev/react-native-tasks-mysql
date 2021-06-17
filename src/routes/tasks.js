import { Router } from 'express';
import {getTasks} from '../controllers/tasks'

const router = Router();

router.get('/tasks', getTasks)

router.get('/tasks/count')

router.get('/tasks/:id')

router.post('/tasks') // create a new task

router.delete('/tasks/:id')

router.put('/tasks/:id') // actualice a task

export default router