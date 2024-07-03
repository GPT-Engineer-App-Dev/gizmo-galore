import { Button } from "@/components/ui/button";

const sampleCart = [
  {
    id: 1,
    name: "Laptop Pro 15",
    price: "$1200",
    image: "/images/laptop.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Smartphone X",
    price: "$800",
    image: "/images/smartphone.jpg",
    quantity: 2,
  },
];

const CartPage = () => {
  const totalPrice = sampleCart.reduce(
    (total, item) => total + item.price.replace("$", "") * item.quantity,
    0
  );

  return (
    <div className="cart p-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="cart-items space-y-4 mb-8">
        {sampleCart.map((item) => (
          <div key={item.id} className="cart-item flex items-center gap-4 p-4 border rounded-lg">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-lg">{item.price}</p>
              <p className="text-sm">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price text-xl font-bold mb-4">Total: ${totalPrice}</div>
      <div className="flex gap-4">
        <Button>Checkout</Button>
        <Button variant="outline">Continue Shopping</Button>
      </div>
    </div>
  );
};

export default CartPage;