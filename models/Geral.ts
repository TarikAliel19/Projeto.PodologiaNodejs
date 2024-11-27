import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface GeralInstance extends Model{
    id: number,
    QueixaPrincipal:string,
    Costuma_ir_Podólogo: "sim"| "não",
    frequencia: string,
    uso_medicamento:string,
    alergico: "sim"| "não",
    substancias: string,
    posição_trabalho:  "em pé"| "sentado"|"andando"| "duração"| "hs",
    passa_tempo: "em pé"| "sentado"|"caminhando",
    numero_calcado: number,
    Tipo_calcado: string,
    uso_palmilha: "sim"| "não",
    qual: "Ortopédica"| "Descanso",
    Fumante: "sim"| "não",
    Ciclo_mestruacao: "sim"| "não",
    Gestante: "sim"| "não",
    Amamentando: "sim"| "não",
    Dum: Date,
    Pratica_educacao_fisica: "sim"| "não",
    Frequencia: string,
    Qual_esporte_tip_calcado:string



}

export const Geral= sequelize.define<GeralInstance>("Produto,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    QueixaPrincipal:{
        type:DataTypes.STRING
    },
    Costuma_ir_Podólogo:{
        type: DataTypes.ENUM("sim", "não"), // Define os valores possíveis
        allowNull: false,
    },
    frequencia:{
        type:DataTypes.STRING
    },
    uso_medicamento:{
        type:DataTypes.STRING
    },
    alergico:{
        type: DataTypes.ENUM("sim", "não"), // Define os valores possíveis
        allowNull: false,
    },
    substancias:{
        type:DataTypes.STRING
    },
    posição_trabalho:{
        type: DataTypes.ENUM("em pé", "sentado", "andando","duração", "hs"), // Define os valores possíveis
        allowNull: false,
    },
    passa_tempo:{
        type: DataTypes.ENUM("em pé", "sentado", "caminhando"), // Define os valores possíveis
        allowNull: false,
    },
    numero_calcado:{
        type:DataTypes.NUMBER
    },
    tipo_calcado:{
        type:DataTypes.STRING
    },
    uso_palmilha:{
        type: DataTypes.ENUM("sim", "não"), // Define os valores possíveis
        allowNull: false,
    },
    qual:{
        type: DataTypes.ENUM("Ortopédica", "Descanso"), // Define os valores possíveis
        allowNull: false,
    },
    Fumante:{
        type: DataTypes.ENUM("sim", "não"), // Define os valores possíveis
        allowNull: false, 
    },
    Ciclo_mestruacao:{
        type: DataTypes.ENUM("sim", "não"), // Define os valores possíveis
        allowNull: false, 
    },
    Gestante:{
        type: DataTypes.ENUM("sim", "não"), // Define os valores possíveis
        allowNull: false, 
    },
    Amamentando:{
        type: DataTypes.ENUM("sim", "não"), // Define os valores possíveis
        allowNull: false, 
    },
    Dum:{
        type:DataTypes.DATE
    },
    Pratica_educacao_fisica:{
        type: DataTypes.ENUM("sim", "não"), // Define os valores possíveis
        allowNull: false, 
    },
    Frequencia:{
        type:DataTypes.STRING
    },
    Qual_esporte_tip_calcado:{
        type:DataTypes.STRING
    }


    
    
  
    
    
    
    
},{
    tableName:'consulta',
    timestamps:false
})