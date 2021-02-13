import { ExpressOIDC } from '@okta/oidc-middleware';
import { config } from './config';

export const oidc = new ExpressOIDC({
  issuer: config.auth.providerUrl,
  client_id: config.auth.clientId,
  client_secret: config.auth.clientSecret,
  appBaseUrl: 'http://localhost:9000',
  scope: 'openid profile',
  routes: {
    login: {
      path: '/auth/login',
    },
    loginCallback: {
      path: '/auth/callback',
      // afterCallback: '/dashboard',
    },
    logout: {
      path: '/auth/logout',
    },
  },
});
