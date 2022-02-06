const { Comment } = require('../model');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "It's soo cool!"
    },
    {
        user_id: 4,
        post_id: 3,
        comment_text: "Volleyball!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Bonjour!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "For!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "A!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "How are you"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Doing?!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Bruh?!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;