const express = require('express');
const router = express.Router();
const passport =require ('passport');

router.get('/', (req, res, next)=>{
res.render('index');
});

//registro
router.get('/signup', (req, res, next)=>{
res.render('signup')
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

//login

router.get('/signin', (req, res, next)=>{
res.render('signin')
});

router.post('/signin',passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

//logout
router.get('/logout', (req, res, next)=>{
    req.logOut();
    res.redirect('/');
});

//auth 
router.use((req, res, next)=>{
    isAuthenticated(req, res, next);
    next();
})

//profile
router.get('/profile',  (req, res, next)=>{
    res.render('profile');
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next();

    }
    res.redirect('/');
};






module.exports= router;