const Pool = require('pg').Pool

const pg_conn = new Pool({
    user: 'cyzbszsibcdsfl',
    host: 'ec2-3-219-19-205.compute-1.amazonaws.com',
    database:'d3h724or1vo1l7',
    password:'a1cd4764ecde85747166e09816f2316e717c6234e53bda505f0984ccb3f0ce5b',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
})


module.exports = pg_conn