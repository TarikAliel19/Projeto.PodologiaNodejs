import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface GeralInstance extends Model{
    id_tipo_lesoes:number,
    PD:  "Normal" | "Pálido" | "Cianótico",
    PE:"Normal" | "Pálido" | "Cianótico"
}
  





export const Geral= sequelize.define<GeralInstance>("Produto,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    PD:{
        type: DataTypes.ENUM("Normal","Pálido" ,"Cianótico"),
        allowNull: false, 
    },
    PE:{
        type: DataTypes.ENUM("Normal","Pálido" ,"Cianótico"),
        allowNull: false, 
    },

    


    
    
  
    
    
    
    
},{
    tableName:'tipo_perfusao',
    timestamps:false
})