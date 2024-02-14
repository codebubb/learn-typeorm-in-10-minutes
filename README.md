# Learn TypeORM In 10 Minutes

This is the code examples that are used in the 'Learn TypeORM in 10 Minutes' tutorial.

You can read the article here: https://codebubb.com/posts/learn-typeorm-in-10-minutes/

Or watch it here: https://www.youtube.com/watch?v=BCPTRCvASk0

## Running the code

If you want to run the example code, simply install all of the dependencies:

```bash
npm ci
```

Then you can serve the code and watch for changes:

```bash
npm run serve
```

Then feel free to send some requests with Postman or your favourite tool.

The endpoints that are setup are as follows

```
http://localhost:3000/author (POST) Create a new Author with the provided payload

http://localhost:3000/blogPost (POST) Create a new blog post with the provided payload
http://localhost:3000/blogPost (GET) Fetch All Blog Posts
http://localhost:3000/blogPost/:id (GET) Fetch a single Blog Post that matches the id

http://localhost:3000/blogPost/:id (PATCH) Update a single Blog Post that matches the id with the provided payload

http://localhost:3000/blogPost/:id (DELETE) Remove a blog post that matches the id
```

## Payloads for resources

For an author, you just need to provide the name you want to use.

```json
{
    "name": "James"
}
```

For a new blog post, you need to provide the author ID (from a previously created Author request) and the text of the blog content.

```json
{
    "author": 1,
    "text": "This is my first blog post!"
}
```