import { Inject, Injectable } from "@nestjs/common";
import { TENANT_ID } from "../multi-tenant/factories";

@Injectable()
export class EchoService {
  constructor(@Inject(TENANT_ID) public tenantId: string) {}
}
