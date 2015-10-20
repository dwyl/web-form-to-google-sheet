var crypto = require('crypto');
var childProcess = require('child_process');

module.exports = {

  head: function(cb) {
    childProcess.exec("git log -1 --pretty=format:'%H'", function (error, stdout, stderr) {
      return cb(error, stdout);
    });
  },

  committedAt: function(cb) {
    childProcess.exec("git log -1 --pretty=format:'%ct'", function (error, stdout, stderr) {
      var result = null;
      var timestamp = null;
      if (stdout) {
        timestamp = parseInt(stdout);
        if (!isNaN(timestamp) && timestamp != 0) {
          result = timestamp;
        }
      }
      return cb(error, result);
    });
  },

  branch: function(cb) {
    childProcess.exec("git branch", function (error, stdout, stderr) {
      var returnBranch = null;
      if (stdout) {
        var branches = stdout.split("\n");
        branches.forEach(function(val) {
          if(val.charAt(0) == "*") {
            returnBranch = val;
          }
        });
        if (returnBranch) {
          returnBranch = returnBranch.replace("* ", "");
        }
      }
      return cb(error, returnBranch);
    });
  },

  calculateBlobId: function(content) {
    var header  = 'blob ' + content.length + '\0';
    var store   = header + content;
    var shasum  = crypto.createHash('sha1');
    shasum.update(store);
    return shasum.digest("hex");
  }

}
