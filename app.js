let provider, signer;
const stakingAddress = "STAKING_CONTRACT_ADDRESS";
const tokenAddress = "0xE8f73AA5B17E8879D6C9d8B84DaACA68B34fB957";

async function connectWallet() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  alert("Wallet Connected");
}

async function stake() {
  alert("Stake function will call SUNZ staking contract");
}

async function claim() {
  alert("Claim function will call staking contract");
}

