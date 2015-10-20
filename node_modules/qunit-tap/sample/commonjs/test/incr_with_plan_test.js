var q = require('../test_helper_with_plan').QUnit,
    startTest = require('../test_helper_with_plan').startTest,
    inc = require('../lib/incr').increment;

q.module('incr module');

q.test('increment', function (assert) {
    q.expect(2);

    assert.equal(inc(1), 2);
    
    // Corner case: expected 2 assertions, but 1 were run.
    // But this mismatch is repored as an always-fail assertion,
    // so the actual run count finally matches.
});

startTest();
