Feature: Validate Login Page

  Background: Set up the base url
    Given Open the sauceDemo homepage with valid url

  @Login
  Scenario Outline: Perform login in sauce Demo homepage
    Then enter valid username <userName> and password <password>
    Then click on Login button

    Examples: 
      | userName                | password     |
      | standard_user           | secret_sauce |
      | locked_out_user         | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |

   

