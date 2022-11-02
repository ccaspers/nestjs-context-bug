import { Module } from "@nestjs/common";

import { EchoModule } from "./echo-module/echo.module";

@Module({
  imports: [EchoModule],
})
export class AppModule {}
