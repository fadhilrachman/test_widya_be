/**
 * @openapi
 * /admin/vehicle:
 *   get:
 *     tags:
 *       - Vehicle
 *     parameters:
 *       - name: page
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: perPage
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - name: search
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 550e8400-e29b-41d4-a716-446655440000
 *                       name:
 *                         type: string
 *                         example: Audi
 *                       lastStatus:
 *                         type: string
 *                         enum: [idle, trip, stopped]
 *                         example: stopped
 *                       numberPlate:
 *                         type: string
 *                         example: Z20319EA
 *                       user:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: Dimas Baks
 *                           email:
 *                             type: string
 *                             example: dimasbaks@gmail.com
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     totalData:
 *                       type: integer
 *                       example: 100
 *                     totalPages:
 *                       type: integer
 *                       example: 10
 *                     currentPage:
 *                       type: integer
 *                       example: 1
 */

/**
 * @openapi
 * /admin/vehicle:
 *   post:
 *     tags:
 *       - Vehicle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - numberPlate
 *             properties:
 *               name:
 *                 type: string
 *                 example: Audi R8
 *               numberPlate:
 *                 type: string
 *                 example: Z0213123EA
 *               userId:
 *                 type: string
 *                 example: 550e8400-e29b-41d4-a716-446655440000
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Succes create vehicle
 */

/**
 * @openapi
 * /admin/vehicle/{id}:
 *   get:
 *     tags:
 *       - Vehicle
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 550e8400-e29b-41d4-a716-446655440000
 *                       name:
 *                         type: string
 *                         example: Audi
 *                       lastStatus:
 *                         type: string
 *                         enum: [idle, trip, stopped]
 *                         example: stopped
 *                       numberPlate:
 *                         type: string
 *                         example: Z20319EA
 *                       user:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: Dimas Baks
 *                           email:
 *                             type: string
 *                             example: dimasbaks@gmail.com
 */

/**
 * @openapi
 * /admin/vehicle/{id}/logActivity:
 *   get:
 *     tags:
 *       - Vehicle
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 550e8400-e29b-41d4-a716-446655440000
 *                       latitude:
 *                         type: string
 *                         example: -123123213
 *                       longitude:
 *                         type: string
 *                         example: 133r31.1433
 *                       status:
 *                         type: string
 *                         enum: [idle, trip, stopped]
 *                         example: stopped
 *                       date:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-08-22T13:45:30Z
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     totalData:
 *                       type: integer
 *                       example: 100
 *                     totalPages:
 *                       type: integer
 *                       example: 10
 *                     currentPage:
 *                       type: integer
 *                       example: 1
 */

/**
 * @openapi
 * /admin/vehicle/{id}:
 *   put:
 *     tags:
 *       - Vehicle
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - numberPlate
 *             properties:
 *               name:
 *                 type: string
 *                 example: Audi R8
 *               numberPlate:
 *                 type: string
 *                 example: Z0213123EA
 *               userId:
 *                 type: string
 *                 example: 550e8400-e29b-41d4-a716-446655440000
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Succes update vehicle
 */

/**
 * @openapi
 * /admin/vehicle/{id}:
 *   delete:
 *     tags:
 *       - Vehicle
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Succes delete vehicle
 */

/**
 * @openapi
 * /driver/vehicle:
 *   get:
 *     tags:
 *       - Vehicle
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 550e8400-e29b-41d4-a716-446655440000
 *                       name:
 *                         type: string
 *                         example: Audi
 *                       lastStatus:
 *                         type: string
 *                         enum: [idle, trip, stopped]
 *                         example: stopped
 *                       numberPlate:
 *                         type: string
 *                         example: Z20319EA
 */

/**
 * @openapi
 * /driver/vehicle/logActivity:
 *   get:
 *     tags:
 *       - Vehicle
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 550e8400-e29b-41d4-a716-446655440000
 *                       latitude:
 *                         type: string
 *                         example: -123123213
 *                       longitude:
 *                         type: string
 *                         example: 133r31.1433
 *                       status:
 *                         type: string
 *                         enum: [idle, trip, stopped]
 *                         example: stopped
 *                       date:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-08-22T13:45:30Z
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     totalData:
 *                       type: integer
 *                       example: 100
 *                     totalPages:
 *                       type: integer
 *                       example: 10
 *                     currentPage:
 *                       type: integer
 *                       example: 1
 */

/**
 * @openapi
 * /driver/vehicle/updateStatus:
 *   patch:
 *     tags:
 *       - Vehicle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - latitude
 *               - longitude
 *             properties:
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-08-22T13:45:30Z
 *               status:
 *                  type: string
 *                  enum: [idle, trip, stopped]
 *                  example: stopped
 *               latitude:
 *                  type: string
 *                  example: -6.2109224
 *               longitude:
 *                  type: string
 *                  example: 106.8160716,17
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Succes update status
 */
