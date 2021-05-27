const request = require('request');

function users(req, res) {
    
  request('https://jsonplaceholder.typicode.com/posts', { json: true },
   (err, res2, body) => {
    if (err) { 
       console.log(`${err}`); 
    } else {
      let json = res2.body;
      
      let usrId6 = json.filter(x => x.userId == '6');
      let result = usrId6.slice(0,4)
      res.json( result)  ;
    }
  });
  
}

module.exports = {users};

