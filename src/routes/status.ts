import { FastifyInstance } from "fastify";

export async function statusRoutes(fastify: FastifyInstance) {
  fastify.get("/status", async (request, reply) => {
    return { message: "Server status ok" };
  });
}
