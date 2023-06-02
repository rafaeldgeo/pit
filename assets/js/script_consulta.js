const axios = require("axios").default;

let http = "http://187.72.67.9:10059/carga/retornarlistacomintegracoesatemporais";

axios.post(http, {
   "parametro":[
      {
         "login":"prodest",
         "password":"prD*3#@ahHn#"
      }
   ]
})
.then(function (response) {
  console.log(response.data);
  var teste = response.data;
})
.catch(function (error) {
  console.log(error);
});
