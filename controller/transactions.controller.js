const services = require("../services/nft.service");

exports.getERC721Balance = async (req, res) => {
	try {
		let apiResponse = await services.getERC721Balance(req.body.wallet_address);
		return apiResponse;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

exports.getOwnerOf = async (req, res) => {
	try {
		let apiResponse = await services.getOwnerOf(req.body.token_id);
		return apiResponse;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

exports.mintERC721NFT = async (req, res) => {
	try {
		let apiResponse = await services.mintERC721NFT(
			req.body.to_address,
			req.body.token_uri
		);
		return apiResponse;
	} catch (error) {
		throw error;
	}
};

exports.transferOwnership = async (req, res) => {
	try {
		let apiResponse = await services.transferOwnership(
			req.body.new_owner
		);
		return apiResponse;
	} catch (error) {
		throw error;
	}
};

exports.safeTransferFrom = async (req, res) => {
	try {
		let apiResponse = await services.safeTransferFrom(
			req.body.from,
			req.body.to,
			req.body.token_id
		);
		return apiResponse;
	} catch (error) {
		throw error;
	}
};