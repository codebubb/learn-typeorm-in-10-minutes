import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm"
import { Author } from "./Author"
 
@Entity()
export class BlogPost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToOne(() => Author, (author) => author.blogPosts) // How the author relates to this blog post
    author: Author
}