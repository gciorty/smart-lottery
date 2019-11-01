pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether); //require an amount of money to join the lottery

        players.push(msg.sender);
    }

    //pseudo random number
    function randonNumber() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }

    function pickWinner() public restricted{
        uint index = randonNumber() % players.length;
        players[index].transfer(this.balance); //balance that the contract has available
        players = new address[](0);
    }

    function getPlayers() public view returns (address[]){
        return players;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}
