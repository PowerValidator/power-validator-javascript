# Power Validator Javascript [![Build Status](https://travis-ci.com/PowerValidator/power-validator-javascript.svg?branch=master)](https://travis-ci.com/PowerValidator/power-validator-javascript) [![codecov](https://codecov.io/gh/PowerValidator/power-validator-javascript/branch/master/graph/badge.svg)](https://codecov.io/gh/PowerValidator/power-validator-javascript) ![](https://img.shields.io/npm/dt/power-validator.svg?label=npm%20downloads&style=flat) 

Power Validator is a lightweight all in one library for the validation and respective utils which we use in the everyday project/product development. 

> Our Mission is to bring in all the possible validation functions and helper utils into to one place


## Getting Started 

We Support Node ES6 Modules, plain javascript, typescript. AMD modules

### Install in node.js 

```
   $> npm install power-validator
```

```
   const PowerValidator = require("power-validator");

   let status = PowerValidator.isString("Power Validator");

   console.log(status);
```

### Install in script tag for browser 

you can  check our cdn source for the latest version ro you can download form the Github release 

```
    <script src = "" >
```

```
   <script type = "text/javascript">

    var name   = "Power Validator";
    var status =  PowerValidator.isString(name);

    console.log(status); // prints true

   </script>
```


### Current Support Functions (latest build)

Our valition functions are currently classifed into following type 

    * String Validator - function's to validate string 
    * Number Validator - function's to validate numbes, floats etc 

#### String Validator


| Function | README |
| ------ | ------ |
| isString(input) | Return true if the input is ("typeof string != "string") |
| isStringNull(input) | Return true if the input is (null | undefind | "null") |
| isStringEmpty(input) |Return true if the input is (null | undefind | "" | "null") |
| isStringValid(input) | Return false if the input is (null | undefind | "null" | "typeof string != "string" | "" ) |

#### Number Validator


| Function | README |
| ------ | ------ |
| isNumber(input) | Return true if the input is ("typeof number != "string") |
