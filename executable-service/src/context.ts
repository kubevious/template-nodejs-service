import { ILogger } from 'the-logger';
import { Promise } from 'the-promise';

import { Backend } from '@kubevious/helper-backend'
import { WebServer } from './server';


export class Context
{
    private backend : Backend;
    private _logger : ILogger;
    private _server : WebServer;

    constructor(backend : Backend)
    {
        this.backend = backend;
        this._logger = backend.logger.sublogger('Context');

        this._server = new WebServer(this.logger , this);

        backend.stage("server", () => this._server.run());
    }

    get logger() : ILogger {
        return this._logger;
    }

    get server() : WebServer {
        return this._server;
    }

    get tracker() {
        return this.backend.tracker;
    }

}
