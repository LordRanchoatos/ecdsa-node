import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivatekey] = useState("");
  return (
    <div className="app">
      <Wallet
        balance={balance}
        privateKey={privateKey}
        setPrivatekey={setPrivatekey}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}

      />
      <Transfer setBalance={setBalance} address={address} privateKey={privateKey}/>
      <p>to: 04eb08c6111b23e6c6beb169992315742b8f2b9dcee22f3eaf0f7551d6439592837ed06d1d5a222a5ab2730d8ee4798280613d18a57ab687aa5423e3f6921859f4</p>
      <p>from: 502051da8b8b12ceb4500a17f6a7e403de9c9159fe288c21a29f3385bd7ff812</p>
    </div>
  );
}

export default App;
