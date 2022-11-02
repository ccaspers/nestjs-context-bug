import { Module } from "@nestjs/common";

import { EchoController } from "src/echo-module/echo.controller";
import { MultiTenantModule } from "src/multi-tenant/multi-tenant.module";
import { EchoService } from "./echo.service";

@Module({
  controllers: [EchoController],
  providers: [EchoService],
  imports: [MultiTenantModule],
})
export class EchoModule {}
