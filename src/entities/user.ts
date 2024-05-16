import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Index } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Index({ unique: true })
    @Column()
    uuid!: string;

    @Index({ unique: true })
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @BeforeInsert()
    async beforeInsert() {
        this.uuid = uuidv4();
        this.password = await bcrypt.hash(this.password, 10);
    }

    generateJWT() {
        return jwt.sign(
            { id: this.id, email: this.email },
            process.env.JWT_SECRET || "qojqwmdkjbrwgyurhgfoqncjkhdbgiyurghjhtbgwef",
            { expiresIn: "1h" }
        );
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}
