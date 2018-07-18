Feature: Bill opens Emirates websites and book ticket

  Scenario: Bill wants to travel from DXB to LHR
    Given Bill has decided to check available flights
    When Bill looks at a return trip from "DXB" to "LHR" leaving one week from now
    Then Bill sees the cheapest return ticket