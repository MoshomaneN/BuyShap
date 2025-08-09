
def compare_prices(product_list, store_data):
    results = []
    for product in product_list:
        prices = [
            {"store": s["name"], "price": s["products"].get(product)}
            for s in store_data if product in s["products"]
        ]
        cheapest = min(prices, key=lambda x: x["price"])
        results.append({product: cheapest})
    return results
