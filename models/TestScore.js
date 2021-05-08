module.exports = (sequelize, Sequelize) => {

    const TestScore = sequelize.define('TestScore', {
        scoreID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: `scoreID`
        },
        firstScore: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: `firstScore`
        },
        secondScore: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: `secondScore`
        },
        thirdScore: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: `thirdScore`
        },
        score: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: `score`
        },
        totalScore: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: `totalScore`
        },
        candidateID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: `candidateID`
        },
    },
        {
            timestamps: false
        });
    TestScore.associate = models => {
        TestScore.belongsTo(models.Candidate, { foreignKey: `candidateID` });
    };
    return TestScore;
};
