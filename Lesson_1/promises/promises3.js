let promise = new Promise(function(resolve, reject) {
    resolve('Geeks For Geeks');
})
   
promise
    .then(function(successMessage) {
       //success handler function is invoked
        console.log(successMessage);
    }, function(errorMessage) {
        console.log(errorMessage);
    })

