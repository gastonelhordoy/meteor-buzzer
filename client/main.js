Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Template.hello.greeting = function () {
    return "Welcome to meteor-buzzer!";
};

// TODO check for format support
var index = 0;
var sounds = ['truck.ogg', 'alarm.wav', 'ding.wav'];
for (i = 0; i < sounds.length; i++) {
    sounds[i] = new buzz.sound('/sounds/' + sounds[i], { preload: true });
}

var chatStream = new Meteor.Stream('chat');

Template.hello.events({
    'click input': function () {

    chatStream.emit('selection', index);
    index = (index + 1) % sounds.length;

    chatStream.on('selection', function(message) {
        // FIXME check why the notification is being received multiple times
        console.log('user: ' + message.user + ' | sound: ' + message.index);
        
        // TODO add validation for message.index
        sounds[message.index].play();
    });
  }
});

