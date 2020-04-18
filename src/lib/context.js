const Promise = require('the-promise');

const SERVER_PORT = 4100;

class Context
{
    constructor(logger)
    {
        this._logger = logger.sublogger("Context");

        this._server = null;
    }

    get logger() {
        return this._logger;
    }

    run()
    {
        return Promise.resolve()
            .then(() => this._setupServer())
            .then(() => this._runServer())
            .catch(reason => {
                console.log("***** ERROR *****");
                console.log(reason);
                this.logger.error(reason);
                process.exit(1);
            });
    }

    _setupServer()
    {
        const Server = require("./server");
        this._server = new Server(this, SERVER_PORT);
    }

    _runServer()
    {
        if (!this._server) {
            return;
        }

        this._server.run()
    }
}

module.exports = Context;