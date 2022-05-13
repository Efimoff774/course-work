import Router from 'express'
import typeController from '../controllers/typeController.js'
const router = new Router()
import checkRole from '../middleware/checkRoleMiddleware.js'


router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.delete('/:id', checkRole("ADMIN"), typeController.delete);

export default router