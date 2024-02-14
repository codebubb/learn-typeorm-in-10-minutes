import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { BlogPost } from "./BlogPost"

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => BlogPost, (blogPost) => blogPost.author)  // How the blog posts are related to the author
    blogPosts: BlogPost[]
}