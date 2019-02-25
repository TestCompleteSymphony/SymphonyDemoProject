Feature:Create real portfolio in RM, create physical buy and sell trades, create allocation, run pass and verify PL report

  @SmokeTest   
  Scenario: creation of Physical BUY and SELL Trade,Allocate Trades

    Given User Launched Risk Manager Application 
    When User created a Real Portfolio Under World Portfolio "3.3.2 Test","00RealPort1"
    When User Launched Trade Capture Application
    When User Created a Physical Buy Trade
    And  User Created a Physical Sell Trade
    When User Opens Risk Manager Application and Verify trade Position
    Then User Successfully Verified Positions of the Above Created Physical Trades in Risk Manager 
    When User Launched Logistics Application
    And User Created the Shipment with Physical Buy and Sell Trades
    Then User Closed Application

   