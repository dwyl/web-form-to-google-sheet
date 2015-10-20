module('QUnit Assertions');

test('equal', function (assert) {
    assert.equal('1', 1, 'equal("1", 1)');
    assert.equal(null, 'null', 'equal(null, "null")');
    assert.equal(undefined, 'undefined', 'equal(undefined, "undefined")');
    assert.equal(null, undefined, 'equal(null, undefined)');
    assert.equal(undefined, null, 'equal(undefined, null)');
    assert.equal(undefined, undefined, 'equal(undefined, undefined)');
});

test('strictEqual', function (assert) {
    assert.strictEqual(0, '0', 'strictEqual(0, "0")');
    assert.strictEqual('1', 1, 'strictEqual("1", 1)');
    assert.strictEqual(null, undefined, 'strictEqual(null, undefined)');
    assert.strictEqual(undefined, null, 'strictEqual(undefined, null)');
    assert.strictEqual(undefined, undefined, 'strictEqual(undefined, undefined)');
});

test('deepEqual', function (assert) {
    assert.deepEqual(undefined, undefined, 'deepEqual(undefined, undefined)');
    assert.deepEqual(['1', '2'], [1, 2], 'deepEqual(["1", "2"], [1, 2])');
    assert.deepEqual({foo: 'hoge', bar: 'piyo'}, {foo: 'fuga', baz: 'piyo'}, 'deepEqual({foo: "hoge", bar: "piyo"}, {foo: "fuga", baz: "piyo"})');
});

test('ok', function (assert) {
    assert.ok(null, 'ok(null)');
    assert.ok(undefined, 'ok(undefined)');
    assert.ok(1, 'ok(1)');
    assert.ok(0, 'ok(0)');
    assert.ok('', 'ok("")');
    assert.ok([], 'ok([])');
    assert.ok({}, 'ok({})');
});
