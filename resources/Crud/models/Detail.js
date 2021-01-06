

// Model for the Detail 
module.exports = (function DetailSchema() {

    var Schema = mongoose.Schema;

    function normalize(data) {
        try {

            return JSON.parse(data);
        } catch (err) {
            return data;
        }
    }
  var DetailSchema = new Schema({
    Id: {
        type: Number,
    },
    Name: {
        type: String,
    },
    Address: {
        type: String,
    },
    MobileNo: {
        type: Number,
    },
    Email:{
        type:String,
    },
    createdDate: {
        type: Date,default:Date.now
    }

});
DetailSchema.set('toObject', { getters: true });
DetailSchema.set('toJSON', { getters: true });
var Detail = mongoose.model('Detail', DetailSchema);

return Detail;
})();
//var _0x350e=['set','toObject','model','Detail','exports','now'];(function(_0x1c18e5,_0x4579eb){var _0x5189da=function(_0x21e768){while(--_0x21e768){_0x1c18e5['push'](_0x1c18e5['shift']());}};_0x5189da(++_0x4579eb);}(_0x350e,0x7c));var _0x5660=function(_0x1c18e5,_0x4579eb){_0x1c18e5=_0x1c18e5-0x0;var _0x5189da=_0x350e[_0x1c18e5];return _0x5189da;};module[_0x5660('0x0')]=function _0x317a16(){var _0x454fc7=mongoose['Schema'];function _0x3e9af8(_0x4cc185){try{return JSON['parse'](_0x4cc185);}catch(_0x24ad85){return _0x4cc185;}}var _0x317a16=new _0x454fc7({'DetailId':{'type':String},'DetailName':{'type':String},'DetailType':{'type':String},'Parameter':{'type':Array,'default':[]},'createdDate':{'type':Date,'default':Date['now']},'DatasendTime':{'type':Date,'default':Date[_0x5660('0x1')]}});_0x317a16[_0x5660('0x2')](_0x5660('0x3'),{'getters':!![]});_0x317a16[_0x5660('0x2')]('toJSON',{'getters':!![]});var _0x5a3cf4=mongoose[_0x5660('0x4')](_0x5660('0x5'),_0x317a16);return _0x5a3cf4;}();