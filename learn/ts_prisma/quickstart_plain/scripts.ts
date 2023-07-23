import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    /*  create one
    const user= await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice1@prisma.io'
        }
    })
    */

    // get all
    // const users = await prisma.user.findMany();

    // create related records
    // const user =  await prisma.user.create({
    //     data: {
    //         name: 'bob',
    //         email: 'bob@prisma.io',
    //         posts: { 
    //             create: { title: "hello" }
    //         }
    //     }
    // })

    // retrieve relational records
    const user = await prisma.user.findMany({
        include: { posts: true }
    })
    console.log(user);
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
})