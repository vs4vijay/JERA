import { Req, Res, JsonController, Get, UseBefore } from 'routing-controllers';

import { oidc } from '../../auth';
import { Logger } from '../../loggers';

@UseBefore(oidc.ensureAuthenticated())
@JsonController('/app')
export class AppController {
  private logger: Logger;

  constructor() {
    this.logger = Logger.getLogger({ component: 'app' });
  }

  @Get()
  home(@Req() request: any, @Res() response: any): any {
    this.logger.info('req.userContext', request.userContext);
    // this.logger.info('home', request);
    return 'home';
    // return response.sendFile(__dirname + '../../static/index.html');
  }

  @Get('/dashboard')
  dashboard(@Req() request: any, @Res() response: any): any {
    this.logger.info('req.userContext', request.userContext);
    return 'dashboard';
  }
}
