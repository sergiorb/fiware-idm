// Permission model

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Permission',
    { id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, name: {
        type: DataTypes.STRING(255), // + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci',
        validate: {
            notEmpty: {msg: "error_empty_name"}
        }
    }, description: {
        type: DataTypes.TEXT(), // + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci',
        validate: {
            notEmpty: {msg: "error_empty_description"}
        }
    }, is_internal: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }, action: {
        type: DataTypes.STRING(255) // + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci'
    }, resource: {
        type: DataTypes.STRING(255) // + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci'
    }, xml: {
        type: DataTypes.TEXT() // + ' CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci'
    }
    }, {
        tableName: 'permission',
        timestamps: false,
        underscored: true,
    }
  );
}
