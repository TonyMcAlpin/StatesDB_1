const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const statesController = require('../../controllers/statesController');

// Define your route handlers here
router.route('/')
    .get(statesController.getAllStates)
    .post(statesController.addState);

router.get('/:state/capital', statesController.getStateCapital);
router.get('/:state/nickname', statesController.getNickName);
router.get('/:state/population', statesController.getPopulation);
router.get('/:state/admission', statesController.getAdmission);
router.get('/:code', statesController.getState);
router.get('/:state/funfact', statesController.getRandomFunFact);

router.post('/:state/funfact', statesController.addFunFacts);
router.post('/:state/', statesController.addState);

// Define a middleware function to handle unmatched routes
const handle404 = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html')); // Send the HTML file with 404 status
};

// Add the middleware function at the end of your route handlers
router.use(handle404);

module.exports = router;
