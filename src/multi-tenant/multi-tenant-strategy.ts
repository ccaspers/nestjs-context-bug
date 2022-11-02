import {
  HostComponentInfo,
  ContextId,
  ContextIdFactory,
  ContextIdStrategy,
} from "@nestjs/core";
import { Request } from "express";

const tenants = new Map<string, ContextId>();

export class MultiTenantStrategy implements ContextIdStrategy {
  attach(contextId: ContextId, request: Request) {
    const tenantId = request.get("tenant-id");

    console.log("strategy", tenantId);

    if (!tenantId) {
      throw new Error("no tenantId");
    }

    let tenantSubTreeId: ContextId;

    if (tenants.has(tenantId)) {
      tenantSubTreeId = tenants.get(tenantId) as ContextId;
    } else {
      tenantSubTreeId = ContextIdFactory.create();
      tenants.set(tenantId, tenantSubTreeId);
    }

    // If tree is not durable, return the original "contextId" object
    return (info: HostComponentInfo) => {
      const context = info.isTreeDurable ? tenantSubTreeId : contextId;
      return context;
    };
  }
}
