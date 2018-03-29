import middleware from '@storybook/core/dist/server/middleware';

import getBaseConfig from './config/webpack.config';
import loadConfig from './config';

export default config => middleware(config, loadConfig, getBaseConfig);
