import { useState } from "react";
import server from "./server";
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";
import { toHex } from "ethereum-cryptography/utils";
import * as secp from "ethereum-cryptography/secp256k1";


function Transfer({ address, setBalance, privateKey }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [signature, setsignature] = useState({});

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

  async function signMessage(msg) {
    const signed = await JSON.stringify(secp.sign(msg, privateKey, {recovered: true}));
    // console.log( JSON.stringify(signed))
    // return secp.sign(msg, privateKey, {recovered: true});
    setsignature(signed);
  }

  const hashSign = async (amount) => {
    const message = await JSON.stringify(amount);
    const bytes = await utf8ToBytes(message)
  
    const hashMsg = keccak256(bytes)
    // const bytes = await toHex(message);
    // console.log("this is bytecoode");
    // return "hello"

    await signMessage(hashMsg)
  }

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        // message : `${hashSign(parseInt(sendAmount))}`,
        message : hashSign(parseInt(sendAmount)),
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
