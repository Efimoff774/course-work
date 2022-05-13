import Router from 'express'
const router = new Router()
import brandController from '../controllers/brandController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)
router.delete('/:id', checkRole("ADMIN"), brandController.delete);

export default router