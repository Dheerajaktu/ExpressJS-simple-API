module.exports = (sequelize, Sequelize) => {

    const Candidate = sequelize.define("Candidate", {

        candidateID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: `candidateID`
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            field: `name`
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            field: `email`
        },
    },
        {
            timestamps: false
        });
    Candidate.associate = models => {
        Candidate.belongsTo(models.TestScore, { foreignKey: `candidateID` });
    };
    return Candidate;
};
