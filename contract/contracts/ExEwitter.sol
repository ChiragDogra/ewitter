// //SPDX-License-Identifier: Unlicensed
// pragma solidity ^0.8.4;

// import "hardhat/console.sol";

// contract Ewitter{
    // string name;  Instead of doing this if we will set name to Chirag directly then we won't need a constructor below that is explicitly setting name equals to chirag

    // string public name = "Chirag"; //if we will make this string public then we don't need the getname function below

    // constructor (string memory _name) public {
    //     name = _name;
    // }

//  Here getname is a function public is the visibility which returns a string that is name
    // function getName() public view returns (string memory){
    //     return name;
    // }

    // function setName(string memory _name) public {
    //     name = _name;
    // }




    // struct Tweet{
    //     address author;
    //     string content;
    //     uint timestamp;
    // }

    // mapping(address => Tweet[]) public tweets;

    // function post(string _content) public {
    //     require (msg.sender != address(0));

    //     Tweet tweet = Tweet({})
    // }
// }