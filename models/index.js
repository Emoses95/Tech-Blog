const User= require("./User");
const TechBlog = require("./TechBlog");

TechBlog.belongsTo(User,{
    onDelete:"CASCADE"
})
User.hasMany(TechBlog)

module.exports = {
    User,
    TechBlog
}