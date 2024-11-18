import { PrismaClient } from '@prisma/client';
import { Request } from 'express'

const prisma = new PrismaClient();

export const get = async (req, res) => { 
    const getCommand = await prisma.post.findMany();
    res.status(200).json(getCommand);
}

export const post = async (req, res) => {
    const { title, content, authorEmail } = req.body
    const postCommand = await prisma.post.create({
        data: {
            title,
            content,
            published: false,
            author: {
                connect: { email: authorEmail },
            }
        }
    });
}

export const put= async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const putCommand = await prisma.user.update({
        where: { id },
        data: { published: true },
    });
    res.json(putCommand);
}

export const remove = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const removeCommand = await prisma.user.delete({
        where: { id },
    });

    res.json(removeCommand);
}

