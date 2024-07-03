import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sampleProducts = [
  {
    id: 1,
    name: "Laptop Pro 15",
    price: "$1200",
    image: "/images/laptop.jpg",
    description: "A high-performance laptop with 15-inch display.",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: "$800",
    image: "/images/smartphone.jpg",
    description: "A sleek smartphone with cutting-edge features.",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "$200",
    image: "/images/headphones.jpg",
    description: "Comfortable wireless headphones with superior sound quality.",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail p-8">
      <img src={product.image} alt={product.name} className="mb-4" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl mb-4">{product.price}</p>
      <p className="text-lg mb-4">{product.description}</p>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductPage;