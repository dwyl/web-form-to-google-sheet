var q = require('../test_helper_with_plan').QUnit,
    startTest = require('../test_helper_with_plan').startTest;

q.module('QUnit Assertions');

q.test('equal', function (assert) {
    q.expect(6);

    assert.equal('1', 1, 'equal("1", 1)');
    assert.equal(null, 'null', 'equal(null, "null")');
    assert.equal(undefined, 'undefined', 'equal(undefined, "undefined")');
    assert.equal(null, undefined, 'equal(null, undefined)');
    assert.equal(undefined, null, 'equal(undefined, null)');
    assert.equal(undefined, undefined, 'equal(undefined, undefined)');
});

q.test('strictEqual', function (assert) {
    q.expect(5);

    assert.strictEqual(0, '0', 'strictEqual(0, "0")');
    assert.strictEqual('1', 1, 'strictEqual("1", 1)');
    assert.strictEqual(null, undefined, 'strictEqual(null, undefined)');
    assert.strictEqual(undefined, null, 'strictEqual(undefined, null)');
    assert.strictEqual(undefined, undefined, 'strictEqual(undefined, undefined)');
});

q.test('deepEqual', function (assert) {
    q.expect(3);

    assert.deepEqual(undefined, undefined, 'deepEqual(undefined, undefined)');
    assert.deepEqual(['1', '2'], [1, 2], 'deepEqual(["1", "2"], [1, 2])');
    assert.deepEqual({foo: 'hoge', bar: 'piyo'}, {foo: 'fuga', baz: 'piyo'}, 'deepEqual({foo: "hoge", bar: "piyo"}, {foo: "fuga", baz: "piyo"})');
});

q.test('ok', 7, function (assert) {
    assert.ok(null, 'ok(null)');
    assert.ok(undefined, 'ok(undefined)');
    assert.ok(1, 'ok(1)');
    assert.ok(0, 'ok(0)');
    assert.ok('', 'ok("")');
    assert.ok([], 'ok([])');
    assert.ok({}, 'ok({})');
});


q.test('throws', function (assert) {
    q.expect(13);

    assert.throws(function () { throw new Error('hoge'); }, 'testing some error is thrown');

    assert.throws(function () { return 'hoge'; }, 'error is not thrown');
    assert.throws(function () { return 'hoge'; }, Error, 'Error is not thrown');

    assert.throws(function () { throw new TypeError('hoge'); }, TypeError, 'Error class assertion');
    assert.throws(function () { throw new TypeError('hoge'); }, Error, 'Error class assertion uses instanceof');
    assert.throws(function () { throw new Error('hoge'); }, TypeError, 'Error class assertion uses instanceof');

    assert.throws(function () {
        throw {
            name: 'TypeError',
            message: 'type mismatch'
        };
    }, 'throwing object');

    assert.throws(function () {
        throw {
            name: 'TypeError',
            message: 'type mismatch'
        };
    }, TypeError, 'throwing object is not equivalent to Error class assertion');

    assert.throws(function () {
        throw {
            name: 'TypeError',
            message: 'type mismatch'
        };
    }, Object, 'throwing object then assert it is instanceof Object');

    assert.throws(function () {
        throw {
            name: 'TypeError',
            message: 'type mismatch'
        };
    }, function (err) { return err.name === 'TypeError'; }, 'validation function');

    assert.throws(function () { throw 'hoge'; }, 'throwing string');
    assert.throws(function () { throw 'hoge'; }, /^hoge$/, 'throwing string then assert that using regex');
    assert.throws(function () { throw 'fuga'; }, /^hoge$/, 'throwing string then assert that using regex');
});

startTest();
