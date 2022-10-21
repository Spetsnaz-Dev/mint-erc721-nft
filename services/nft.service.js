const Web3 = require("web3");
require("dotenv").config();
const Tx = require('ethereumjs-tx');
const NFTContract = require("../build/contracts/NFTContract.json");
const RPC_Provider = process.env.RPC_PROVIDER;
const senderAccount = process.env.SENDER;

// ERC721 balance
exports.getERC721Balance = async (walletAddress) => {
    let response = {
        error: "",
        receipt: undefined
    };
    let web3 = new Web3(process.env.RPC_PROVIDER);

    const nftContract = new web3.eth.Contract(
        NFTContract.abi,
        process.env.CONTRACT_ADDRESS
    );
    let NFTContractsReceipt = await nftContract.methods.balanceOf(walletAddress).call();
    console.log("NFTContractsReceipt: ", NFTContractsReceipt);

    response.receipt = NFTContractsReceipt;
    return response;
}
// ownerOf()
exports.getOwnerOf = async (tokenId) => {
    let response = {
        error: "",
        receipt: undefined
    };
    let web3 = new Web3(process.env.RPC_PROVIDER);

    const nftContract = new web3.eth.Contract(
        NFTContract.abi,
        process.env.CONTRACT_ADDRESS
    );
    let NFTContractsReceipt = await nftContract.methods.ownerOf(tokenId).call();
    console.log("NFTContractsReceipt: ", NFTContractsReceipt);

    response.receipt = NFTContractsReceipt;
    return response;
}

// mint ERC721 NFT
exports.mintERC721NFT = async (toAddress, tokenURI) => {
    let response = {
        error: "",
        receipt: undefined
    };
    let web3 = new Web3(process.env.RPC_PROVIDER);
    // let web3 = new Web3("ws://127.0.0.1:7545");

    // Mint ERC721 NFT 
    const nftContract = new web3.eth.Contract(
        NFTContract.abi,
        process.env.CONTRACT_ADDRESS
    );

    const gasPrice = await web3.eth.getGasPrice();
    const data = nftContract.methods.safeMint(toAddress, tokenURI).encodeABI();
    if (data == '' || data == null) {
        console.log("Some error occurred while interacting with the contract!");
        response.error = "Some error occurred while interacting with the contract!";
        return response;
    }
    const nonce = await web3.eth.getTransactionCount(senderAccount);

    const txParams = {
        chainId: 80001, // for mumbai test-net
        nonce: web3.utils.toHex(nonce),
        to: process.env.CONTRACT_ADDRESS,
        data: data,
        value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit: web3.utils.toHex('20000000'),
        gasPrice: web3.utils.toHex(gasPrice)
    };

    const tx = new Tx(txParams);
    const pk = Buffer.from(process.env.PKEY, 'hex');
    tx.sign(pk);
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('Hex');

    const NFTContractsReceipt = await web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if (err) {
            console.debug(err);
            response.error = String(err);
            return response;
        }
        console.log(txHash);
        return txHash;
    });
    console.log("Mint ERC721 hash: ", NFTContractsReceipt.transactionHash);
    response.receipt = NFTContractsReceipt;
    return response;
}

// transferOwnership
exports.transferOwnership = async (newOwnerAddress) => {
    let response = {
        error: "",
        receipt: undefined
    };
    let web3 = new Web3(process.env.RPC_PROVIDER);
    // let web3 = new Web3("ws://127.0.0.1:7545");

    // Mint ERC721 NFT 
    const nftContract = new web3.eth.Contract(
        NFTContract.abi,
        process.env.CONTRACT_ADDRESS
    );

    const gasPrice = await web3.eth.getGasPrice();
    const data = nftContract.methods.transferOwnership(newOwnerAddress).encodeABI();
    if (data == '' || data == null) {
        console.log("Some error occurred while interacting with the contract!");
        response.error = "Some error occurred while interacting with the contract!";
        return response;
    }
    const nonce = await web3.eth.getTransactionCount(senderAccount);

    const txParams = {
        chainId: 80001, // for mumbai test-net
        nonce: web3.utils.toHex(nonce),
        to: process.env.CONTRACT_ADDRESS,
        data: data,
        value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit: web3.utils.toHex('20000000'),
        gasPrice: web3.utils.toHex(gasPrice)
    };

    const tx = new Tx(txParams);
    const pk = Buffer.from(process.env.PKEY, 'hex');
    tx.sign(pk);
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('Hex');

    const NFTContractsReceipt = await web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if (err) {
            console.debug(err);
            response.error = String(err);
            return response;
        }
        console.log(txHash);
        return txHash;
    });
    console.log("Mint ERC721 hash: ", NFTContractsReceipt.transactionHash);
    response.receipt = NFTContractsReceipt;
    return response;
}

// safeTransferFrom(address from, address to, uint256 tokenId)
exports.safeTransferFrom = async (from, to, tokenId) => {
    let response = {
        error: "",
        receipt: undefined
    };
    let web3 = new Web3(process.env.RPC_PROVIDER);
    // let web3 = new Web3("ws://127.0.0.1:7545");

    // Mint ERC721 NFT 
    const nftContract = new web3.eth.Contract(
        NFTContract.abi,
        process.env.CONTRACT_ADDRESS
    );

    const gasPrice = await web3.eth.getGasPrice();
    const data = nftContract.methods.safeTransferFrom(from, to, tokenId).encodeABI();
    if (data == '' || data == null) {
        console.log("Some error occurred while interacting with the contract!");
        response.error = "Some error occurred while interacting with the contract!";
        return response;
    }
    const nonce = await web3.eth.getTransactionCount(senderAccount);

    const txParams = {
        chainId: 80001, // for mumbai test-net
        nonce: web3.utils.toHex(nonce),
        to: process.env.CONTRACT_ADDRESS,
        data: data,
        value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit: web3.utils.toHex('20000000'),
        gasPrice: web3.utils.toHex(gasPrice)
    };

    const tx = new Tx(txParams);
    const pk = Buffer.from(process.env.PKEY, 'hex');
    tx.sign(pk);
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('Hex');

    const NFTContractsReceipt = await web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if (err) {
            console.debug(err);
            response.error = String(err);
            return response;
        }
        console.log(txHash);
        return txHash;
    });
    console.log("Mint ERC721 hash: ", NFTContractsReceipt.transactionHash);
    response.receipt = NFTContractsReceipt;
    return response;
}
