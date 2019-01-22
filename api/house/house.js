// User.js
var mongoose = require('mongoose');  
var houseSchema = new mongoose.Schema({  
  name: String,
  location: String,
  rate: Number,
  overallrating:{type:Number, default:0},
  ratings: {
    stars: {type:[Number], default:[]},
    comments:{type:[String], default:[]},
  }
});
mongoose.model('House', houseSchema);

module.exports = mongoose.model('House');