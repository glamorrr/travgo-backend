import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'app_user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @BeforeInsert()
  async hashPassword() {
    console.log('password', this.password);
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
