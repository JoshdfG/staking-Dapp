import { ethers } from "ethers";
import useGetPools from "../hooks/useGetPools";
import { Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useHandleStakeApproval from "../hooks/useHandleStakeApproval";
import useStake from "../hooks/useStake";
import useClaimReward from "../hooks/useClaimReward";
import useUnstake from "../hooks/useUnstake";

const PoolTable = () => {
  const data = useGetPools();

  const [amount, setAmount] = useState("");

  const formatter = (value) => {
    let num = Number(value);
    let str = String(num);
    let res = ethers.formatUnits(str, 18);
    return res;
  };

  const handleApproval = useHandleStakeApproval();

  const handleStake = useStake(amount);

  const handleRewardClaim = useClaimReward();

  const handleUnstake = useUnstake();

  return (
    <div
      className=" w-full mt-4 overflow-y-scroll "
      style={{ overflowY: "scroll", scrollbarWidth: "none" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-4">
        {data.map((item, index) => (
          <div key={index} className="bg-black/40 rounded-lg shadow-md p-4">
            <div className="font-light mb-2 pb-2 border-b flex justify-between">
              S/N: <span>{index}</span>{" "}
            </div>
            <div className="font-light mb-2 pb-2 border-b flex justify-between">
              Pool: <span> #{index}</span>
            </div>
            <div className="font-light mb-2 pb-2 border-b flex justify-between">
              Total Stakers: <span>{Number(item.totalStakers.toString())}</span>
            </div>
            <div className="font-light mb-2 pb-2 border-b flex justify-between">
              Total Staked: <span> {formatter(item.totalStaked)}</span>
            </div>
            <div className="font-light mb-2 pb-2 border-b flex justify-between">
              Reward Reserve: <span>{formatter(item.rewardReserve)}</span>
            </div>
            <div className="font-light mb-2 pb-2 border-b flex justify-between">
              Reward Rate: <span>{Number(item.rewardRate)}</span>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <Dialog.Root>
                <button
                  onClick={handleApproval}
                  className="bg-green-600 hover:bg-green-800 flex items-center gap-1 text-sm px-1 py-1.5 rounded text-slate-100"
                >
                  Approve
                </button>
                <Dialog.Trigger>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm px-1 py-1.5 rounded-md">
                    Stake
                  </button>
                </Dialog.Trigger>
                <Dialog.Content
                  style={{ maxWidth: 450 }}
                  className="p-4 bg-white rounded-lg shadow-lg"
                >
                  <Dialog.Title>Staking</Dialog.Title>
                  <Dialog.Description size="2" mb="4">
                    Approve this contract before you stake
                  </Dialog.Description>
                  <div className="flex flex-col gap-3">
                    <label>
                      <div className="text-sm mb-1 font-bold">Stake Amount</div>
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter stake amount"
                        className="border border-gray-300 px-3 py-1 rounded text-sm"
                      />
                    </label>
                  </div>
                  <div className="flex gap-3 mt-4 justify-end">
                    <Dialog.Close>
                      <button className="bg-gray-300 text-sm px-4 py-2 rounded">
                        Cancel
                      </button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <button
                        onClick={() => handleStake(item.index)}
                        className="bg-blue-500 text-white text-sm px-4 py-2 rounded"
                      >
                        Stake
                      </button>
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Root>
              <button
                onClick={() => handleRewardClaim(item.index)}
                className="bg-orange-600 hover:bg-orange-800 text-white text-sm px-1  py-1.5  rounded-md"
              >
                Reward
              </button>
              <button
                onClick={() => handleUnstake(item.index)}
                className="bg-rose-600 hover:bg-rose-800 text-white text-sm px-1 py-1.5  rounded-md"
              >
                Unstake
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolTable;
