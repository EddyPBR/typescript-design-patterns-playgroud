import { CashPaymentService } from "./payments/CashPaymentService";
import { CreditCardPaymentService } from "./payments/CreditCardPaymentService";
import { PixPaymentService } from "./payments/PixPaymentService";

// STRATEGY
export interface PaymentService {
  purchase(amount: number): string;
}

// CONCRETE STRATEGY
export class CashService implements PaymentService {
  purchase(amount: number) {
    const cashPaymentService = new CashPaymentService();
    return cashPaymentService.processPayment(amount);
  }
}

export class CreditCardService implements PaymentService {
  purchase(amount: number) {
    const creditCardPaymentService = new CreditCardPaymentService();
    return creditCardPaymentService.processPayment(amount);
  }
}

export class PixService implements PaymentService {
  purchase(amount: number) {
    const pixPaymentService = new PixPaymentService();
    return pixPaymentService.processPayment(amount);
  }
}

// CONTEXT
export class PurchaseService {

  private service: PaymentService;
  
  constructor(service: PaymentService) {
    this.service = service;
  }

  setService(service: PaymentService) {
    this.service = service;
  }

  purchase(amount: number) {
    const purchaseStatus = this.service.purchase(amount);
    return purchaseStatus;
  }

}
