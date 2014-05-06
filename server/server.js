Meteor.startup(function () {
    console.log('BUZZER started...');

    // define a filter to transform the message and add username
    stream.addFilter(function(eventName, args) {
        if (eventName === SELECTION_EVENT_NAME) {
            var user = Meteor.users.findOne({_id: this.userId}, {fields: {'username': 1}});
            args[0] = {
                username : user.username,
                soundId : args[0],
                timestamp : new Date()
            };
        }
        return args;
    });

    // restrict messages to logged-in users
    stream.permissions.write(function(eventName) {
        return this.userId !== null;
    }, false);
    stream.permissions.read(function(eventName) {
        return this.userId !== null;
    }, false);

    // register the server itself to the event so it can react upon messages
    stream.on(SELECTION_EVENT_NAME, function(message) {
        console.log('%s from user [%s]: %j', SELECTION_EVENT_NAME, this.userId, message);
        // Play.sound('../public/sounds/alarm.wav');
    });
});
