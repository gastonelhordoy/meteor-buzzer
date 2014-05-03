Template.main.helpers({
    messages : function() {
        return messages.find();
    }
});

Template.main.events({
    'click div.button[soundName]' : function (event) {
        var soundName = $(event.target).attr('soundName');
        soundsMap[soundName].player.play();
    },
    'click div.button:contains(CLEAR)' : function (event) {
        messages.remove({});
    }
});
