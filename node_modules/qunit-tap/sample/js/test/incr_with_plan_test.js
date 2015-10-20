module('incr module');

test('increment', function (assert) {
    expect(2);
    var inc = incr.increment;
    assert.equal(inc(1), 2);
    assert.equal(inc(-3), -2);
});
