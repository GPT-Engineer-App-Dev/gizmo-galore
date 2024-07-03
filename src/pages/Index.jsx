import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sampleProducts = [
  {
    id: 1,
    name: "Laptop Pro 15",
    price: "$1200",
    image: "/images/laptop.jpg",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: "$800",
    image: "/images/smartphone.jpg",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "$200",
    image: "/images/headphones.jpg",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <section className="hero bg-gray-200 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ElectroMart</h1>
        <p className="text-lg mb-4">Your one-stop shop for all electronics</p>
        <Button onClick={() => navigate("/category/laptops")}>Shop Now</Button>
      </section>

      <section className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card p-4 border rounded-lg">
            <img src={product.image} alt={product.name} className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg mb-4">{product.price}</p>
            <Button onClick={() => navigate(`/product/${product.id}`)}>
              View Details
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Index;