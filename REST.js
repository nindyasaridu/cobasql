var mysql   = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

    router.get("/email",function(req,res){
        console.log("bisabajingan");
        var query = "SELECT * FROM ??";
        var table = ["email"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    // router.get("/email/:user_id",function(req,res){
    //     var query = "SELECT * FROM ?? WHERE ??=?";
    //     var table = ["user_login","user_id",req.params.user_id];
    //     query = mysql.format(query,table);
    //     connection.query(query,function(err,rows){
    //         if(err) {
    //             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //         } else {
    //             res.json({"Error" : false, "Message" : "Success", "Users" : rows});
    //         }
    //     });
    // });

    router.get("/email/from/:email_from",function(req,res){
        console.log("bisa");
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["email","email_from",req.params.email_from];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.get("/email/to/:email_to",function(req,res){
        console.log("bisatae");
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["email","email_to",req.params.email_to];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.get("/email/id/:email_id",function(req,res){
        console.log("bisajing");
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["email","email_id",req.params.email_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.post("/email",function(req,res){
        console.log("bisa insert");
        var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
        var table = ["email","email_from","email_to","message",req.body.email_dari,req.body.email_ke,req.body.pesan];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Added !"});
            }
        });
    });

    router.put("/email",function(req,res){
        console.log("bisatot");
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["email","message",req.body.pesan,"email_from",req.body.email_dari];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the message for email "+req.body.email_dari});
            }
        });
    });

    router.delete("/email/:email_from",function(req,res){
        console.log("bisasu");
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["email","email_from",req.params.email_dari];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.email_dari});
            }
        });
    });
}

module.exports = REST_ROUTER;