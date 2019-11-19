#!/usr/bin/env node
require = require('esm')(module /*, options*/);
require('@babel/polyfill');
require('../lib/commands');
