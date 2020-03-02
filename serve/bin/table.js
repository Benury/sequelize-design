var json = [
    {
        table_name:'User',
        table_cols:[
            {col:'id', type:'Sequelize.INTEGER', allowNull:false, defaultValue:'', primaryKey:true, autoIncrement:true},
            {col:'name', type:'Sequelize.STRING', allowNull:false, defaultValue:'', primaryKey:'', autoIncrement:''},

        ]
    },
    {
        table_name:'Info',
        table_cols:[
            {col:'id', type:'Sequelize.INTEGER', allowNull:false, defaultValue:'', primaryKey:true, autoIncrement:true},
            {col:'info', type:'Sequelize.STRING', allowNull:false, defaultValue:'', primaryKey:'', autoIncrement:''},
            
        ]
    }
]