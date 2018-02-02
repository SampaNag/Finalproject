$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registerpage.feature");
formatter.feature({
  "line": 1,
  "name": "checking required/mandatory fields are marked with * functionality otpion",
  "description": "",
  "id": "checking-required/mandatory-fields-are-marked-with-*-functionality-otpion",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify all * fields are working with valid data",
  "description": "",
  "id": "checking-required/mandatory-fields-are-marked-with-*-functionality-otpion;verify-all-*-fields-are-working-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enters the email address",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "clicks on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "types in Firstname \"Sam\" Lastname \"Roy\"  password \"asd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "type in address \"xyz\" city \"abc\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select state as \"Alaska\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "type in zipcope as \"73002\" mobil phone \"9876543209\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user is able to register and land on the page with the message \"Welcome to your account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Regpage_MyStepdefs.userIsInHomepage()"
});
formatter.result({
  "duration": 386697328,
  "status": "passed"
});
formatter.match({
  "location": "Regpage_MyStepdefs.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 231506,
  "status": "passed"
});
formatter.match({
  "location": "Regpage_MyStepdefs.entersTheEmailAddress()"
});
formatter.result({
  "duration": 29423790,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027email_create\u0027]\"}\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-P9O1KNDI\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\SAMPAB~1\\AppData\\Local\\Temp\\scoped_dir10844_26275}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d63.0.3239.132, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 443895013357228fc1df305e7d3da399\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027email_create\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\r\n\tat Pages.RegisterPage.enterEmail(RegisterPage.java:69)\r\n\tat Regpage_MyStepdefs.entersTheEmailAddress(Regpage_MyStepdefs.java:32)\r\n\tat ✽.And enters the email address(registerpage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Regpage_MyStepdefs.clicksOnCreateAnAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam",
      "offset": 20
    },
    {
      "val": "Roy",
      "offset": 35
    },
    {
      "val": "asd1234",
      "offset": 51
    }
  ],
  "location": "Regpage_MyStepdefs.typesInFirstnameLastnamePassword(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 17
    },
    {
      "val": "abc",
      "offset": 28
    }
  ],
  "location": "Regpage_MyStepdefs.typeInAddressCity(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alaska",
      "offset": 17
    }
  ],
  "location": "Regpage_MyStepdefs.selectStateAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "73002",
      "offset": 20
    },
    {
      "val": "9876543209",
      "offset": 40
    }
  ],
  "location": "Regpage_MyStepdefs.typeInZipcopeAsMobilPhone(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Regpage_MyStepdefs.userClicksOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to your account",
      "offset": 64
    }
  ],
  "location": "Regpage_MyStepdefs.userIsAbleToRegisterAndLandOnThePageWithTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});