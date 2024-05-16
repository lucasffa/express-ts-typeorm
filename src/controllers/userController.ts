import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
    constructor(private userService = new UserService()) { }

    register = async (req: Request, res: Response): Promise<void> => {
        const { email, password } = req.body;
        const existingUser = await this.userService.findByEmail(email);
        if (existingUser) {
            res.status(400).send("User already exists");
            return;
        }

        const user = await this.userService.createUser(email, password);
        res.status(201).send({ id: user.id, email: user.email });
    };

    login = async (req: Request, res: Response): Promise<void> => {
        console.log("req: ", req.body)
        try {
            const { email, password } = req.body;
            const user = await this.userService.findByEmail(email);
            if (!user || !(await user.validatePassword(password))) {
                res.status(401).send("Invalid credentials");
                return;
            }

            const token = user.generateJWT();
            res.status(200).send({ token });
        }
        catch (e) {
            console.log("req: ", req.body)
            res.status(500).send( req.body )
        }
    };
}
