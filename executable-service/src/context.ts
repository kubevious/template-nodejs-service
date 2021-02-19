import { ILogger } from 'the-logger';
import { Promise } from 'the-promise';

import { Backend, TimerFunction } from '@kubevious/helper-backend'
import { WebServer } from './server';
import { ProcessingTracker } from '@kubevious/helpers/dist/processing-tracker';

export class Context
{
    private backend : Backend;
    private _logger : ILogger;
    private _server : WebServer;
    private _tracker : ProcessingTracker;

    constructor(backend : Backend)
    {
        this.backend = backend;
        this._logger = backend.logger.sublogger('Context');

        this._tracker = new ProcessingTracker(this.logger);

        this._server = new WebServer(this.logger , this);
    }

    get logger() : ILogger {
        return this._logger;
    }

    get server() : WebServer {
        return this._server;
    }

    get tracker() : ProcessingTracker {
        return this._tracker;
    }


    run()
    {
        return Promise.resolve()
            .then(() => this._server.run())
    }

    timer(timeout: number, cb: TimerFunction): void
    {
        this.backend.timer(timeout, cb);
    }

    interval(timeout: number, cb: TimerFunction): void
    {
        this.backend.interval(timeout, cb);
    }
}
