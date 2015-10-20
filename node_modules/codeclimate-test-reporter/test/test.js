var assert = require("assert");
var fs = require('fs')
var Formatter = require('../formatter.js');
var CiInfo = require('../ci_info');

describe('JSON', function(){

  var lcovFixture = fs.readFileSync('test/fixtures/lcov.info').toString();
  var formatter = new Formatter({rootDirectory: "/Users/noah/p/request"});

  describe('parse', function() {
    it("should return the correct filenames", function(done) {
      formatter.format(lcovFixture, function(err, data) {
        var names = data.source_files.map(function(elem) {
          return elem.name;
        });
        expected = ["lib/cookies.js", "lib/copy.js"]
        assert.deepEqual(expected, names);
        done();
      });
    });
  });
});

describe('ci_info', function() {
  describe('#getInfo', function() {
    var bupenv = Object.keys(process.env);

    afterEach(function(){
      for(var pk in process.env) {
        if (bupenv.indexOf(pk) < 0) {
          delete process.env[pk];
        }
      }
    });

    it('should return travis-ci as name if process.env.TRAVIS is set', function() {
      process.env.TRAVIS = 'true';

      var ci = CiInfo.getInfo();
      assert.equal(ci.name, 'travis-ci');
    });

    it('should return appveyor as name if process.env.APPVEYOR is set', function() {
      process.env.APPVEYOR = 'true';

      var ci = CiInfo.getInfo();
      assert.equal(ci.name, 'appveyor');
    });

    it('should return buildkite as name if process.env.BUILDKITE is set', function() {
      process.env.BUILDKITE = 'true';

      var ci = CiInfo.getInfo();
      assert.equal(ci.name, 'buildkite');
    });

  });
});