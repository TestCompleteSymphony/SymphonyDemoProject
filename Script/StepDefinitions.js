//USEUNIT LaunchApplication
//USEUNIT RiskManager
//USEUNIT TradeCapture
//USEUNIT CloseApplications
//USEUNIT Positions


Given("I have launched Risk Manager Application", function (){
 //Launching RiskManager Application
 LaunchApplication["LaunchRiskManager"]();
});

When("I created a Real Portfolio on {arg} as {arg}", function (WorldPortName,RealportName){
  Project["Variables"]["RealPortID"]=RiskManager["CreateRealPortfolio"](WorldPortName,RealportName);
   Log["Message"]("Newly Created Real Portfolio ID is: " +Project["Variables"]["RealPortID"]);
});

Then("I verified the port number for the created Real Portfolio", function (){
  Log["Message"]("Real Portfolio  is Created Successfully ");
  Log["Message"]("Newly Created Real Portfolio ID is: " +Project["Variables"]["RealPortID"]);
});
Then("I Have Closed the RiskManager Application", function(){
  CloseApplications["ClosingRiskManager"]();


});
When("I have Launched Trade Capture application", function (){
  //Launching Trade Capture Application
  LaunchApplication["LaunchTradeCapture"]();
});
When("I created a Physical Buy Trade",function(){
//Create  a Physical Buy Trade
  Project["Variables"]["PhyTrade1"]=TradeCapture["CreatePhysicalTrade"](1,Project["Variables"]["RealPortID"])
  Log["Message"]("Newly Created physical Buy Trade Number is :"+Project["Variables"]["PhyTrade1"]);  
});

Then("I verified the Trade number for the saved Physical Buy Trade", function (){
  Log["Message"]("new physical trade is created successfully on Portfolio number:"+Project["Variables"]["RealPortID"]);
  Log["Message"]("Newly Created physical Buy Trade Number is :"+Project["Variables"]["PhyTrade1"]);
});

When("I created a Physcal Fomula Sale Trade", function (){
  Project["Variables"]["PhyTrade2"]=TradeCapture["CreatePhysicalTrade"](2,Project["Variables"]["RealPortID"]);
  Log["Message"]("Newly Created physical Sell Trade Number is :"+Project["Variables"]["PhyTrade2"]);
});

Then("I verified the Trade number for the saved Physical sale Trade", function (){
  Log["Message"]("New Physical Sell Trade is Created Successfully on Portfolio Number:"+Project["Variables"]["RealPortID"]);
  Log["Message"]("Newly Created physical sell Trade Number is :"+Project["Variables"]["PhyTrade2"]);
});
Then("I Have Closed the TradeCapture Application",function(){
   CloseApplications["ClosingTradeCapture"]();

});
When("I have launched Risk Manager Application", function (){
 Log["Message"]("Launching RiskManager application to verify positions");
  //Launching RiskManager Application
 LaunchApplication["LaunchRiskManager"]();
});

Then("I Checked the Position in Portfolio Manager for the created shipments", function (){
  //validating the data in Positions
  Positions["ReadPositionData"]();
});

Then("verified the Positions with corresponding trades from the App inspector\\/Trade distributions", function (){
  //verifying the positions
  Positions["ValidatePositions"]();
});
When("I have launched Logistics application", function (){
 
});

When("I created the shipment", function (){
  
});

Then("I verified the generated shipment Ids", function (){
 
});

When("I hvae Actualized using BL actuals and verified", function (){
  
});

When("I Propagate Actuals and verified the message {arg}", function (param1){
});

When("I have launched the PASS Application", function (){
  
});

Then("I Run the pass by selecting the tasks compute PL, Price Formula Trade", function (){
  
});

Then("The PASS run is completed successfully", function (){
 
});

Then("Verify the PL in Portfolio Report", function (){
  
});

Then("I verified the Position in Portfolio Manager", function (){
 
});



