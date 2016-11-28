/**
 * Created by yongyuehuang on 2016/11/23.
 */
var mongoose = require('mongoose');

var S = mongoose.Schema({
    id: Number,
    text: String
})

var M = mongoose.model('Navigation', S)

M.schema.pre('save', function(next) {
    var instance = this;
    next();
})

module.exports = M