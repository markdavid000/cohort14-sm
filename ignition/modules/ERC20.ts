import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ERC20Module = buildModule("ERC20Module", (m) => {
  const tokenName = "MARKDAVID";
  const tokenSymbol = "MTK";
  const tokenDecimals = 18;
  const initialSupply = 1000000;

  const erc20 = m.contract("ERC20", [
    tokenName,
    tokenSymbol,
    tokenDecimals,
    initialSupply,
  ]);

  return { erc20 };
});

export default ERC20Module;
