import bycrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "./database.js";

const customFields = {
  usernameField: "email",
};

const verifyCallback = async (username, password, done) => {
  try {
    const user = await User.findOne({ email: username });
    if (!user) {
      return done(null, false);
    }
    if (await bycrypt.compare(password, user.password)) {
      return done(null, user);
    }
    return done(null, false);
  } catch (err) {
    return done(err);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findById(userId);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});
