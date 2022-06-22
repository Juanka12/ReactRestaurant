const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency",
})

export function CurrencyFormater(value) {
    return CURRENCY_FORMATTER.format(value);
}