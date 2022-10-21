const NFTContract = artifacts.require("NFTContract");
console.log(NFTContract);
module.exports = function (deployer) {
  deployer.deploy(NFTContract);
};