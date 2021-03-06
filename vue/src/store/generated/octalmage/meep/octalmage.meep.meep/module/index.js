// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteUsername } from "./types/meep/tx";
import { MsgUpdateThread } from "./types/meep/tx";
import { MsgCreatePost } from "./types/meep/tx";
import { MsgCreateThread } from "./types/meep/tx";
import { MsgCreateTip } from "./types/meep/tx";
import { MsgDeleteTip } from "./types/meep/tx";
import { MsgDeletePost } from "./types/meep/tx";
import { MsgUpdateUsername } from "./types/meep/tx";
import { MsgDeleteThread } from "./types/meep/tx";
import { MsgCreateUsername } from "./types/meep/tx";
import { MsgUpdateTip } from "./types/meep/tx";
import { MsgUpdatePost } from "./types/meep/tx";
const types = [
    ["/octalmage.meep.meep.MsgDeleteUsername", MsgDeleteUsername],
    ["/octalmage.meep.meep.MsgUpdateThread", MsgUpdateThread],
    ["/octalmage.meep.meep.MsgCreatePost", MsgCreatePost],
    ["/octalmage.meep.meep.MsgCreateThread", MsgCreateThread],
    ["/octalmage.meep.meep.MsgCreateTip", MsgCreateTip],
    ["/octalmage.meep.meep.MsgDeleteTip", MsgDeleteTip],
    ["/octalmage.meep.meep.MsgDeletePost", MsgDeletePost],
    ["/octalmage.meep.meep.MsgUpdateUsername", MsgUpdateUsername],
    ["/octalmage.meep.meep.MsgDeleteThread", MsgDeleteThread],
    ["/octalmage.meep.meep.MsgCreateUsername", MsgCreateUsername],
    ["/octalmage.meep.meep.MsgUpdateTip", MsgUpdateTip],
    ["/octalmage.meep.meep.MsgUpdatePost", MsgUpdatePost],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteUsername: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgDeleteUsername", value: data }),
        msgUpdateThread: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgUpdateThread", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgCreatePost", value: data }),
        msgCreateThread: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgCreateThread", value: data }),
        msgCreateTip: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgCreateTip", value: data }),
        msgDeleteTip: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgDeleteTip", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgDeletePost", value: data }),
        msgUpdateUsername: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgUpdateUsername", value: data }),
        msgDeleteThread: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgDeleteThread", value: data }),
        msgCreateUsername: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgCreateUsername", value: data }),
        msgUpdateTip: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgUpdateTip", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgUpdatePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
