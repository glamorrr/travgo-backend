export declare class User {
    id: string;
    email: string;
    password: string;
    phoneNumber: string;
    hashPassword(): Promise<void>;
}
