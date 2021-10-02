const http = require('http');

http.Server((req, res) => {
    if (req.url == "/result4/") {
        const CORS = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "x-test,Content-Type,Accept,Access-Control-Allow-Headers"
        }

        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "application/json", ...CORS })
            res.end(JSON.stringify({
                "message": "itmo307710",
                "x-result": req.headers["x-test"],
                "x-body": body
            }));
        });
    }
    else {
        res.writeHead(404, { "Access-Control-Allow-Origin": "*" });
        res.end("Not found");
    }
})
.listen(process.env.PORT || 8080);