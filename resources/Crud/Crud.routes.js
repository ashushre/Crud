var CrudCtrl = require('./controller/CrudCtrl');

module.exports = function (app) {
   
    app.post("/api/addNewDetail", CrudCtrl.addNewDetail);
    app.post("/api/updateDetail", CrudCtrl.updateDetails);
    app.get("/api/ViewAllDetail", CrudCtrl.ViewAllDetail);   
    app.post("/api/deleteDetail", CrudCtrl.deleteDetail);  
};
