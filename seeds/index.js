const sequelize = require("../config/connection")
const { User, Comment } = require("../models")

const seed = async () => {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate([
        {
            username: "techg",
            password: "password"
        },
        {
            username: "blogga",
            password: "ppassword"
        },
        {
            username: "techblog",
            password: "pppassword"
        }
    ], {
        individualHooks: true
    })

    const techs = await Comment.bulkCreate([
        {
            techBlog: "Why is MVC so important?",
            UserId: 1
        },
        {
            techBlog: "Authentication vs Authentication",
            UserId: 3
        },
        {
            chirp: "Object-relational mapping",
            UserId: 3
        },
    ])
    process.exit(1)
}

seed();