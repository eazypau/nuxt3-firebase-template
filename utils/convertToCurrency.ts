export default function (price: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MYR",
    currencyDisplay: "narrowSymbol",
  }).format(Number(price));
}
