#!/usr/bin/env/ node

require = require("esm")(module);
require("./scripts/test").cli(process.argv);
