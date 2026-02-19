import { prisma } from "../utils/prisma";

const getTasks = async () => {
    const tasks = await prisma.tasks.findMany()

    if
}