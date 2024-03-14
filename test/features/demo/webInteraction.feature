Feature: Demo feature

  Background: Initial setup
    Given User open a herokuapp webPage

  @TC_002
  Scenario Outline: Create basic test case to open webpage
    # Given User open a herokuapp webPage <Expected_URL>
    When User click on inputs link text
    Then enter some random number in an input box <01234567>

    Examples: 
      | randomNum | Expected_URL                        |
      |  01234567 | https://the-internet.herokuapp.com/ |
# input[type = number]

  @TC_003
  Scenario: Handle dropDown
    When User clicks on dropDown link text
    Then verify user lands on dropDown List page
