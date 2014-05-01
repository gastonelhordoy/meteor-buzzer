Meteor.startup(function () {
    console.log('BUZZER started...');

    // restricted messages to logged-in users
    stream.permissions.write(function(eventName) {
        return this.userId !== null;
    }, false);
    stream.permissions.read(function(eventName) {
        return this.userId !== null;
    }, false);

    // register the server itself to the event so it can react upon messages
    stream.on(SELECTION_EVENT_NAME, function(message) {
        console.log('%s from user [%s]: %j', SELECTION_EVENT_NAME, this.userId, message);
        //play.sound('../public/sounds/alarm.wav');
    });
});
