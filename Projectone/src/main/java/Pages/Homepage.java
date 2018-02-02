package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Hooks;

public class Homepage extends Hooks {
    @FindBy(tagName = "body")
    private WebElement text;

    @FindBy(xpath =".//*[@id='search_query_top']")
    //input[@id='search_query_top']
    private  WebElement typing;

    @FindBy(name = "//button[@name='submit_search']")
    //button[starts-with(@name,'submit_search')]
    private WebElement clicks;


    public Homepage(){
        PageFactory.initElements(driver, this);

}
public boolean isUserInHomePage(){
    return text.getText().contains(("Automation Practice Website"));
    }

    public void SearchType(String type){
        typing.sendKeys(type);
    }
    public void clickOnLink(){
        clicks.click();
    }
    public void invvalidType(String intype){
        typing.sendKeys(intype);
    }
    }

