import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {

        name: "rich",
        email: "hello@prisma.com",
        posts: {
            create: {
                title: "firstPost",
                body: "first to gay",
                slug: "my-first-post"
            }
        }
    }
    })

    const user = await prisma.user.findMany({
        include: { posts: true }
    });
    console.log(user)
}

main()
    .catch(async (e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });