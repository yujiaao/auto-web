
var Promise = require("bluebird")
    fs = Promise.promisifyAll(require('fs-extra'));
    

   function generateStructure(project){
     return fs.copyAsync('structure', project,{
       clobber:true})
         .then(function(err){
          if(err) return console.error(err)
   })

  }


  module.exports = generateStructure;


