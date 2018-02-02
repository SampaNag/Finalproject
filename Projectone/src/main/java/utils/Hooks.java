package utils;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Hooks {
    public static WebDriver driver;
    private static final Logger LOGGER = LoggerFactory.getLogger(Hooks.class);

    public static WebDriver getDriver()
    {
        return driver;
    }


    @BeforeClass
    public static  void openBrowser(){
        LOGGER.info("starting the browser");
        //System.out.println("starting the browser");

        if(AutomationConstants.BROWSER_TYPE.toLowerCase().equals("chrome")) {
            System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
            driver = new ChromeDriver();
        }
        else if(AutomationConstants.BROWSER_TYPE.toLowerCase().equals("firefox")){
            System.setProperty("webdriver.gecko.driver", "geckodriver.exe");
            driver = new FirefoxDriver();
        }
        else {
            Assert.fail("Browser give "+AutomationConstants.BROWSER_TYPE+" is not valid");
        }

        driver.get(AutomationConstants.URL);

    }

    @AfterClass
    public static void closeBrowser()
    {
        System.out.println("I am in closing");
        driver.quit();
    }
}



