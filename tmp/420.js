#! /usr/bin/env node

var
  jsp = require("../lib/parse-js")
, pro = require("../lib/process")
, source1 = "var ø = { \"getSelf\" : function () { return ø } }"
, source2 = "if (typeof ø === \"undefined\") ; else ø.getSelf()"
, ast1 = jsp.parse(source1)
, ast2 = jsp.parse(source2)
, genSource1 = pro.gen_code(ast1)
, genSource2 = pro.gen_code(ast2)

console.log(genSource1)
console.log(genSource2)
