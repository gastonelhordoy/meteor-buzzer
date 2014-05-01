function findUserData(id) {
    var userData = Meteor.users.findOne({_id: id}, {fields: {'username': 1}});
    console.log('User data for id [%s]: %j', id, userData);
    return userData;
}

Meteor.methods({
    'findUserData' : findUserData
});
/*
ERROR publish requires a cursor to be returned
Meteor.publish(USER_DATA, findUserData);
*/