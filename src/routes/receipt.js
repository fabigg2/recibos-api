const { Router } = require('express');
const { check } = require('express-validator');
const { expressValidatorErrors } = require('../middlewares/globals');
const { reciptController } = require('../controllers/receipt');

const receiptRoutes = Router();

/**
 * @openapi
 * tags:
 *  - name: Receipts
 *    description: Everything about the receipts
 */

/**
 * @openapi
 * /receipt:
 *   post:
 *     summary: Create a receipt
 *     tags:
 *      - Receipts
 *     requestBody: 
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/Receipt'
 *     responses:
 *       201:
 *         description: Receipt created successfuly.
 *       500:
 *         description: server error 
 */

receiptRoutes.post('/',
    [
        check('price', 'price is required').notEmpty(),
        check('owner', 'owner is required').notEmpty(),
        expressValidatorErrors,
    ],
    reciptController.createReceipt);

/**
 * @openapi
 * /recept:
 *   get:
 *     summary: Find all the receipts
 *     tags: 
 *      - Receipts
 *     responses:
 *       200:
 *         description: User save successfuly.
 *       500:
 *         description: server error 
 */
receiptRoutes.get('/',
    reciptController.getAll);


/**
 * @openapi
 * /receipt/{consetutive}:
 *   get:
 *     summary: Find one receipt by consetutive
 *     tags: 
 *      - Receipts
 *     parameters:
 *      - in: path
 *        name: consetutive
 *        required: true
 *     responses:
 *       200:
 *         description: User save successfuly.
 *       500:
 *         description: server error 
 */
receiptRoutes.get('/:consecutive',
    reciptController.getOne);

    /**
 * @openapi
 * /receipt/{consetutive}:
 *   put:
 *     summary: Update a receipt
 *     tags:
 *      - Receipts
 *     parameters:
 *      - in: path
 *        name: consetutive
 *        required: true
 *     requestBody: 
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/Receipt'
 *     responses:
 *       200:
 *         description: Receipt updated successfuly.
 *       500:
 *         description: server error 
 */
receiptRoutes.put('/:consecutive',
    reciptController.update);


/**
 * @openapi
 * /receipt/{consetutive}:
 *   get:
 *     summary: Find one receipt by consetutive
 *     tags: 
 *      - Receipts
 *     parameters:
 *      - in: path
 *        name: consetutive
 *        required: true
 *     responses:
 *       200:
 *         description: User save successfuly.
 *       500:
 *         description: server error 
 */
receiptRoutes.delete('/:consecutive',
    reciptController.remove);


module.exports = { receiptRoutes };
