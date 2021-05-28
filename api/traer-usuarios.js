const request = require('request');

/*
this API is use for filter de users with the userID equal to 6
of the assigned URL in the challange.

*/
function users(req, res) {
  getUsuarios()
    .then(usersResponse => 
      {
     res.json(usersResponse)
   })
   .catch(err => {
     console.log(err)
     res.status(500).end()
   })
}

function getUsuarios (tag) {
  return new Promise(function (resolve, reject) {
    request('https://jsonplaceholder.typicode.com/posts', { json: true },
    (err, res2, body) => {
     if (err) { 
        console.log(`${err}`); 
        reject(err)
     } else {
       let json = res2.body;
       
       let usrId6 = json.filter(x => x.userId == '6');
       let result = usrId6.slice(0,4)
       // res.json( result)  ;
       resolve(result)
     }
   });
  })
}

module.exports = {users};

