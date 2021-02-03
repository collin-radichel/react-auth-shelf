const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT * FROM "item"
    WHERE "user_id" = $1;
  `
  pool.query(queryText, [req.user.id])
    .then((result) => {
      console.log(req.user)
      res.send(result.rows)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',rejectUnauthenticated, (req, res) => {
  console.log('in POST with req.body:', req.body);
  const newItem = req.body;
  const query = `INSERT INTO "item" ("description", "image_url", "user_id")
                  VALUES ($1, $2, $3);`

  pool.query(query, [newItem.description, newItem.image_url, req.user.id])
  .then((result) => {
    res.send(result.rows)
  })
  .catch((error)=>{
    console.log('error in POST item:', error);
    res.sendStatus(500);
  })
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  queryText = `
    DELETE FROM "item"
    WHERE id = $1;
  `
  pool.query(queryText, [id])
    .then((result) => {
      console.log(result)
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
