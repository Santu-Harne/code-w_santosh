const passport = require('passport');

const GoogleStrategyRegister = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategyRegister({
    clientID: process.env.GOOGLE_CLIENT_ID_REGISTER,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_REGISTER,
    callbackURL: "/socialAuth/google/callback"
},
    function (profile, done) {
        // var userData = profile.email[0]
        return done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})