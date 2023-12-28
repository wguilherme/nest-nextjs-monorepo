import { Module } from '@nestjs/common';
import { FrontendController } from './frontend.controller';
import { FrontendService } from './frontend.service';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/',
      exclude: ['/api*'],
    }),
  ],
  controllers: [FrontendController],
  providers: [FrontendService],
})
export class FrontendModule {}
