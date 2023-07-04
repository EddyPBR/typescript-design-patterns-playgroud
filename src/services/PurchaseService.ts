import { CashPaymentService } from "./payments/CashPaymentService";
import { CreditCardPaymentService } from "./payments/CreditCardPaymentService";
import { PixPaymentService } from "./payments/PixPaymentService";

export class PurchaseService {

  purchase(paymentMethod: string, amount: number): string {
    if (paymentMethod === "CASH") {
      const cashPaymentService = new CashPaymentService();
      return cashPaymentService.processPayment(amount);

    } else if (paymentMethod === "CREDIT_CARD") {
      const creditCardPaymentService = new CreditCardPaymentService();
      return creditCardPaymentService.processPayment(amount);

    } else if (paymentMethod === "PIX") {
      const pixPaymentService = new PixPaymentService();
      return pixPaymentService.processPayment(amount);

    } else {
      throw new Error("Método de pagamento inválido!");
    }
  }

}
