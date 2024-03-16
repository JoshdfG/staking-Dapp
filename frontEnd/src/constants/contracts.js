import { ethers } from "ethers";
import StakingABI from "./stakingAbi.json";

export const getProposalsContract = (providerOrSigner) => {
  return new ethers.Contract(
    import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
    StakingABI,
    providerOrSigner
  );
};

export const getContract = (provider) =>
  new ethers.Contract(
    import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
    Abi,
    provider
  );

export const getTokenContract = (provider) =>
  new ethers.Contract(
    import.meta.env.VITE_REWARDTOKEN_CONTRACT_ADDRESS,
    tokenAbi,
    provider
  );
