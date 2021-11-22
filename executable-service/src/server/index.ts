import Path from 'path';
import { ILogger } from 'the-logger';
import { Server } from '@kubevious/helper-backend';
import { Context } from '../context';

export interface Helpers
{
}

export class WebServer
{
    private logger : ILogger;
    private server : Server<Context, Helpers>;
    private helpers : Helpers;
    private _context : Context;

    constructor(logger : ILogger, context : Context)
    {
        this.logger = logger.sublogger('WebServer');
        this._context = context;

        this.helpers = {
        };
        this.server = new Server(this.logger, context, this.helpers, {
            routersDir: Path.join(__dirname, '..', 'routers'),
        } );

        this.server.initializer((app) => {
            app.set('trust proxy', true);
        })
    }

    run() : Promise<Server<Context, Helpers>>
    {
        return this.server.run();
    }

}
