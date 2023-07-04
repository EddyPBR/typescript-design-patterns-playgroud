import { FastifyInstance } from "fastify";
import { z } from "zod";

import { PurchaseService } from "../services/PurchaseService";

export async function paymentRoutes(fastify: FastifyInstance) {
  fastify.post("/purchase", async (request, reply) => {
    const createPurchaseBody = z.object({
      paymentMethod: z.string(), 
      amount: z.number().gte(0),
    });

    const { amount, paymentMethod } = createPurchaseBody.parse(request.body);
    
    const purchaseService = new PurchaseService();

    const purchaseResult = purchaseService.purchase(paymentMethod, amount);

    return { message: purchaseResult };
  })
}
