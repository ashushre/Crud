
function CrudCtrl() {

  'use strict';
  var self = this;

  var Detail = require('../models/Detail');
 var async = require('async');
  config = require('../../../config/config');
  var dbPath = config.dbPath;


  this.ViewAllDetail = function (req, res, next) {
    try {
      async.waterfall([
        function GetUserData(callback) {
        
          Detail.find({}).exec(function (err, results) {
            if (err) {
              callback(err, null);
            }
            //  console.log(results)
            callback(null, results);
          })
        },
      ], function (err, results) {
        //  console.log("hello")
        if (err) {
          //  console.log("hello1")

          return next(restify.errors.InternalServerError('Internal server error'));

        } else {


          return SuccessWrapper.SuccessResponse(messages.successStatus, res, results);

        }
      });

    } catch (err) {
      //   console.log(err)

      return next(new restify.errors.InternalServerError('Internal server error' + err));

    }

  };

  this.addNewDetail = function (req, res, next) {
    //   console.log("ala re");
    try {
      let newDetail = new Detail(req.body);


      newDetail.save((err, result) => {
        if (err) {
          return next(new restify.errors.InternalServerError('Internal server error' + err));

        }

        return SuccessWrapper.SuccessResponse(messages.successStatus, res, result);

      });


    } catch (err) {
      console.log(err)

      return next(new restify.errors.InternalServerError('Internal server error' + err));

    }

  };

  this.updateDetails = function (req, res, next) {
    //   console.log("ala re");
    try {
      var query ={_id:req.headers.id};
      var update = req.body;
      var options = {upsert:true};
   

      Detail.findOneAndUpdate(query, update, options, function(err, result) {
        if (err) {
          return next(new restify.errors.InternalServerError('Internal server error' + err));

        }
      

        return SuccessWrapper.SuccessResponse(messages.successStatus, res, result);

      });


    } catch (err) {
      console.log(err)

      return next(new restify.errors.InternalServerError('Internal server error' + err));

    }

  };

  this.deleteDetail = function (req, res, next) {
     try {
      var query = { _id: req.body._id };
      Detail.remove(query, function (err, result) {
        if (err) {
          return next(restify.errors.InternalServerError('Internal server error'));
        }
        return SuccessWrapper.SuccessResponse(messages.successStatus, res, result, 'Record deleted Successfully');

      });
 
     } catch (err) {
       //   console.log(err)
 
       return next(new restify.errors.InternalServerError('Internal server error' + err));
 
     }
 
   };

 
}

module.exports = new CrudCtrl();
