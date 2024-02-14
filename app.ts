import express, { Request, Response } from 'express';
import cors from 'cors';
import { AppDataSource } from './AppDataSource';
import { BlogPost } from './BlogPost';

const app = express();
app.use(express.json());
app.use(cors());

AppDataSource.initialize()
    .then(() => {
        // Successfully conencted to the database so let's start the Express app

        app.listen(3000, () => {
            console.log('App listening on port 3000');

            // Create a repository for working with our model
            const blogPostRepository = AppDataSource.getRepository(BlogPost);

            app.post('/blogPost', async (req: Request, res: Response) => {
                const data = req.body;
            
                const result = await blogPostRepository.save(data);
            
                return res.json({
                    status: 'OK',
                    data: result
                })
            });

            app.get('/blogPost', async (req: Request, res: Response) => {
                const offset = Number(req.query.offset);
                const amount = Number(req.query.amount);
            
                const allBlogPosts = await blogPostRepository.find(
                    { skip: offset, take: amount }
                );
            
                return res.json({
                    status: 'OK',
                    data: allBlogPosts
                })
            });

            app.get('/blogPost/:id', async (req: Request, res: Response) => {
                const id = parseInt(req.params.id);
                const blogPost = await blogPostRepository.findOneBy({ id });
            
                return res.json({
                    status: 'OK',
                    data: blogPost
                });
            });

            app.patch('/blogPost/:id', async (req: Request, res: Response) => {
                const changedText = req.body.text;
                const id = parseInt(req.params.id);
            
                const blogPost = await blogPostRepository.findOneBy({ id });
                blogPost.text = changedText;
            
                const result = await blogPostRepository.save(blogPost);
            
                return res.json({
                    status: 'OK',
                    data: result
                });
            });

            app.delete('/blogPost/:id', async (req: Request, res: Response) => {
                const id = parseInt(req.params.id);
            
                const result = await blogPostRepository.delete({ id });
            
                return res.json({
                    status: 'OK',
                    data: result,
                });
            });

        });

    })
     .catch(error => {
        console.log(error);
    });