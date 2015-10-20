#!/bin/sh
URL=file://$PWD/index_with_plan.html
phantomjs run_qunit.js $URL
