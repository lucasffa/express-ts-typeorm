import { userRepository } from "../repositories/userRepository";
import { User } from "../entities/user";

export class UserService {
    constructor(private repository = userRepository) {}

    async createUser(email: string, password: string): Promise<User> {
        const user = this.repository.create({ email, password });
        return this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.repository.findOneBy({ email });
    }
}
