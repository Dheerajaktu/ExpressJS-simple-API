const models = require('../models');

/*-----------for adding a new Candidate------------*/
exports.addNewCandidate = (req, res) => {
    if (req.body && req.body.name && req.body.email) {
        const data = {
            name: req.body.name,
            email: req.body.email,
        }
        return models.candidate.create(data).then((response) => {
            res.json({ status: 'success', data: response })
        }).catch((error) => {
            res.json({ status: 'error', message: error })
        })
    } else {
        res.json({ status: 'error', message: 'Error while inserting new candidate' })
    }
}

