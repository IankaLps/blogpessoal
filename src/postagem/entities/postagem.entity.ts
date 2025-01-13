import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"}) // CREATE TABLE tb_postagens
export class Postagem{

    @PrimaryGeneratedColumn()  // INT AUTO_INCREMENT PRIMARY KEY
    id: number;

    @IsNotEmpty() // Validação dos dados do objetos
    @Column({length: 100, nullable: false}) // VARHCHAR (100) NOT NULL
    titulo: string;

    @IsNotEmpty() // Validação dos dados do objetos
    @Column({length: 1000, nullable: false}) // VARHCHAR (1000) NOT NULL
    texto: string;

    @UpdateDateColumn() // Atualiza a data e hora automaticamente
    data: Date;

}