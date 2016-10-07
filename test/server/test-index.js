var chai = require('chai');
var chaiHttp= require('chai-http');

var server= require('../../server/index.js');

var should=chai.should();
var app= server.app;
chai.use(chaiHttp);

describe('Cheese List', function() {
    it('should get cheeses', function(done){
        chai.request(app)
        .get('/cheeses')
        .end(function(err, res) {
            console.log(res);
            res.should.have.status(200);
            res.body.should.be.array;
            res.body.length.should.equal(17);
            
             res.should.be.a('object');
             res.should.have.property('type');
            done();
        });
    });
});

