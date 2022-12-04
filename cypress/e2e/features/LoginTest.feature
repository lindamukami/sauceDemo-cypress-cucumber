Feature: i want to login with valid and invalid data

    Feature Login to test login authentication after registration
    Background: 

        Given I navigate to the saucedemo website
    Scenario: login as a user with valid credentials
        When User enter valid credentials and clicks on the Login button
            | username | validpassword |
            | standard_user | secret_sauce |
        Then Validate the title after Login

    Scenario: login as a user with invalid credentials
        When User enter invalid credentials and clicks on the Login button
            | username | invalidpassword |
            | standard_user1 | secret_sauce1 |
        Then Error message should display
            | errormessage |
            | Epic sadface: Username and password do not match any user in this service |
