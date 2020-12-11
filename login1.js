var http=require('http');
var querystring=require('querystring');
var qs,name,email;
http.createServer(function (req,res){
var data1='';
req.on('data',function(chunk){
console.log(chunk);
data1+=chunk;
console.log("Data in String format:"+data1);});
req.on('end',function(){
console.log("Data:"+data1);
qs=querystring.parse(data1);
console.log(qs);
name=qs['username'];
email=qs['email'];
res.write(name+':'+email);
res.end();
}).listen(4200);});
