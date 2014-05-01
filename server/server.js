function selectionTransformationFilter(eventName, args) {
    // TODO get username from userId
    console.log('Event [%s] in TransformationFilter from user [%s]: %j', eventName, this.userId, args);
    
    if (eventName === 'selection') {
        // TODO validate length
        args[0] = { user: this.userId, index: args[0]};
    }
    return args;
}

Meteor.startup(function () {
    console.log('BUZZER started...');

    var chatStream = new Meteor.Stream('chat');
    chatStream.addFilter(selectionTransformationFilter);
    chatStream.permissions.write(function(eventName) {
        return this.userId !== null;
    }, false);
    chatStream.permissions.read(function(eventName) {
        return this.userId !== null;
    }, false);
  
    // console.log('Play: %j', Play);

    chatStream.on('selection', function(message) {
        console.log('Selection: %j', message);
        //play.sound('../public/sounds/alarm.wav');
    });
});
