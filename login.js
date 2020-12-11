http=require('http');
url=require('url');
querystring=require('querystring');
function sam(req,res)
{
console.log('URL'+req.url+'received.');
var path=url.parse(req.url).pathname;
console.log('Request for'+req.url+'received');
var query=url.parse(req.url).query;
console.log(query);
qs=querystring.parse(query);
console.log(qs);
var name=qs["username"];
var email=qs["email"];
res.write('Hello '+name+' your email id '+email+' has been registered
successfully');
res.end();
}
http.createServer(sam).listen(1000);
