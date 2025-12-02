import { checkSchema } from 'express-validator';

export const postLeadSchema = checkSchema(
    {
        name: {
            errorMessage: 'Invalid Name',
            isString: true,
        },
        email: {
            errorMessage: 'Invalid Email',
            isEmail: true,
        },
        status: {
            isIn: {
                options: [
                    [
                        'NEW',
                        'ENGAGED',
                        'PROPOSAL_SENT',
                        'CLOSED_WON',
                        'CLOSED_LOST',
                    ],
                ],
                errorMessage: 'Invalid status',
            },
            optional: true,
        },
    },
    ['body']
);
