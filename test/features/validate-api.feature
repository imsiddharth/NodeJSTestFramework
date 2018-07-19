Feature: Please verify that the top level structure contains the following fields:
   latitude : float
   longitude : float
   timezone : string
   currently: object
   minutely: object
   hourly: object
   daily: object
   flags: object
   offset : int


  Also verify that the following arrays in the JSON contain the correct number of items:
   In the minutely object, the data array has 61 items
   In the hourly object, the data array has 49 items
   In the daily object, the data array has 8 items

  Scenario: I request the API and verify the API is working
    Given I request for the API
    Then I verify the response code "200"

  Scenario: I verify the type of following key values
    Then I verfy the "latitude" is "floa"
    And I verfy the "longitude" is "float"
    And I verfy the "timezone" is "string"
    And I verfy the "currently" is "object"
    And I verfy the "minutely" is "object"
    And I verfy the "hourly" is "object"
    And I verfy the "flags" is "object"
    And I verfy the "offset" is "int"


  Scenario: I verify the number of item in Data Array
    Then I verfy the "minutely" "data" has "61" items
    And I verfy the "hourly" "data" has "48" items
    And I verfy the "daily" "data" has "8" items




