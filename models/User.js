const mongoose = require('mongoose'),
    Schema = require('mongoose').Schema,
    bcrypt = require('bcryptjs');

const regExpURL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

const UserSchema = new Schema({
    profile: {
        username: { type: String, required: function() { return this.length > 2 }, trim: true },
        password: { type: String, required: true },
        email: { type: String, required: true, trim: true },
        created_at: { type: Date, default: Date.now },
        image: { type: String, match: regExpURL },
        description: { type: String, trim: true, default: "Startversity is my top one resource to learn programming" }
    },
    network: {
        contacts: { type: [Schema.Types.ObjectId], ref: 'User' },
        contentFollowed: { type: [Schema.Types.ObjectId], ref: 'Content' },
        ownContent: { type: [Schema.Types.ObjectId], ref: 'Content' },
    }
});


UserSchema.pre('save', function(next) {
    let user = this;

    if (!user.isModified('profile.password')) return next();

    bcrypt.genSalt(10, function(error, salt) {
        if (error) return next(error);

        bcrypt.hash(user.profile.password, salt, function(error, hash) {

            if (error) return next(error);
            user.profile.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.profile.password);
}

module.exports = mongoose.model('User', UserSchema);