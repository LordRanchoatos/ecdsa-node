import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1"
import { toHex } from "ethereum-cryptography/utils"


function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivatekey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivatekey(privateKey);
    const address = toHex(secp.getPublicKey(privateKey))
    setAddress(address)
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type an address, for example: 0x1" value={privateKey} onChange={onChange}></input>
      </label>
      <p>{address.slice(0, 20)}...</p>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
