const http=require('http');

const url = require('url');
const factorial=require('factorial');

const server=http.createServer(shahbaz);


function shahbaz(req,res){
var query = (url.parse(req.url,true).query);
var a=Number(query.a);

var fact=factorial(a, {useBigInt: true});
console.log(fact);
res.end((fact).toString());


}

// console.log(req);
// let body = ''

// req.on('data', (chunk) => {
//     body += chunk;
//   });

//   req.on('end', () => {
//     // Handle different content types (JSON or form data)
//     if (req.headers['content-type'] === 'application/json') {
//       try {
//         const requestBody = JSON.parse(body);
//         console.log('Received JSON data:', requestBody);
//       } catch (error) {
//         console.error('Error parsing JSON:', error);
//       }
//     } else if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//       const requestBody = querystring.parse(body);
//       console.log('Received form data:', requestBody);
//     } else {
//       console.warn('Unsupported content type:', req.headers['content-type']);
//     }
// })


// var fact=factorial(query.a, {useBigInt: true},(req,res)




// )
 

 

// if(query.a>=1){
//    var i=1;
//    var fact=1; 
   
   
//    for(i=1;i<=query.a;i++){ 

//     fact=fact*i;    
// }   

// res.end((fact).toString());
// }

// else{

//     res.end('error');
// }

// }

    
//     var query = url.parse(req.url,true).query;

//     const urlSplit=(req.url.split('?'));

 
//     if(urlSplit[0]=='/add'){

//         var query = url.parse(req.url,true).query;

//         res.end((Number(query.a)+Number(query.c)).toString())
      
      
//     }

//    else if(urlSplit[0]=='/sub'){

//     var query = url.parse(req.url,true).query;

//     res.end((Number(query.a)-Number(query.c)).toString())
  
//    }





server.listen(8000,'127.0.0.1',()=>{

console.log('port at 8000');


})
