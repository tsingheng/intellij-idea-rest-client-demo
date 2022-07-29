load(project + '/scripts/crypto-js.js');
load(project + '/scripts/core.js');

var timestamp = new Date().getTime().toString();
var requestid = guid();
var requestBody = request.getRequestBody() == null ? "" : request.getRequestBody().getText();

var array = [timestamp, requestid, requestBody].sort();
var secret = environment.getVariableValue('secret');
var signature = CryptoJS.HmacSHA256(array.join(""), secret).toString();

variables.set("timestamp", timestamp);
variables.set("requestid", requestid);
variables.set("signature", signature);

log("timestamp: " + timestamp)
log("requestid: " + requestid)
log("signature: " + signature)
log("")