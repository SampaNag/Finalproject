Feature: checking required/mandatory fields are marked with * functionality otpion
  @register
  Scenario: verify all * fields are working with valid data
    Given user is in homepage
    When user clicks on Sign in button
    And enters the email address
    And clicks on create an account button
    And types in Firstname "Sam" Lastname "Roy"  password "asd1234"
    And type in address "xyz" city "abc"
    And select state as "Alaska"
    And type in zipcope as "73002" mobil phone "9876543209"
    And user clicks on Register button
    Then user is able to register and land on the page with the message "Welcome to your account"