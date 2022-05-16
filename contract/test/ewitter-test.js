const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ewitter", function () {
  it("Test ewitter signup flow", async function () {
    const Ewitter = await ethers.getContractFactory("Ewitter");
    const [user1, user2] = await  ethers.getSigners();
    const ewitter = await Ewitter.deploy(); //If you've set value of the string directly then you don't have to pass anything to the constructor
    await ewitter.deployed();

    await ewitter.signup("chirag", "Chirag", "Some bio", "someUrl");
    console.log("signing up user for chirag....");

    const user = await ewitter.users("chirag");
    expect(user.name).to.equal("Chirag");
    expect(user.bio).to.equal("Some bio");
    expect(user.avatar).to.equal("someUrl");
    console.log("test signup is successful");

    const userFromAddress = await ewitter.getUser(user1.address);
    expect(userFromAddress.username).to.equal("chirag")
    expect(userFromAddress.name).to.equal("Chirag");
    expect(userFromAddress.bio).to.equal("Some bio");
    expect(userFromAddress.avatar).to.equal("someUrl");
    console.log("test signup is successful")

    expect(await ewitter.usernames(user1.address)).to.equal("chirag");
    await expect(ewitter.signup("", "", "", "")).to.be.revertedWith(
      "User already exists"
    )

    await expect(ewitter.connect(user2).signup("chirag", "Chirag", "Some other bio", "someAvatar")).to.be.revertedWith(
      "Username is taken please try another one"
    )  
    console.log("test user already exists error")
  });
});
