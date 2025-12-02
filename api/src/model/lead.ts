import { Lead } from '@prisma/client';

import prismaContext from 'src/prisma';

const { lead } = prismaContext.prisma;

export const readAllLead = async (): Promise<Lead[]> => {
    const response = await lead.findMany();
    return response;
};

export const createLead = async (data: Lead): Promise<Lead> => {
    const response = await lead.create({ data });
    return response;
};
