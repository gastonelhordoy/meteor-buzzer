Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

// TODO check for format support
soundsMap = {};
for (i = 0; i < sounds.length; i++) {
    soundsMap[sounds[i]] = {
        id: i,
        player: new buzz.sound('/sounds/' + sounds[i] + '.wav', { preload: true })
    };
}

// Register to selection events
stream.on(SELECTION_EVENT_NAME, function(msg) {
    if (msg.soundId < 0 || msg.soundId >= sounds.length) {
        console.log('user: ' + msg.username + ' | undefined sound received')
    } else {
        soundsMap[sounds[msg.soundId]].player.play();
        console.log('user: ' + msg.username + ' | sound: ' + msg.soundId);
    }
});

