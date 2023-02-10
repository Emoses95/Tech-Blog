const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TechBlog extends Model {}

TechBlog.init({
    // properties
    techBlog: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1,240]
         }
    }
},{
    sequelize
});

module.exports=TechBlog