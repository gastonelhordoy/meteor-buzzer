var chatStream = new Meteor.Stream('chat');

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.hello.greeting = function () {
  return "Welcome to meteor-buzzer!";
};

Template.hello.events({
  'click input': function () {
    chatStream.emit('selection', "Click!");
    // console.log('me: ' + message);

    chatStream.on('selection', function(message) {
        console.log('user: ' + message);
        
        var s = new buzz.sound('/sounds/truck.ogg');
        s.play();
    });
  }
});

