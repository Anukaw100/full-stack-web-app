import User from "./database.js";
import bycrypt from "bcrypt";
import passport from "passport"
import {Strategy as LocalStrategy} from "passport-local" ;

const customFields = {
  usernameField: "email"
}

const verifyCallback = async (username, password, done) => {
  try {
    const user = await User.findOne({email: username});
    if(!user) {
      return done(null, false);
    }

    if(await bycrypt.compare(password, user.password)) {
      done(null, user)
    } else {
      done(null, false)
    }

  } catch (err) {
    done(err);
  }
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy)

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser( async (userId, done) => {
  try{
    const user = await User.findById(userId);
    done(null, user)
  } catch(err) {
    done(err);
  }
});
