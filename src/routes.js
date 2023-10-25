import { Router } from 'express';
import { libro } from './controller.js';

export const router = Router();

router.get('/libro', libro.getAll);
router.post('/libro', libro.add);
router.get('/libro/:id', libro.getOne);
router.delete('/libro/:isbn', libro.delete);
router.put('/libro/:isbn', libro.update);

