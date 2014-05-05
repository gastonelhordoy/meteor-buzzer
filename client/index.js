Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

var DateFormats = {
    'short' : 'YYYY/MM/DD',
    'short-time' : 'YYYY/MM/DD HH:mm:ss'
};

UI.registerHelper('formatDate', function(datetime, format) {
    var f = DateFormats[format];
    if (f) {
        return moment(datetime).format(f);
    }
    return datetime.toString();
});

// TODO check for format support
// map array to hash because meteor's handlebars version does not support @index in #each yet
soundsMap = {};
for (i = 0; i < sounds.length; i++) {
    soundsMap[sounds[i]] = {
        id: i,
        player: new buzz.sound('/sounds/' + sounds[i] + '.wav', { preload: true })
    };
}
// TODO incrementally load sounds in the background with Meteor.setInterval(func, delay)

// Register to selection events
messages = new Meteor.Collection(null);
stream.on(SELECTION_EVENT_NAME, function(msg) {
    if (msg.soundId < 0 || msg.soundId >= sounds.length) {
        msg.soundName = 'invalid';
    } else {
        msg.soundName = sounds[msg.soundId];
        soundsMap[msg.soundName].player.play();
    }
    messages.insert(msg);
});