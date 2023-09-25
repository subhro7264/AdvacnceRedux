import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first things",
  },
  {
    id: "p2",
    price: 100,
    title: "My 2nd Book",
    description: "The 2nd things",
  },
  {
    id: "p3",
    price: 400,
    title: "My 3rd Book",
    description: "The 3rd things",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
