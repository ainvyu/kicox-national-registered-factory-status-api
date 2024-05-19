import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserGroup } from "./user_group.entity";

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'text', nullable: true, comment: "Email as User ID" })
  email: string;

  @Column({ type: 'text', nullable: true, comment: "Password" })
  password: string;

  @Column({ type: 'text', nullable: true, comment: "User Name" })
  username: string;

  @OneToMany((type) => UserGroup, usergroup => usergroup.user, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  groups?: Array<UserGroup>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
