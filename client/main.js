
// TODO check for format support
var index = 0;
var sounds = ['truck.ogg', 'alarm.wav', 'ding.wav'];
for (i = 0; i < sounds.length; i++) {
    sounds[i] = new buzz.sound('/sounds/' + sounds[i], { preload: true });
}

// Register to selection events
stream.on(SELECTION_EVENT_NAME, function(sound) {
    // FIXME check why the notification is being received multiple times
    findUserData(this.userId, function(err, result) {
        console.log('user: ' + result.username + ' | sound: ' + sound);
    });
    
    // TODO add validation for sound index
    sounds[sound].play();
});


Template.main.greeting = function () {
    return "Welcome to meteor-buzzer!";
};
Template.main.events({
    'click input': function () {
        stream.emit(SELECTION_EVENT_NAME, index);
        index = (index + 1) % sounds.length;
    }
});

