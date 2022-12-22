const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04c51b8a74f97dea738cb63f326d161315e5a9e7c2603e6c47f99920189df7de3ed7a8bea8b96c35b0ca2aa0a17594e78629142b143875fb0cb65366133e52aebe": 100,
  "04eb08c6111b23e6c6beb169992315742b8f2b9dcee22f3eaf0f7551d6439592837ed06d1d5a222a5ab2730d8ee4798280613d18a57ab687aa5423e3f6921859f4": 50,
  "047f3d8bb479a6369775d43a4905c0c1d6ffbcbb025d454ff36fb79ed06f2f03113568c9c602ccd0af60fd95fdada27a622d52cf70ceba13817bdeba9e23071647": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  //get a signature from the client-side application
  //recover the public address from the signature
  console.log(req)
  const { sender, recipient, amount, message } = req.body;
  console.log(message)

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
