Meteor.startup(function () {
    console.log('BUZZER started...');

    var chatStream = new Meteor.Stream('chat');
    // console.log('Play: %j', Play);

    chatStream.on('selection', function(message) {
        console.log('user: %s', message);
        //play.sound('../public/sounds/alarm.wav');
    });
});
