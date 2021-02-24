import { ResourceOptions } from "admin-bro";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export const options: ResourceOptions = { navigation: { icon: 'GameConsole' } };

@Entity()
export class GameType extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
}
