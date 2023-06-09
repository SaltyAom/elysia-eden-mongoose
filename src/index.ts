import { Elysia } from 'elysia'
import { Schema, model } from 'mongoose'

const blogSchema = new Schema({
    title: String
})

const BlogModel = model('Blog', blogSchema)

const app = new Elysia()
    .post('/create', async ({ body }) => {
        const blog = new BlogModel(body)

        await blog.save()

        return blog.toJSON()
    })
    .listen(8080)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
