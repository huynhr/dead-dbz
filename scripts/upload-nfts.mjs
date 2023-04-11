import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const CONTRACT_ADDRESS = "0x55716CF00A1e74F3c885701846d468542376F22B";
const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "ethereum");

(async () => {
  const drop = await sdk.getContract(CONTRACT_ADDRESS, "nft-drop");

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/huynhr/dead-dbz/nfts/0",
      "https://my-json-server.typicode.com/huynhr/dead-dbz/nfts/1",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
})();
