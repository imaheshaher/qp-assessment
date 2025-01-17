import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GroceryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ default: 1 })
  quantity: number;
}
