import { Controller, Get, Inject } from "@nestjs/common";
import { EchoService } from "./echo.service";

@Controller("echo")
export class EchoController {
  constructor(private echoService: EchoService) {}

  @Get()
  getEcho(): string {
    return this.echoService.tenantId;
  }
}
