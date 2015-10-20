var q = require('../test_helper_with_plan').QUnit,
    startTest = require('../test_helper_with_plan').startTest,
    add = require('../lib/math').add;

q.module('math module');

q.test('add', function (assert) {
    q.expect(11);

    assert.equal(add(1, 4), 5);
    assert.equal(add(-3, 2), -1, '');
    assert.equal(add(1, 3, 4), 8, 'passing 3 args');
    assert.equal(add(2), 2, 'just one arg');
    assert.equal(add(), 0, 'no args');

    assert.equal(add(-3, 4), 7);
    assert.equal(add(-3, 4), 7, 'with message');

    assert.ok(true);
    assert.ok(true, 'with message');
    assert.ok(false);
    assert.ok(false, 'with message');
});

startTest();
