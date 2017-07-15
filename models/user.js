const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, require: true, unique: true},
  password: {type: String}
});

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPasswordConfirmation(next){
  if(this.isModified('password') && this.password !== this._passwordConfirmation){
    this.invalidate('passwordConfirmation', 'Does not match bruh');
  }
  next();
});
