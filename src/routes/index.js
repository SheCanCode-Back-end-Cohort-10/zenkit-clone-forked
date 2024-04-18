import taskRouter from './task.routes.js';
import tagRouter from './tag.routes.js';
import express from 'express';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();

router.use('/tasks', taskRouter);
router.use('/tags', tagRouter);

export default router;
