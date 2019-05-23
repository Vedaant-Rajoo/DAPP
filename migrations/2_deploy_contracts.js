var Election = artifacts.require("./Election.sol");  //contract abstraction

module.exports = function(deployer) {   //deploy the contract
  deployer.deploy(Election);
};
