const request = require('request');

function users(req, res) {
    
  request('https://jsonplaceholder.typicode.com/posts', { json: true },
   (err, res2, body) => {
    if (err) { 
       console.log(`ERROR EN API TRAER USUARIOS ${err}`); 
    } else {
      let json = res2.body;
      
      let usrId6 = json.filter(x => x.userId == '6');
      
      return res = usrId6.slice(0,4)  ;
    }
  });
  
}

module.exports = {users};

