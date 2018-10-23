const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

export const questionSchema = new Schema ({
  question_id: String,
  headline: String,
  source: String,
  leftOrRight: String,
  description: String,
});

export const userSchema = new Schema ({
  userid: String,
  username: String,
  email: String,
  name: String,
});

export const userhistorySchema = new Schema ({
  testid: String,
  userid: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10: String,
    q11: String,
    q12: String,
    bias: String,
});
