export class CreditCardPaymentService {

  processPayment(amount: number): string {
    const currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

    const formattedValue = currencyFormatter.format(amount);

    return `Pagamento de ${formattedValue} processado com cartão de crédito.`;
  }

}
