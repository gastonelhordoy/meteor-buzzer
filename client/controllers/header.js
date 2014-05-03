Template.header.sounds = function() {
    return sounds;
};

Template.header.events({
    'click .button': function (event) {
        var soundName = $(event.target).attr('soundName');
        stream.emit(SELECTION_EVENT_NAME, soundsMap[soundName].id);
    }
});

