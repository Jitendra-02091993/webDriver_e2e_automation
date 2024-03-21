Feature: Validate the Swag Labs homepage

  Background: Set up the base url
    Given Open the sauceDemo homepage with valid url

  @homepage
  Scenario Outline: Validate the products is displayed on homepage
    When enter valid username and password
    Then click on Login button
    Then check user Navigated to homepage
    Then fetch the list of all items
    Then check price of all items is greater than <price>

    Examples: 
      | price |
      |     0 |
