#!/usr/bin/env node
require = require('esm')(module /*, options*/);
require('@babel/polyfill');
require('../src/index.js');
