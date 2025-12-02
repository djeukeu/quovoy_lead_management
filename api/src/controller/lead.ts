import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { Lead } from '@prisma/client';

import { createLead, readAllLead } from 'src/model/lead';

export const getAllLeadController = async (_req: Request, res: Response) => {
    const leads = await readAllLead();
    res.status(200).json({ leads });
};

export const postLeadController = async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({
            errcode: 'BAD_REQUEST',
            message: result.array(),
        });
        return;
    }

    const data = req.body;
    const newLead = {
        name: data.name,
        email: data.email,
        status: data.status,
    };

    const lead = await createLead(newLead as Lead);
    res.status(200).json({ lead });
};
