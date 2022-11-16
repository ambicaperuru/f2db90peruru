var express = require('express'); 
const mobile_controlers= require('../controllers/mobile'); 
var router = express.Router(); 
 
/* GET mobile */ 
router.get('/', mobile_controlers.mobile_view_all_Page ); 
 

/* GET detail mobile page */ 
router.get('/detail', mobile_controlers.mobile_view_one_Page);


/* GET create mobile page */ 
router.get('/create', mobile_controlers.mobile_create_Page);

/* GET create update page */ 
router.get('/update', mobile_controlers.mobile_update_Page); 

/* GET delete mobile page */ 
router.get('/delete', mobile_controlers.mobile_delete_Page); 

module.exports = router;
 