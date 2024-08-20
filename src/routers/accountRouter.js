import express from 'express'
import createController from '../controllers/Account/createController'
import listaController from '../controllers/Account/listaController'
import puxaIdController from '../controllers/Account/puxaIdController'
import putController from '../controllers/Account/putController'
import deleteController from '../controllers/Account/deleteController'


const router = express.Router()

router.post('/', createController )
router.get('/list', listaController )
router.get('/:id', puxaIdController )
router.put('/:id', putController )
router.delete('/:id', deleteController)

export default router