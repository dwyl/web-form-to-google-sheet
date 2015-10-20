module('TAP spec compliance');

test('Diagnostic lines', function (assert) {
    expect(2);
    assert.ok(true, 'with\nmultiline\nmessage');
    assert.equal('foo\nbar', 'foobar\n', 'with\nmultiline\nmessage');
});
