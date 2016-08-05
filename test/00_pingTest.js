var assert = require('chai').assert;
var request = require('request');

var baseUrl = 'http://localhost:3000/';

describe('/ping', function() {
    it('should return a 200 with some health data', function (done) {
        request.get({
            url: baseUrl + 'ping'
        }, function (err, res, body) {
            assert.isNotOk(err);
            assert.equal(200, res.statusCode);
            done();
        });
    });
});