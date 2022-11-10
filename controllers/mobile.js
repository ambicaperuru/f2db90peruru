var mobiles = require('../models/mobile'); 
 
// List of all mobiles
exports.costume_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: mobiles list'); 
}; 
 
// for a specific mobile. 
exports.mobile_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: mobile detail: ' + req.params.id); 
}; 
 
// Handle mobile create on POST. 
exports.mobile_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new mobiles(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"mobile_type":"pepperoni", "cost":20, "size":"large"} 
    document.mobile_type = req.body.mobile_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle mobile delete form on DELETE. 
exports.mobile_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: mobile delete DELETE ' + req.params.id); 
}; 
 
// Handle mobile update form on PUT. 
exports.mobile_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: mobile update PUT' + req.params.id); 
}; 
// List of all mobile 
exports.mobile_list = async function(req, res) { 
    try{ 
        themobiles = await mobiles.find(); 
        res.send(themobiles); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// VIEWS 
// Handle a show all view 
exports.mobile_view_all_Page = async function(req, res) { 
    try{ 
        themobiles = await mobiles.find(); 
        res.render('mobile', { title: 'mobile Search Results', results: themobiles }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 