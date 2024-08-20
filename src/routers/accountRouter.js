import express from 'express'
import createController from '../controllers/Account/createController.js'
import listaController from '../controllers/Account/listaController.js'
import puxaIdController from '../controllers/Account/puxaIdController.js'
import putController from '../controllers/Account/putController.js'
import deleteController from '../controllers/Account/deleteController.js'


const router = express.Router()

router.post('/', createController )
router.get('/list', listaController )
router.get('/:id', puxaIdController )
router.put('/:id', putController )
router.delete('/:id', deleteController)

export default router