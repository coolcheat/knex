// MySQL2 Client
// -------
//const Client_MySQL = require('../mysql');
const Transaction = require('./transaction');


const Client_MySQL = require('../mysql/index');
class Client_MariaDB extends Client_MySQL {
  driverName = 'mariadb';
  _driver () {
    return require('mariadb/callback');
  }
  validateConnection (connection) {
    return connection.isValid();
  }
};
module.exports = Client_MariaDB;

/*
// Always initialize with the "QueryBuilder" and "QueryCompiler"
// objects, which extend the base 'lib/query/builder' and
// 'lib/query/compiler', respectively.
class Client_MySQL2 extends Client_MySQL {
  transaction() {
    return new Transaction(this, ...arguments);
  }

  _driver() {
    return require('mysql2');
  }
  validateConnection(connection) {
    if (connection._fatalError) {
      return false;
    }
    return true;
  }
}

Object.assign(Client_MySQL2.prototype, {
  // The "dialect", for reference elsewhere.
  driverName: 'mysql2',
});

module.exports = Client_MySQL2;
*/
