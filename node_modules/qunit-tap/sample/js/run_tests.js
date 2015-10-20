load("./lib/math.js");
load("./lib/incr.js");

load("../../test/compatibility/stable/qunit.js");
load("../../lib/qunit-tap.js");

qunitTap(QUnit, print, {showSourceOnFailure: true});
QUnit.config.autorun = false;

load("./test/math_test.js");
load("./test/incr_test.js");
load("./test/tap_compliance_test.js");
load("./test/qunit_assertion_test.js");

QUnit.load();
