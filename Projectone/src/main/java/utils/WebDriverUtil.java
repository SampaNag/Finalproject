package utils;

import java.util.concurrent.TimeUnit;

public class WebDriverUtil extends Hooks {
    public static boolean isTextPresent(String text) {
        try {
            return driver.getPageSource().contains(text);
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public static void waittime(){
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    }
}



