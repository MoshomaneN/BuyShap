def suggest_items_within_budget(product_prices, budget):
    sorted_items = sorted(product_prices.items(), key=lambda x: x[1])
    selected = {}
    total = 0

    for item, price in sorted_items:
        if total + price <= budget:
            selected[item] = price
            total += price

    return selected, total

