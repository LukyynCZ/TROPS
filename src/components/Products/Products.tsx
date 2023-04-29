import { useState } from 'react';
import Header from '../Header';
import Product from './Product';

const Products = () => {
  const productsData = [
    {
      name: 'Elegant Jacket',
      description:
        'This black elegant jacket combines style and comfort for a formal and sophisticated look. Made from high-quality materials, it is designed to provide comfort while maintaining a sleek and professional appearance. Perfect for any formal occasion, this jacket will elevate your outfit with its timeless and sophisticated design. Whether you are heading to a business meeting or a formal event, this jacket is the perfect choice to make a lasting impression.',
      price: '$500',
      image: '/assets/products/jacket.png',
    },
    {
      name: 'Formal Trousers',
      description:
        'These formal black trousers are a classic wardrobe staple that can be dressed up or down for any occasion. Made from high-quality materials, they are designed to provide both style and comfort. With a sleek and timeless design, these trousers are perfect for any formal event or business meeting. The black color gives them a professional and sophisticated look, making them a versatile addition to any wardrobe. Pair them with a dress shirt and blazer for a polished and refined look, or dress them down with a sweater or casual shirt for a more relaxed but still sophisticated style.',
      price: '$300',
      image: '/assets/products/trousers.png',
    },
    {
      name: 'Luxurious belt',
      description:
        'This luxurious black belt with a silver buckle is the ultimate accessory for a sophisticated and stylish look. Made from high-quality materials, it features a sleek black strap that is both durable and comfortable to wear. The silver buckle adds a touch of class and elegance, making it a standout piece that will add a touch of refinement to any outfit. Whether you are dressing up for a formal event or looking to elevate your everyday look, this belt is the perfect choice. Its timeless design and superior craftsmanship ensure that it will be a versatile and chic addition to your accessory collection for years to come.',
      price: '$220',
      image: '/assets/products/belt.png',
    },
    {
      name: 'Dark tie',
      description:
        'This dark tie with dark blue stripes is the perfect accessory to add a touch of sophistication and style to your outfit. Made from high-quality materials, it features a sleek and versatile design that can be paired with a variety of shirts and suits. The dark color of the tie gives it a refined and polished look, while the subtle blue stripes add a touch of depth and interest. Perfect for both formal and business settings, this tie is sure to make a statement with its timeless and elegant design. Whether you are attending a wedding, a business meeting, or a special event, this tie is the perfect finishing touch to any outfit.',
      price: '$140',
      image: '/assets/products/tie.png',
    },
    {
      name: 'Black bowtie',
      description:
        "This black bowtie is the epitome of timeless elegance and sophistication. Made from high-quality materials, it features a classic black color that exudes a sense of refinement and style. Perfect for formal events, this bowtie can be paired with a tuxedo or suit for a polished and refined look. The pre-tied design ensures that it's easy to wear and always looks sharp. Whether you are attending a wedding, a gala, or a black-tie event, this black bowtie is the perfect accessory to elevate your outfit and make a lasting impression.",
      price: '$120',
      image: '/assets/products/bowtie.png',
    },
  ];

  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 200);

  return (
    <>
      <Header site={'products'} />
      <section className='max-w-7xl m-auto md:px-8 md:mt-10 px-5'>
        {productsData.map((product, index) => (
          <Product
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            index={index}
            key={product.name}
          />
        ))}
        <div className={`mt-20 mb-20 text-center text-gray-200 ${load ? '' : 'hidden'}`}>
          Create by <b>Lukas Macku </b> for team TROPS
        </div>
      </section>
    </>
  );
};

export default Products;
