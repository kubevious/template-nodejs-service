import { Backend } from '@kubevious/helper-backend'
import { Context } from './context'

const backend = new Backend("saas-MY-NEW-SERVICE", {
    logLevels: {
    }
});

new Context(backend);
backend.run();
  