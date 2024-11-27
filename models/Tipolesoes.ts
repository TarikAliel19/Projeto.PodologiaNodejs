import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface GeralInstance extends Model{
    id_tipo_lesoes:number,
    descricao: "Bromidrose" | "Hidrose" | "Desidrose" | "Isquemia" | "Mal Perfurante" | "Edema" | "Tínea" | "Psoríase" | "Tungíase"| "Verruga Plantar" | "Calo Dorsal" | "Querotose"| "Calo Plantar"| "Hiperqueratose"|"Calo Interdigital"
}
  





export const Geral= sequelize.define<GeralInstance>("Produto,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    Pratica_educacao_fisica:{
        type: DataTypes.ENUM("Bromidrose","Hidrose","Desidrose" ,"Isquemia" , "Mal Perfurante" , "Edema" ,"Tínea" , "Psoríase" , "Tungíase", "Verruga Plantar" , "Calo Dorsal" , "Querotose","Calo Plantar","Hiperqueratose","Calo Interdigital"), // Define os valores possíveis
        allowNull: false, 
    },
    


    
    
  
    
    
    
    
},{
    tableName:'tipo_lesoes',
    timestamps:false
})