import { Context } from '../context';
import { Router } from '@kubevious/helper-backend'
import Version from '../version';

export default function (router: Router, context: Context) {
    router.url('/');

    router.get('/', (req, res) => {
        return {};
    });

    router.get('/version', (req, res) => {
        return Version;
    });
}