import { DataSource } from "typeorm";
import { BlogPost } from "./BlogPost";
import { Author } from "./Author";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "my-blog.db",
    synchronize: true,
    logging: true,
    entities: [BlogPost, Author],
    subscribers: [],
    migrations: [],
});