// 'use strict';

if (!global.hasOwnProperty('db')) {
	var Sequelize = require('sequelize')
		, sequelize = null

	if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
		// the application is executed on Heroku ... use the postgres database
		sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
			dialect: 'postgres',
			protocol: 'postgres',
			port: match[4],
			host: match[3],
			logging: true //false
		})
	} else { // Local Machine
		sequelize = new Sequelize(config.database, config.username, config.password, config);
	}

	global.db = {
		Sequelize: Sequelize,
		sequelize: sequelize,
		User: sequelize.import(__dirname + '/user')
		// add your other models here
	}

	/*
	  Associations can be defined here. E.g. like this:
	  global.db.User.hasMany(global.db.SomethingElse)
	*/
}

module.exports = global.db