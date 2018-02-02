package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utils.Hooks;

import java.util.Random;

public class RegisterPage extends Hooks {


   @FindBy(className = ".//*[@id='header']/div[2]/div/div/nav/div[1]/a")
   //a[contains(@href,'login')]
   private WebElement signin;

   @FindBy(xpath = ".//*[@id='email_create']")
        //input[@id='email_create']
   private WebElement regemail;

   @FindBy(xpath = ".//*[@id='SubmitCreate']")
   //button[starts-with(@id,'SubmitCreate')]
   private WebElement clickanaccount;

   @FindBy(id = "customer_firstname")
   //input[@id='customer_firstname']
   private WebElement finame;

   @FindBy(id = "customer_lastname")
   //input[@name='customer_lastname'
   private WebElement laname;

   @FindBy(id = "passwd")
   //input[@name='passwd']
   private WebElement passwrd;

   @FindBy(id = "address1")
   //input[@id='address1']
   private  WebElement addrs;

   @FindBy(id = "city")
   //input[@id='city']
   private WebElement cty;

   @FindBy(id = "id_state")
   //input[@id='id_state']
   private WebElement state;

   @FindBy(id = "postcode")
   //input[@id='postcode']
   private WebElement postcode;

   @FindBy(id = "phone_mobile")
   //input [@id='phone_mobile']
   private WebElement phone;

   @FindBy(id = "submitAccount")
   //button[starts-with(@id,'submitAccount')]
   private WebElement register;

   public RegisterPage(){
      PageFactory.initElements(driver, this);
   }

   public void enterEmail(){
      Random r=new Random();
      int val = r.nextInt();
      regemail.sendKeys("enter" + val + "@gmail.com");
   }
   public void signinClick(){
       signin.click();
   }

   public void accountClick(){
      clickanaccount.click();
   }
 public void entervalues(String fname, String lname, String pwd){
      finame.sendKeys(fname);
      laname.sendKeys(lname);
      passwrd.sendKeys(pwd);

 }
 public void addressCity(String address, String city){
      addrs.sendKeys(address);
      cty.sendKeys(city);
 }
 public void selectDropdownState(){
    Select State_dropdown=new Select(state);
    State_dropdown.selectByIndex(2);
 }

 public void zipMobile(String zipcode, String mobile){
      postcode.sendKeys(zipcode);
      phone.sendKeys(mobile);
 }

 public void registerBtn(){
      register.click();
 }


























}
