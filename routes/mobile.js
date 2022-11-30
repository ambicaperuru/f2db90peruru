var express = require('express'); 
const mobile_controlers= require('../controllers/mobile'); 
var router = express.Router(); 
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET mobile */ 
router.get('/', mobile_controlers.mobile_view_all_Page ); 
 

/* GET detail mobile page */ 
router.get('/detail', mobile_controlers.mobile_view_one_Page);


/* GET create mobile page */ 
router.get('/create',secured, mobile_controlers.mobile_create_Page);

/* GET create update page */ 
router.get('/update',secured, mobile_controlers.mobile_update_Page); 

/* GET delete mobile page */ 
router.get('/delete',secured, mobile_controlers.mobile_delete_Page); 

module.exports = router;
 