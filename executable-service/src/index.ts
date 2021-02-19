import { Backend } from '@kubevious/helper-backend'
import { LogLevel } from 'the-logger';
import { Context } from './context'

const backend = new Backend("my-service", {
    logLevels: {
        'DriverMysql': LogLevel.warn
    }
});
const context = new Context(backend);
context.run();
  
