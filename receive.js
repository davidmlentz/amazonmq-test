var stompit = require('stompit');

var connectParams = {
    host: '<MY_MQ_HOSTNAME>',
    port: 61614,
    ssl: true,
    connectHeaders:{
        host: '<MY_MQ_HOSTNAME>',
        login: '<MY_MQ_LOGIN>',
        passcode: '<MY_MQ_PASSWORD>'
    }
};

stompit.connect(connectParams, function(error, client){
    
    if(error){
        console.log('Unable to connect: ' + error.message);
        return;
    }
    
    var subscribeParams = {
       'destination': 'testqueue',
       'ack': 'client-individual'
    };
    
    var consuming = false;
    
    client.subscribe(subscribeParams, function(error, message){
        
        // Don't consume more than one message
        if(consuming){
            return;
        
        consuming = true;
        
        var read = function(){
            var chunk;
            while(null !== (chunk = message.read())){
                process.stdout.write(chunk);
            }
        };
        
        message.on('readable', read);
        
        message.on('end', function(){
            client.ack(message);
            client.disconnect();
        });
    });
});
