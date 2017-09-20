const mongoose = require('mongoose'),
    Schema = require('mongoose').Schema,
    bcrypt = require('bcryptjs');

const ContentSchema = new Schema({
    createdAt: { type: date, default: Date.now },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, default: 'uncategorized' },
    tags: String,
    content: String,
    totalFollowers: Number,
    followedBy: { type: [Schema.Types.ObjectId], ref: 'User' },
});



module.exports = mongoose.model('Content', ContentSchema);