import { createServer } from 'http';

import healthcheck from 'src/routes/healthcheck';
import config from 'src/config';
import { app } from 'src/services/express';
import log from 'src/logger';
import { Prisma } from 'src/services/prisma';
import leadRouter from './routes/lead';

const server = async () => {
    const httpServer = createServer(app);

    const prisma = new Prisma();
    await prisma.start();

    app.get('/health', healthcheck);
    app.use('/api', leadRouter);

    new Promise<void>((resolve) =>
        httpServer.listen({ port: config.port }, resolve)
    )
        .then(() => {
            log.info(
                `🚀 ${config.app_name} Service running on port: ${config.port}`
            );
        })
        .catch((err) => {
            log.error(err);
        });
};

server();
