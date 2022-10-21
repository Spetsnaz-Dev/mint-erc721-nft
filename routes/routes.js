const transactionController = require("../controller/transactions.controller");
const express = require("express");
const router = express.Router();

/* web3 service routes */

// get ERC721 balance
router.get('/getERC721Balance', async (req, res) => {
    try {
        const result = await transactionController.getERC721Balance(req, res);
        // res.status(200).send(result);
        if (result.error != "")
            res.status(400).send(result.error);
        else
            res.status(200).send(result.receipt);
    } catch (error) {
        throw error;
    }
});

// get Owner of NFT
router.get('/ownerOf', async (req, res) => {
    try {
        const result = await transactionController.getOwnerOf(req, res);
        // res.status(200).send(result);
        if (result.error != "")
            res.status(400).send(result.error);
        else
            res.status(200).send(result.receipt);
    } catch (error) {
        throw error;
    }
});

// mint ERC721 NFT to customer wallet
router.post('/mintERC721NFT', async (req, res) => {
    try {
        const result = await transactionController.mintERC721NFT(req, res);
        if (result.error != "")
            res.status(400).send(result.error);
        else
            res.status(200).send(result.receipt);
    } catch (error) {
        throw error;
    }
});

// transfer Ownership
router.post('/transferOwnership', async (req, res) => {
    try {
        const result = await transactionController.transferOwnership(req, res);
        if (result.error != "")
            res.status(400).send(result.error);
        else
            res.status(200).send(result.receipt);
    } catch (error) {
        throw error;
    }
});

// safe transfer from
router.post('/safeTransferFrom', async (req, res) => {
    try {
        const result = await transactionController.safeTransferFrom(req, res);
        if (result.error != "")
            res.status(400).send(result.error);
        else
            res.status(200).send(result.receipt);
    } catch (error) {
        throw error;
    }
});


module.exports = router;