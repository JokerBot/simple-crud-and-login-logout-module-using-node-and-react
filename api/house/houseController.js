// UserController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var House = require('./house');




/*POST REQUESTS*/

// creates new house
router.post('/', function (req, res) {

console.log(req.body.name);
console.log(req.body.location);
console.log(req.body.rate);

if(typeof req.body.name === 'undefined' || typeof req.body.location === 'undefined' || typeof req.body.rate === 'undefined')
{
    console.log('errot');
    res.status(500).send("error");
}
else
{
        House.create({
                      name: req.body.name,
                      location: req.body.location,
                      rate: req.body.rate
                     }, 
                     function (err, house) {
                      if (err) return res.status(500).send(err); 
                      res.status(200).send(house); console.log(house);
                     }
        );
}     


});




/*GET REQUESTS*/

//get single house
router.get('/:id',function (req,res){

    House.findById(req.params.id,function(err,house){

      if(err) return res.status(500).send("There was a problem getting single house data");
      res.status(200).send(house);
    });

});

// get all house
router.get('/', function (req, res) {

    House.find({}, function (err,houses ) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(houses);
    });

});



/* UPDATE REQUESTS*/

//update single house
router.put('/:id', function (req, res) {

    House.findOneAndUpdate({_id:req.params.id}, req.body, {new: true}, function (err, house) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(house);
    });

});


/* DELETE REQUESTS */

//delete single house

router.delete('/:id',function(req,res){


   House.findOneAndDelete({_id:req.params.id},function(err,house){
       if(err) return res.status(500).send("There was a error in deleting single house");
       res.status(200).send(house);
   });

});





module.exports = router;