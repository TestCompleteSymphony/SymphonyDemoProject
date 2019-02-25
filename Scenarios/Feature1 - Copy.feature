Feature: Creating Shipment with Physical Trades and Successfully generating PASS on Portfolio

  @SmokeTest
  Scenario: Successfull creation of Phycal BUY/SELL Trades and Allocations by Running PASS 
    Given I have launched Risk Manager Application 
    When I created a Real Portfolio on "3.3.2 Test" as "AutoScena3" 
    Then I verified the port number for the created Real Portfolio
    Then I Have Closed the RiskManager Application
    When I have Launched Trade Capture application
    When I created a Physical Buy Trade
    Then I verified the Trade number for the saved Physical Buy Trade 
    When I created a Physcal Fomula Sale Trade
    Then I verified the Trade number for the saved Physical sale Trade
    Then I Have Closed the TradeCapture Application
    When I have launched Risk Manager Application
    Then I Checked the Position in Portfolio Manager for the created shipments 
    And verified the Positions with corresponding trades from the App inspector/Trade distributions
    When I have launched Logistics application 
    When I created the shipment
    Then I verified the generated shipment Ids
    When I hvae Actualized using BL actuals and verified 
    When I Propagate Actuals and verified the message "Actual is propagated successfully"
    When I have launched the PASS Application
    Then I Run the pass by selecting the tasks compute PL, Price Formula Trade 
    And The PASS run is completed successfully
    When I have launched Risk Manager Application
    Then Verify the PL in Portfolio Report
    And I verified the Position in Portfolio Manager