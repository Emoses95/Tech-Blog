const User = require("./User");
const TechBlog = require("./Comment");

TechBlog.belongsTo(User, {
    onDelete: "CASCADE"
})
User.hasMany(TechBlog)

module.exports = {
    User,
    TechBlog
}