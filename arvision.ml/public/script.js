var axios = require('axios');
var base64 = require('base-64');
var fs = require('fs');

let token = "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"

function uploadFileApi(token, content) {

    var data = JSON.stringify({
        "message": "txt file",
        "content": `${content}`
    });

    var config = {
        method: 'put',
        url: 'https://api.github.com/repos/mechafiki/arforeveryone/contents/abc.txt',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  function uploadFiles(file){

    var axios = require('axios');
    var base64 = require('base-64');
    var fs = require('fs');

    let token = "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" 

    const formData = new FormData(); 
    formData.append( 
      "myFile", 
      file, 
      file.name 
    ); 

    var content = base64.encode(formData);
    uploadFileApi(token, content)
    
  }
  