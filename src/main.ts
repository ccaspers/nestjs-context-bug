import { ContextIdFactory, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MultiTenantStrategy } from "./multi-tenant/multi-tenant-strategy";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ContextIdFactory.apply(new MultiTenantStrategy());
  await app.listen(8080);
}
bootstrap();
