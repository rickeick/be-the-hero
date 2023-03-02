const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionControler');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;

/**Métodos HTTP:
 * GET: Buscar uma informação no Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deleta uma informação no Back-end
*/

/**Tipos de Parâmetros:
 * Query: Parâmetros nomeados, enviados na rota após "?" usado para filtro e paginação
 * Route Params: Parâmetros utilizados para indentificar recursos
 * Body: Corpo da requisição usado para criar ou alterar recursos
 */
