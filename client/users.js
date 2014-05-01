Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

findUserData = function(id, callback) {
    return Meteor.call('findUserData', id, callback);
/*
    Meteor.subscribe(USER_DATA, id);
    Deps.autorun(function() {
        var user = Meteor.users.findOne(id);
        if (user) {
            Session.set('user-' + id, user.username);
        }
    });
*/
}