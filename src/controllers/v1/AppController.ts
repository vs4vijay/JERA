import { Req, Res, JsonController, Get, UseBefore } from 'routing-controllers';

import { oidcMiddleware } from '../../auth';
import { Logger } from '../../loggers';

@UseBefore(oidcMiddleware())
@JsonController('/app')
export class AppController {
  private logger: Logger;

  constructor() {
    this.logger = Logger.getLogger({ component: 'app' });
  }

  @Get()
  home(@Req() request: any, @Res() response: any): any {
    this.logger.info('request.userContext', request.userContext);
    this.logger.info('request.oidc.isAuthenticated() ' + request.oidc.isAuthenticated(), request.oidc.user);
    // this.logger.info('home', request);
    return 'home';
    // return response.sendFile(__dirname + '../../static/index.html');
  }

  @Get('/dashboard')
  dashboard(@Req() request: any, @Res() response: any): any {
    this.logger.info('request.userContext', request.userContext);
    this.logger.info('request.oidc.user', request.oidc.user);
    return request.userContext || request.oidc.user;
  }
}
