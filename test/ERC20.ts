import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("ERC20", function () {
  async function deployERC20() {
    // Contracts are deployed using the first signer/account by default
    const [owner] = await hre.ethers.getSigners();

    const ERC20 = await hre.ethers.getContractFactory("ERC20");
    const erc20 = await ERC20.deploy("MarkDavid", "MDTK", 18, 1000000);

    return { erc20, owner };
  }

  describe("Testing Functions", function () {
    it("Should get name", async function () {
      const { erc20 } = await loadFixture(deployERC20);

      const name = await erc20.name();

      expect(name).to.equal("MarkDavid");
    });

    it("Should get symbol", async function () {
      const { erc20, owner } = await loadFixture(deployERC20);

      const symbol = await erc20.symbol();

      expect(symbol).to.equal("MDTK");
    });

    it("Should get total supply", async function () {
      const { erc20 } = await loadFixture(deployERC20);

      const totalSupply = await erc20.totalSupply();

      expect(totalSupply).to.equal(1000000000000000000000000n);
    });

    it("Should get decimal", async function () {
      const { erc20 } = await loadFixture(deployERC20);

      const decimal = await erc20.decimals();

      expect(decimal).to.equal(18);
    });

    it("Should get balanceOf", async function () {
      const { erc20, owner } = await loadFixture(deployERC20);

      const balanceOf = await erc20.balanceOf(owner);

      expect(balanceOf).to.equal(1000000000000000000000000n);

      console.log(balanceOf);
    });
  });
});
