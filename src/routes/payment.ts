import { FastifyInstance } from "fastify";
import { z } from "zod";

import {
  PaymentService,
  CashService,
  CreditCardService,
  PixService,
  PurchaseService,
} from "../services/PurchaseService";

export async function paymentRoutes(fastify: FastifyInstance) {
  fastify.post("/purchase", async (request, reply) => {
    const createPurchaseBody = z.object({
      paymentMethod: z.string(),
      amount: z.number().gte(0),
    });

    const { amount, paymentMethod } = createPurchaseBody.parse(request.body);

    let paymentService: PaymentService;

    switch (paymentMethod) {
      case "CASH":
        paymentService = new CashService();
        break;
      case "CREDIT_CARD":
        paymentService = new CreditCardService();
        break;
      case "PIX":
        paymentService = new PixService();
        break;
      default:
        return reply.status(400).send({ message: "Invalid payment method" });
    }

    const purchaseService = new PurchaseService(paymentService);

    const purchaseResult = purchaseService.purchase(amount);

    return { message: purchaseResult };
  });
}
