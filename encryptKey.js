const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.ADDR1);
  const encryptedJsonKey = await wallet.encrypt(process.env.ADDR1_PASSWORD, process.env.ADDR1);
  fs.writeFileSync('./.encryptedKey.json', encryptedJsonKey);
}

main().then(() =>
  process.exit(0).catch(err => {
    console.error(err);
    process.exit(1);
  })
);