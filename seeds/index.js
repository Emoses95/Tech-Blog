const sequelize = require("../config/connection")
const {User,TechBlog} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate([
        {
            email:"tech@gmail.com",
            password:"password"
        },
        {
            email:"blog@gamil.com",
            password:"ppassword"
        },
        {
            email:"techblog@gmail.com",
            password:"pppassword"
        }
    ],{
        individualHooks:true
    })
const techBlog= techBlog
    const techs = await TechBlog.bulkCreate([
        {
            techBlog:"Why is MVC so important?",
            UserId:1
        },
        {
            techBlog:"Authentication vs Authentication",
            UserId:3
        },
        {
            chirp:"Object-relational mapping",
            UserId:3
        },
    ])
    process.exit(1)
}

seed();