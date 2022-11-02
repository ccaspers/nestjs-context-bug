import { Module } from "@nestjs/common";
import { tenantIdFactory } from "./factories";
@Module({
  imports: [],
  providers: [tenantIdFactory],
  exports: [tenantIdFactory],
})
export class MultiTenantModule {}
