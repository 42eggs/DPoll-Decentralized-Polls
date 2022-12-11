// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

//MASSIVE OPTIMIZATION REQUIRED
//Need to limit string length for title, descriptions and options (maybe something with bytes?)
//Find a way to use time/date in solidity in order to calculate end time of a vote

import "./DPoll.sol";

contract DPollFactory {
    event pollCreated(address indexed dpoll_address, address indexed creator);

    //addresses array of the polls
    address[] pollsList;

    // Function to create a new instance of the poll contract
    function createPoll(
        string memory title,
        string memory description,
        string[] memory options,
        address[] memory eligbleVoters,
        uint256 endBlockTime
    ) public {
        require(
            endBlockTime > block.timestamp,
            "End Block cannot be less than current block"
        );
        address newPoll = address(
            new DPoll(
                title,
                description,
                options,
                eligbleVoters,
                endBlockTime,
                address(msg.sender)
            )
        );
        pollsList.push(newPoll);
        emit pollCreated(newPoll, msg.sender);
    }

    // Retrieve the number of Polls
    function getNumOfPolls() public view returns (uint256) {
        return pollsList.length;
    }

    //Returns all the Polls' addresses
    function getAllPolls() public view returns (address[] memory) {
        return pollsList;
    }
}
