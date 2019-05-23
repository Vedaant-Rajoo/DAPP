var Election = artifacts.require("./Election.sol");  //contract abstraction

module.exports = function(deployer) {
  deployer.deploy(Election);
};
