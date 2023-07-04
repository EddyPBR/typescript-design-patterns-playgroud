import fastify from "fastify";
import cors from "@fastify/cors";

import { statusRoutes } from "./routes/status";
import { paymentRoutes } from "./routes/payment";

const server = fastify({
  logger: true,
});

server.register(cors);
server.register(statusRoutes);
server.register(paymentRoutes);

server
  .listen({ port: 4444 })
  .catch((error) => {
    server.log.error(error);
  });
