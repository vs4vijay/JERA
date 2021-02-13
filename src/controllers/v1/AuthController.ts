import { JsonController, Get, Req, UseBefore } from 'routing-controllers';
import { oidc } from '../../auth';

import { Logger } from '../../loggers';

@JsonController('/auth')
export class AuthController {
  private logger: Logger;

  constructor() {
    this.logger = Logger.getLogger({ component: 'auth' });
  }

  @Get('/callback')
  authCallback(): any {
    this.logger.info('auth callback');
    return 'callback from oidc';
  }

  @Get('/logout')
  @UseBefore(oidc.forceLogoutAndRevoke())
  logout(@Req() request: any): any {
    this.logger.info('logout');
    return 'logout';
  }
}
