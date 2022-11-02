import { Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";

export const TENANT_ID = "TENANT_ID";

export const tenantIdFactory = {
  provide: TENANT_ID,
  scope: Scope.REQUEST,
  durable: true,
  useFactory: (req: Request) => {
    console.log("executing factory");
    return req.get("tenant-id") as string;
  },
  inject: [REQUEST],
};
