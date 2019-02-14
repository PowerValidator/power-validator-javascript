
<div align="center">
<img src="https://raw.githubusercontent.com/PowerValidator/power-validator-javascript/master/power-validator-logo.png" align="center" />

<br><br>

[![Build Status](https://travis-ci.com/PowerValidator/power-validator-javascript.svg?branch=master)](https://travis-ci.com/PowerValidator/power-validator-javascript) [![codecov](https://codecov.io/gh/PowerValidator/power-validator-javascript/branch/master/graph/badge.svg)](https://codecov.io/gh/PowerValidator/power-validator-javascript) ![](https://img.shields.io/npm/dt/power-validator.svg?label=npm%20downloads&style=flat) 
[![](https://data.jsdelivr.com/v1/package/npm/power-validator/badge)](https://www.jsdelivr.com/package/npm/power-validator)

</div>

# Power Validator Javascript 

Power Validator is a lightweight all in one library for the validation and respective utils which we use in the everyday project/product development. 

> Our Mission is to bring in all the possible validation functions and helper utils into to one place


## Getting Started 

We Support Node ES6 Modules, plain javascript, typescript. AMD modules

### Install using npm 

```sh
   $ npm install power-validator
```

```
   const PowerValidator = require("power-validator");

   let status = PowerValidator.isString("Power Validator");

   console.log(status);
```

### Install for browser 

you can  check our cdn source for the latest version ro you can download form the Github release 

```
    https://cdn.jsdelivr.net/npm/power-validator/dist/power-validator.min.js
```

```
   <script src = "https://cdn.jsdelivr.net/npm/power-validator/dist/power-validator.min.js" >

   <script type = "text/javascript">

     var name   = "Power Validator";

    console.log( PowerValidator.isString(name));  'true'


     var number   = 100;

    console.log( PowerValidator.isString(number));  'false'

   </script>
```


## Currently Supported functions (latest build)

Our Validation functions are currently classifed into following type 

    * String Validator - function's to validate string 
    * Number Validator - function's to validate numbes, floats etc 

### String Validator


| Function | README |
| ------ | ------ |
| isString | Return true if the input is ("typeof string != "string") |
| isStringNull | Return true if the input is (null  undefind  "null") |
| isStringEmpty |Return true if the input is (null  undefind  ""  "null") |
| isStringValid | Return false if the input is (null  undefind  "null"  "typeof string != "string"  "" ) |

### Number Validator


| Function | README |
| ------ | ------ |
| isNumber(input) | Return true if the input is ("typeof number != "string") |
