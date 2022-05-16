
const hre = require("hardhat");

async function main() {
  
  const Ewitter = await hre.ethers.getContractFactory("Ewitter");
  const ewitter = await Ewitter.deploy();

  await ewitter.deployed();

  console.log("Ewitter deployed to:", ewitter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
