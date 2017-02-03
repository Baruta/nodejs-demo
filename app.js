var http = require('http');                                                                                
var body = [                                                                                               
      '<html><head><title>Node app by tenxcloud</title></head>',                                           
      '<body><div style="14px Helvetica Neue, Helvetica, Microsoft YaHei, Arial, 宋体, Hiragino Sans GB, STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif">',                                                           
          '<div style="width:100%;pading:50px 100px;text-align:center;">',                                 
              '<img height="80" style="margin-top:100px;margin-left: -2%" src="https://dn-tenximage.qbox.me/logo.png" />',                                                                                            
              '<h1>Hello world! - v7</h1>',                                                                      
              '<h2>This is CICD demo for Node.js application!</h2></div></div></body></html>'                                   
   ].join('');                                                                                             
                                                                                                           
http.createServer(function (request, response) {                                                           
    response.writeHead(200, { 'Content-Length': body.length,'Content-Type': 'text/html' });                
    response.end(body);                                                                                    
}).listen(3000)                                                                                            
                                                                                                           
console.log('Node app is running at localhost:' + 3000 + '/');
