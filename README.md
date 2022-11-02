# Main Branch: Nestjs 9.0.11

1. `npm ci && npm run start:dev`
2. `curl 'http://localhost:8080/echo' -H 'tenant-id: super-tenant'`

Results in `super-tenant` being printed to the terminal.

# Broken Branch: Nestjs 9.1.6

1. `git switch bug`
2. `npm ci && npm run start:dev`
3. `curl 'http://localhost:8080/echo' -H 'tenant-id: super-tenant'`

Results in `{"statusCode":500,"message":"Internal server error"}` being printed to the terminal.
