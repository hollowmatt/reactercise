const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  name: { type: String, required: true },
  birthday: { type: Date, required: true },
  location: { type: String, required: true }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;