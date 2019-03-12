const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner({
    serverUrl : "https://sonarcloud.io",
    token : "9c0524ed2236e74eede7e9d34336fafe8695de14",
    options : {
        "sonar.organization": "powervalidator",
        "sonar.projectKey":"PowerValidator_power-validator-javascript"
    }
  }, () =>{
      console.log();
  });