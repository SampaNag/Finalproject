import Pages.Homepage;
import Pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import utils.WebDriverUtil;

import static junit.framework.TestCase.assertTrue;

public class Regpage_MyStepdefs {
    RegisterPage registerPage;
    Homepage homepage;

    @Given("^user is in homepage$")
    public void userIsInHomepage() {
        homepage=new Homepage();
        Assert.assertTrue(homepage.isUserInHomePage());
    }

    @When("^user clicks on Sign in button$")
    public void userClicksOnSignInButton() {
        homepage=new Homepage();

        }

    @And("^enters the email address$")
    public void entersTheEmailAddress() {
        registerPage=new RegisterPage();
        registerPage.enterEmail();
    }

    @And("^clicks on create an account button$")
    public void clicksOnCreateAnAccountButton() {
        registerPage.accountClick();
        WebDriverUtil.waittime();
    }

    @And("^types in Firstname \"([^\"]*)\" Lastname \"([^\"]*)\"  password \"([^\"]*)\"$")
    public void typesInFirstnameLastnamePassword(String fname, String lname, String pwd) {
        registerPage.entervalues(fname, lname, pwd);
    }

    @And("^type in address \"([^\"]*)\" city \"([^\"]*)\"$")
    public void typeInAddressCity(String address, String city) {
        registerPage.addressCity(address, city);
    }

    @And("^select state as \"([^\"]*)\"$")
    public void selectStateAs(String arg0){
        registerPage.selectDropdownState();
    }

    @And("^type in zipcope as \"([^\"]*)\" mobil phone \"([^\"]*)\"$")
    public void typeInZipcopeAsMobilPhone(String zipcode, String mobile) {
        registerPage.zipMobile(zipcode, mobile);
    }

    @And("^user clicks on Register button$")
    public void userClicksOnRegisterButton(){
        registerPage.registerBtn();
    }

    @Then("^user is able to register and land on the page with the message \"([^\"]*)\"$")
    public void userIsAbleToRegisterAndLandOnThePageWithTheMessage(String Text) {
        assertTrue(WebDriverUtil.isTextPresent(Text));
    }
}
