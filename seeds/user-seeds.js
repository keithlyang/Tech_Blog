const { User } = require('../model');

const userData = [
    {
        username: "keith",
        email: "keithluckiyang@gmail.com",
        password: "hhhh"
    },
    {
        username: "tonystark",
        email: "tonystark@gmail.com",
        password: "ironman"
    },
    {
        username: "peterparker",
        email: "peterparker@gmail.com",
        password: "spiderman"
    },
    {
        username: "michaelscott",
        email: "michaelscott@gmail.com",
        password: "thatswhatshesaid"
    },
    {
        username: "1967impala",
        email: "deanwinchester@gmail.com",
        password: "winchester"
    },
    {
        username: "darthvader",
        email: "darthvader@gmail.com",
        password: "force"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;