// import { ExpressOIDC } from '@okta/oidc-middleware';
import { auth, requiresAuth } from 'express-openid-connect';
import { config } from './config';

// Okta
// export const oidc = new ExpressOIDC({
//   issuer: config.auth.issuerUrl,
//   client_id: config.auth.clientId,
//   client_secret: config.auth.clientSecret,
//   appBaseUrl: 'http://localhost:9000',
//   scope: 'openid profile',
//   routes: {
//     login: {
//       path: '/auth/login',
//     },
//     loginCallback: {
//       path: '/auth/callback',
//       // afterCallback: '/dashboard',
//     },
//     logout: {
//       path: '/auth/logout',
//     },
//   },
// });

// export const oidcRoutes = oidc.router;
// export const oidcMiddleware = oidc.ensureAuthenticated;

// Auth0
const authConfig = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: config.auth.issuerUrl,
  baseURL: 'http://localhost:9000',
  secret: config.auth.sessionSecret,
  clientID: config.auth.clientId,
  routes: {
    login: 'auth/login',
  },
};

export const oidc = null;
export const oidcRoutes = auth(authConfig);
export const oidcMiddleware = requiresAuth;
