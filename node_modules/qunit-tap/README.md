QUnit-TAP
================================

[![NPM version](https://badge.fury.io/js/qunit-tap.png)](http://badge.fury.io/js/qunit-tap)
[![Dependency Status](https://gemnasium.com/twada/qunit-tap.png)](https://gemnasium.com/twada/qunit-tap)

A TAP Output Producer Plugin for QUnit


DESCRIPTION
---------------------------------------
QUnit-TAP is a simple plugin for [QUnit](http://qunitjs.com/) to produce [TAP](http://testanything.org/) output.

QUnit-TAP provides TAP output feature for *ANY* version of QUnit (but there are some exceptions. see TESTED ENVIRONMENTS section below). With QUnit-TAP you can run your QUnit test scripts on your terminal, use TAP Consumers like [prove](http://perldoc.perl.org/prove.html) for test automation, pass test output to [Jenkins](http://jenkins-ci.org/), and so on.

QUnit-TAP runs under headless browsers like [PhantomJS](http://phantomjs.org/), command-line js environments (like [SpiderMonkey](https://developer.mozilla.org/en/SpiderMonkey) or [Rhino](https://developer.mozilla.org/en/Rhino)), and [CommonJS](http://commonjs.org/) environments like [Node.js](http://nodejs.org/), and of cource, runs on your real browser too.


CHANGELOG
---------------------------------------
* (2014/12/10) Release 1.5.0: Now supports 1.15.0 and 1.16.0. Drops support for too old before-1.0.0 QUnit.
* (2013/08/08) Release 1.4.0: Now QUnit-TAP exports single `qunitTap` function as `module.exports`. Therefore, `require("qunit-tap")` returns `qunitTap` function itself. Please fix your code if you are using Node.js (or any CommonJS env). Provide tap#unsubscribe method to unsubscribe specified logging events.
* (2013/01/10) Release 1.3.0: Deprecate `noPlan` option: Now QUnit-TAP works as with `noPlan: true` by default. If you want to delare plan explicitly, please use `QUnit.config.requireExpects` option instead. Stop using `QUnit.tap` as namespace: `qunitTap` function now returns an object that represents QUnit-TAP API and customization subject.
* (2012/09/13) Release 1.2.0: Reorganize configuration options. Some options are marked as deprecated (with safe fallbacks). Changed output message format a little.


CAUTION for Node.js users
---------------------------------------
* BC BREAK: Since 1.4.0, QUnit-TAP exports single `qunitTap` function as `module.exports`. Therefore, `require("qunit-tap")` returns `qunitTap` function itself. Please fix your code if you are using `qunit-tap` module via npm.


TESTED ENVIRONMENTS
---------------------------------------

| QUnit version | [PhantomJS](http://phantomjs.org/) | [Node.js](http://nodejs.org/) | [Rhino](https://developer.mozilla.org/en/Rhino) |
|:--------------|:----------|:--------|:------|
| 1.0.0         | OK        | OK      | OK    |
| 1.1.0         | OK        | OK      | OK    |
| 1.2.0         | OK        | OK      | OK    |
| 1.3.0         | OK        | OK      | OK    |
| 1.4.0         | OK        | OK      | OK    |
| 1.5.0         | OK        | OK      | OK    |
| 1.6.0         | OK        | OK      | OK    |
| 1.7.0         | OK        | OK      | OK    |
| 1.8.0         | OK        | OK      | OK    |
| 1.9.0         | OK        | OK      | OK    |
| 1.10.0        | OK        | OK      | OK    |
| 1.11.0        | OK        | [NG](https://github.com/jquery/qunit/pull/401) | [NG](https://github.com/jquery/qunit/pull/401) |
| 1.12.0        | OK        | [NG](https://github.com/jquery/qunit/pull/401) | [NG](https://github.com/jquery/qunit/pull/401) |
| 1.13.0        | OK        | OK      | OK    |
| 1.14.0        | OK        | OK      | OK    |
| 1.15.0        | OK        | OK      | OK    |
| 1.16.0        | OK        | OK      | OK    |
| HEAD          | OK        | OK      | OK    |


DOWNLOAD
---------------------------------------
* Just download [qunit-tap.js](http://github.com/twada/qunit-tap/raw/master/lib/qunit-tap.js)
* or download archives from [qunit-tap tags](https://github.com/twada/qunit-tap/tags)
* or `git clone git://github.com/twada/qunit-tap.git`
* or `npm install qunit-tap` if you use npm.
* or `bower install qunit-tap` if you use [bower](http://bower.io/).

You can use QUnit-TAP,

* as a single file, copy lib/qunit-tap.js to anywhere you like.
* as git submodule.
* as a node.js package (via npm).
* as a bower component (via bower).


USAGE
---------------------------------------
Simple steps to use QUnit-TAP.

1. load/require qunit.js
2. load/require qunit-tap.js
3. Call `qunitTap` function with two or three arguments. The first argument is QUnit object reference, the second is print-like function for TAP output. And the third argument is object to customize default behavior. (Note that the first and second argument is mandatory, and the third argument is optional.)
4. (optional) `qunitTap` function returns an object that represents QUnit-TAP API.

### usage example 1 : embed QUnit-TAP in your HTML (e.g. to run with PhantomJS)

```html
<script type="text/javascript" src="path/to/qunit.js"></script>
<script type="text/javascript" src="path/to/qunit-tap.js"></script>
<script>
  qunitTap(QUnit, function() { console.log.apply(console, arguments); });
</script>
<script type="text/javascript" src="path/to/your_test.js"></script>
<script type="text/javascript" src="path/to/your_test2.js"></script>
```

### usage example 2 : use QUnit-TAP with Node.js

First, declare qunitjs and qunit-tap as devDependencies in your package.json, then run `npm install`.

```javascript
{
    . . .
    "devDependencies": {
        "qunitjs": "1.14.0",
        "qunit-tap": "1.5.0",
        . . .
    },
    . . .
}
```

Next, require and configure them.

```javascript
var util = require("util"),
    QUnit = require('qunitjs'),
    qunitTap = require('qunit-tap');
qunitTap(QUnit, util.puts);
QUnit.config.autorun = false;

// your tests

QUnit.load();
```

### usage example 3 : use QUnit-TAP with Rhino/SpiderMonkey

```javascript
load("path/to/qunit.js");
load("path/to/qunit-tap.js");

// enable TAP output
qunitTap(QUnit, print);  //NOTE: 'print' is Rhino/SpiderMonkey's built-in function

// or customize default behavior
// qunitTap(QUnit, print, {showExpectationOnFailure: true, showSourceOnFailure: false});

// configure QUnit to run under non-browser env.
QUnit.config.autorun = false;

load("path/to/your_test.js");
load("path/to/your_test2.js");

QUnit.load();
```

CONFIGURATION OPTIONS
---------------------------------------
QUnit-TAP is already configured with reasonable default. To customize, `qunitTap` function takes third optional argument as options object to override default behavior. Customization props are,

* `initialCount` : Initial number for TAP plan line. Default is 1.
* `showExpectationOnFailure` : If true, show 'expected' and 'actual' on failure. Default is true.
* `showTestNameOnFailure` : If true, show test name on failure (supported since QUnit 1.10.0). Default is true.
* `showModuleNameOnFailure` : If true, show module name on failure (supported since QUnit 1.10.0). Default is true.
* `showSourceOnFailure` : If true, show source file name and line number on failure if stack trace is available. Default is true.

### Related config option on QUnit

* `QUnit.config.requireExpects` : If true, QUnit-TAP prints *expected* assertion count as plan line at the bottom after all the test points have run. Otherwise, QUnit-TAP prints *actual* assertion count as plan line at the bottom after all the test points have run.

### More on customization

You can even override `moduleStart`, `testStart`, `log`, `done`, `testDone` method in object returned from `qunitTap` function. In these methods, `this` refers to the object returned from `qunitTap` function.

```javascript
var tap = qunitTap(QUnit, function() { console.log.apply(console, arguments); });
. . .
tap.moduleStart = function(arg) {
    // 'this' refers to tap object
    this.note('customized: ' + arg.name);
};
```

TAP OUTPUT EXAMPLE
---------------------------------------
QUnit-TAP produces output based on [TAP](http://testanything.org/) specification.

    # module: math module
    # test: add
    ok 1
    ok 2
    ok 3 - passing 3 args
    ok 4 - just one arg
    ok 5 - no args
    not ok 6 - expected: 7, got: 1, test: add, module: math module
    not ok 7 - with message, expected: 7, got: 1, test: add, module: math module
    ok 8
    ok 9 - with message
    not ok 10 - test: add, module: math module
    not ok 11 - with message, test: add, module: math module
    # module: incr module
    # test: increment
    ok 12
    ok 13
    # module: TAP spec compliance
    # test: Diagnostic lines
    ok 14 - with\r
    # multiline
    # message
    not ok 15 - with\r
    # multiline
    # message, expected: "foo\r
    # bar", got: "foo
    # bar", test: Diagnostic lines, module: TAP spec compliance
    not ok 16 - with\r
    # multiline
    # message, expected: "foo
    # bar", got: "foo\r
    # bar", test: Diagnostic lines, module: TAP spec compliance
    1..16

Configuration for this example is,

```javascript
qunitTap(QUnit, function() { console.log.apply(console, arguments); }, {
  showSourceOnFailure: false
});
```

Explicitly, it's same as,

```javascript
qunitTap(QUnit, function() { console.log.apply(console, arguments); }, {
  initialCount: 1,
  showExpectationOnFailure: true,
  showTestNameOnFailure: true,
  showModuleNameOnFailure: true,
  showSourceOnFailure: false
});
```


RUNNING EXAMPLES
---------------------------------------
### prepare
    $ git clone git://github.com/twada/qunit-tap.git
    $ cd qunit-tap


### to run with PhantomJS

    # assume you have built and installed phantomjs
    $ cd sample/js/
    $ ./phantomjs_test.sh

    # with prove
    $ prove --exec=sh phantomjs_test.sh

for details, see [phantomjs_test.sh](http://github.com/twada/qunit-tap/tree/master/sample/js/phantomjs_test.sh)


### to run with Rhino/SpiderMonkey

    # assume you are using rhino
    $ cd sample/js/
    $ java -jar /path/to/js.jar run_tests.js

for details, see [sample/js/](http://github.com/twada/qunit-tap/tree/master/sample/js/)


### to run under CommonJS environment (includes Node.js)

    # assume you are using node.js
    $ cd sample/commonjs/
    $ node test/math_test.js
    $ node test/incr_test.js

    # with prove
    $ prove --exec=/path/to/node test/*.js

for details, see [sample/commonjs/](http://github.com/twada/qunit-tap/tree/master/sample/commonjs/)


TROUBLE SHOOTING
---------------------------------------

### qunitjs loading problem on Node

If you are using Node.js (or any CommonJS env) and have an error like this,

    $ node test/incr_test.js 
    
    node.js:201
            throw e; // process.nextTick error, or 'error' event on first tick
                  ^
    Error: should pass QUnit object reference. Please check QUnit's "require" path if you are using Node.js (or any CommonJS env).
        at qunitTap (/path/to/qunit-tap.js:22:15)
        at Object.<anonymous> (/path/to/using_qunit_via_require_module.js)
        ....
    $

Check QUnit's version you are using. QUnit's module export path has changed since QUnit 1.3.0, so you should fix 'require' path to get QUnit Object from 'require' module. 

      var util = require("util"),
    -     QUnit = require('./path/to/qunit').QUnit,
    +     QUnit = require('./path/to/qunit'),
          qunitTap = require('qunit-tap').qunitTap;
      qunitTap(QUnit, util.puts);
      QUnit.config.autorun = false;

Official QUnit npm module is available since QUnit version 1.9.0, so the best way to get QUnit Object is just use 'qunitjs' module.

      var util = require("util"),
    -     QUnit = require('./path/to/qunit').QUnit,
    +     QUnit = require('qunitjs'),
          qunitTap = require('qunit-tap').qunitTap;
      qunitTap(QUnit, util.puts);
      QUnit.config.autorun = false;

for details, see [my fix](https://github.com/twada/qunit-tap/commit/4799002ae1b9d8a1721da448b98f3dd0d89159d6).


### qunit-tap loading problem on Node

Similarly, QUnit-TAP exports single `qunitTap` function as `module.exports` since 1.4.0. Therefore, `require("qunit-tap")` returns `qunitTap` function itself. Please fix your code if you are using Node.js (or any CommonJS env).



HOW TO RUN REGRESSION TESTS FOR DEVELOPMENT
---------------------------------------
### to run version compatibility suite for PhantomJS
1. [download and install PhantomJS](http://phantomjs.org/download.html)
2. run `./test/version_compatibility_phantomjs.sh`

### to run version compatibility suite for Node.js
1. install Node.js
2. install test modules by `npm install`
3. run `./test/version_compatibility_node.sh`

### to run version compatibility suite for Rhino
1. run `./test/download_rhino.sh`
2. run `./test/version_compatibility_rhino.sh`


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


CONTRIBUTORS
---------------------------------------
* [Nikita Vasilyev](http://github.com/NV)
* [Hiroki Kondo](http://github.com/kompiro)
* [Keiji Yoshimi](http://github.com/walf443)
* [Hiroki Honda](http://github.com/Cside)
* [gyles19](http://github.com/gyles19)
* [Alexander Mackay-Austin](https://github.com/am-a)


LICENSE
---------------------------------------
Dual licensed under the [MIT](https://raw.github.com/twada/qunit-tap/master/MIT-LICENSE.txt) and [GPLv2](https://raw.github.com/twada/qunit-tap/master/GPL-LICENSE.txt) licenses.
