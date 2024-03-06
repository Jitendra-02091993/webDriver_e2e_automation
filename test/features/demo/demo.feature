Feature: Demo feature

    @TC_001
    Scenario Outline: Create basic test case to open webpage
        Given User open a Google page
        When User search with <SearchItem>
        Then click on the first search result
        Then URL should match <Expected_URL>

        Examples:
            | TestId     | SearchItem | Expected_URL          |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |