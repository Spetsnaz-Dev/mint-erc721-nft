// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTContract is ERC721URIStorage {
    address public owner;
    uint256 private tokenId;

    constructor() ERC721("NFTContract", "NFTC") {
        owner = msg.sender;
        tokenId = 0;
    }

    // ownership transfer event logging
    event OwnershipTransferred(
        address indexed _previousOwner,
        address indexed _newOwner
    );

    // get current owner
    function getOwner() public view returns(address) {
        return owner;
    }

    /*
     * to address is the address to which NFT will be minted.
     * tokenId is passed from API
     * tokenURI is passed from API
    */
    function safeMint(address _to, string memory _tokenURI) public onlyOwner {
        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        tokenId += 1;
    }

    // transfer ownership
    function transferOwnership(address _newOwner) external onlyOwner {
        require(
            _newOwner != address(0),
            "Ownable: new owner is the zero address"
        );
        emit OwnershipTransferred(owner, _newOwner);
        owner = _newOwner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Non owners not authorised!");
        _;
    }
}