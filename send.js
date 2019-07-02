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

    var sendParams = {
        'destination': 'testqueue',
        'content-type': 'application/json'
    };

    var frame = client.send(sendParams);

    frame.end(JSON.stringify({
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true, 
        anything: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        example: true
    }));

    client.disconnect(function(error){
        if(error){
            console.log('Error while disconnecting: ' + error.message);
            return;
        }
        console.log('Sent message');
    });
});
