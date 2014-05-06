Template.header.helpers({
    sounds : function() {
        return sounds;
    }
});

Template.header.events({
    'click a[soundName]' : function (event) {
        var soundName = $(event.target).attr('soundName');
        var soundId = soundsMap[soundName].id;

        stream.emit(SELECTION_EVENT_NAME, soundId);
        messages.insert({
            username: 'me',
            soundId: soundId,
            soundName: soundName,
            timestamp : new Date()
        });
    }
});

