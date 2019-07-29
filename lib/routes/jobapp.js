const { Router }  = require('express');
const Jobapp = require('../models/Jobapp');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { url, title } = req.body;
    Jobapp
      .create({ url, title })
      .then(jobapp => res.send(jobapp))
      .catch(next);
  })
;
