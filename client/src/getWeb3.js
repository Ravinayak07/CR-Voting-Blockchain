import Web3 from "web3";

const getWeb3 = async () => {
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return web3;
    } else if (window.web3) {
      const web3 = new Web3(window.web3.currentProvider);
      console.log("Injected web3 detected.");
      return web3;
    } else {
      console.log("No MetaMask detected. Using local provider.");
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
      const web3 = new Web3(provider);
      return web3;
    }
  } catch (error) {
    console.error("Error initializing web3:", error);
    return null;
  }
};

export default getWeb3;
