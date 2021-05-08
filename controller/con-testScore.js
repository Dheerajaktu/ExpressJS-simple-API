const models = require('../models');

/*-----------Assigning Test Score for candidate------------*/
exports.assignTestScore = (req, res) => {
    if (req.body && req.body.firstScore && req.body.firstScore && req.body.thirdScore && req.body.score && req.body.candidateID) {
        let scoring = [];
        let sum = 0;
        scoring = [Number(req.body.firstScore), Number(req.body.firstScore), Number(req.body.thirdScore)];
        for (let i = 0; i <= scoring.length; i++) {
            sum = sum + scoring[i];
        }
        const data = {
            firstScore: req.body.firstScore,
            secondScore: req.body.secondScore,
            thirdScore: req.body.thirdScore,
            score: req.body.score,
            candidateID: req.body.candidateID,
            totalScore: sum
        }

        return models.testScore.create(data).then((response) => {
            res.json({ status: 'success', data: response })
        }).catch((error) => {
            res.json({ status: 'error', message: error })
        })
    } else {
        res.json({ status: 'error', message: 'Error while adding test score' })
    }
}


/*-----------fetching High Scoring candidate------------*/
exports.highestScoreCandidate = (req, res) => {

    const sql = `select candidateID from testScore where max(totalScore);`
    if (req.body) {
        return models.sequelize.query(sql)
            .then((response) => {
                if (response) {
                    return models.sequelize.query(`select name from Candidate where candidateID=${response[0].candidateID}`)
                        .then((data) => {
                            res.json({ status: 'Highest Score candidateName', data: data[0].name })
                        })
                }
                else {
                    res.json({ status: 'error', message: 'Error while adding test score' })
                }

            }).catch((error) => {
                res.json({ status: 'error', message: error })
            })

    } else {
        res.json({ status: 'error', message: 'Error while fetching highest score candidate' })
    }
}
