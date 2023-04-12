const mysqll = require("mysql")


class CandyDB{
    static connect(){
        const connection = mysqll.createConnection({
          host : "localhost",
          user : "root", 
          password : "",
          database: "candy" 
        })
        connection.connect()
    }

    static getCadies(callback){
        const connection = CandyDB.connect()
        let sql = "select * from candy"
        let query = connection.query(slq,function(err,results,fields){
            if(err) throw err
            callback(rsults)

        })
        console.log(query.sql)
        connection.end()
    }


}

module.exports = CandyDB