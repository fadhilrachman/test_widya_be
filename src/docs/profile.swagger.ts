/**
 * @openapi
 * /me:
 *   get:
 *     tags:
 *       - Profile
 *     responses:
 *       200:
 *         description: List of users with pagination
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
 *                       email:
 *                         type: string
 *                         example: dimasbaks@gmail.com
 */
