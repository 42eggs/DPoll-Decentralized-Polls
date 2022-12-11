// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

//MASSIVE OPTIMIZATION REQUIRED
//Find a way to use time/date in solidity in order to calculate end time of a vote
//Need to limit string length for title, descriptions and options (maybe something with bytes?)

contract DPoll {
    event voteRecorded(address indexed voter, uint indexed option_indexed);
    string title;
    string description;
    string[] options;
    mapping(uint => uint) optionsWithVotes;
    uint immutable totalEligibleVoters;
    uint votersWhoHaveVoted;
    struct Voter {
        bool isEligibleForVoting;
        bool hasVoted;
        uint hasVotedOn;
    }
    mapping(address => Voter) voters;
    uint immutable endBlockTime;
    address immutable creator;

    constructor(
        string memory _title,
        string memory _description,
        string[] memory _options,
        address[] memory _eligbleVoters,
        uint _endBlockTime,
        address _creator
    ) {
        title = _title;
        description = _description;
        options = _options;
        totalEligibleVoters = _eligbleVoters.length;
        for (uint i = 0; i < totalEligibleVoters; i++) {
            voters[_eligbleVoters[i]].isEligibleForVoting = true;
        }
        endBlockTime = _endBlockTime;
        creator = _creator;
    }

    //this lets an eligible candidate vote, if not already voted and returns true when the entire function executes successfully
    function vote(address _candidate, uint _optionIndex) public returns (bool) {
        require(!votingTimeHasEnded(), "Voting time has ended!");
        require(isEligibleForVoting(_candidate), "Not eligible for voting");
        require(!hasVoted(_candidate), "You have already voted");
        voters[_candidate].hasVoted = true;
        voters[_candidate].hasVotedOn = _optionIndex;
        optionsWithVotes[_optionIndex]++;
        votersWhoHaveVoted++;
        emit voteRecorded(_candidate, _optionIndex);
        return true;
    }

    //gets the winning option
    function fetchWinningOption() public view returns (uint winningOption) {
        require(votingTimeHasEnded(), "Voting time has not ended!");
        uint sum = optionsWithVotes[0];
        for (uint i = 1; i < options.length; i++) {
            if (optionsWithVotes[i] > sum) {
                sum = optionsWithVotes[i];
                winningOption = i;
            }
        }
    }

    //check if an address is eligible for voting in this contract's poll
    function isEligibleForVoting(
        address _candidate
    ) public view returns (bool) {
        return voters[_candidate].isEligibleForVoting;
    }

    //check if an eligible address has voted in this poll
    function hasVoted(address _candidate) public view returns (bool) {
        return voters[_candidate].hasVoted;
    }

    //check which option index has been chosen by the address
    function hasVotedOnOptionIndex(
        address _candidate
    ) public view returns (uint) {
        require(hasVoted(_candidate), "Candidate has not voted yet");
        return voters[_candidate].hasVotedOn;
    }

    //get the option string chosen by the address
    function hasVotedOnOptionName(
        address _candidate
    ) public view returns (string memory) {
        require(hasVoted(_candidate), "Candidate has not voted yet");
        return getOptionString(voters[_candidate].hasVotedOn);
    }

    function getVotersWhoHaveVoted() public view returns (uint) {
        return votersWhoHaveVoted;
    }

    //gets the option string based on the index
    function getOptionString(uint _index) public view returns (string memory) {
        return options[_index];
    }

    //gets all the options as an array of strings
    function getAllOptions() public view returns (string[] memory) {
        return options;
    }

    //gets all the votes for a particular option index
    function getNumOfVotes(uint _optionIndex) public view returns (uint) {
        return optionsWithVotes[_optionIndex];
    }

    //get array of total votes according to the indexed by optionIndex
    function getArrayOfVotes() public view returns (uint[] memory) {
        uint[] memory numVotesArray = new uint[](totalEligibleVoters);
        for (uint i = 0; i < totalEligibleVoters; i++) {
            numVotesArray[i] = optionsWithVotes[i];
        }
        return numVotesArray;
    }

    //check if voting time has ended
    function votingTimeHasEnded() public view returns (bool) {
        return endBlockTime < block.timestamp;
    }
}