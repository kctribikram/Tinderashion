const mongoose = require('mongoose');

const uri = 'mongodb+srv://ziadarshad51:ziad@cluster0.gpjbwp9.mongodb.net/tinderashion';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
  insertProducts();
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  size: [String],
  color: [String],
  image: String,
  category: String, 

});

const Product = mongoose.model('Product', productSchema);

const products = [
    // Men's clothing
   
    {
      name: "Men's Jacket",
      price: 59.99,
      size: ["S", "M", "L", "XL"],
      color: ["Green", "Black", "Red"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Slim Fit Blazer",
      price: 129.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black"],
      image: "/images/b4.jpg",
      category: "mens"
    },
    {
      name: "Men's Tapered Dress Pants",
      price: 59.99,
      size: ["30", "32", "34", "36"],
      color: ["Black"],
      image: "/images/p2.png",
      category: "mens"
    },
    {
      name: "Men's Athletic Track Pants",
      price: 49.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black"],
      image: "/images/p3.png",
      category: "mens"
    },
    {
      name: "Men's Utility Cargo Pants",
      price: 69.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black"],
      image: "/images/p4.png",
      category: "mens"
    },
    {
      name: "Men's Textured Knit Polo",
      price: 39.99,
      size: ["S", "M", "L", "XL"],
      color: ["Beige"],
      image: "/images/p1.jpg",
      category: "mens"
    },
    {
      name: "Men's Performance Tee",
      price: 29.99,
      size: ["S", "M", "L", "XL"],
      color: ["Coral"],
      image: "/images/t1.png",
      category: "mens"
    },
    {
      name: "Men's Classic Crew Neck Tee",
      price: 24.99,
      size: ["S", "M", "L", "XL"],
      color: ["Charcoal"],
      image: "/images/t2.jpg",
      category: "mens"
    },
    {
      name: "Men's Oversized Graphic Tee",
      price: 34.99,
      size: ["S", "M", "L", "XL"],
      color: ["Gray"],
      image: "/images/t3.jpg",
      category: "mens"
    },
    {
      name: "Women's Blouse",
      price: 29.99,
      size: ["S", "M", "L", "XL"],
      color: ["Red", "White", "Blue"],
      image: "/images/b1.jpg",
      category: "womens"
    },
    {
      name: "Women's Dress",
      price: 49.99,
      size: ["S", "M", "L", "XL"],
      color: ["Red", "Blue", "Black"],
      image: "/images/d1.jpg",
      category: "womens"
    },
    {
      name: "Women's Hoodie",
      price: 49.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "White", "Pink"],
      image: "/images/h1.png",
      category: "womens"
    },
    {
      name: "Women's Jacket",
      price: 59.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Brown", "Gray"],
      image: "/images/ja1.jpg",
      category: "womens"
    },
    {
      name: "Women's Jeans",
      price: 39.99,
      size: ["24", "26", "28", "30"],
      color: ["Blue", "Black", "Gray"],
      image: "/images/j1.jpg",
      category: "womens"
    },
    {
      name: "Women's Leggings",
      price: 29.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Gray", "Navy"],
      image: "/images/l1.png",
      category: "womens"
    },
    {
      name: "Women's Shorts",
      price: 24.99,
      size: ["S", "M", "L", "XL"],
      color: ["Blue", "White", "Black"],
      image: "/images/sh1.png",
      category: "womens"
    },
    {
      name: "Women's Skirt",
      price: 35.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Red", "Blue"],
      image: "/images/sk1.png",
      category: "womens"
    },
    {
      name: "Women's Socks",
      price: 9.99,
      size: ["One Size"],
      color: ["White", "Black", "Gray"],
      image: "/images/s1.png",
      category: "womens"
    },
    {
      name: "Women's T-Shirt",
      price: 19.99,
      size: ["S", "M", "L", "XL"],
      color: ["White", "Black", "Pink"],
      image: "/images/t1 2.png",
      category: "womens"
    },
    // Shoes
    {
      name: "Air Jordan 1 Low",
      price: 109.99,
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Black", "White", "Red"],
      image: "/images/AIR+JORDAN+1+LOW.jpg",
      category: "shoes"
    },
    {
      name: "Air Zoom Pegasus 41",
      price: 129.99,
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Blue", "Gray", "White"],
      image: "/images/AIR+ZOOM+PEGASUS+41.jpg",
      category: "shoes"
    },
    {
      name: "Nike Dunk High By You",
      price: 149.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Black", "White", "Custom"],
      image: "/images/custom-nike-dunk-high-by-you-shoes.png",
      category: "shoes"
    },
    {
      name: "Nike Air Max 270",
      price: 139.99,
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Black", "White"],
      image: "/images/cn53790220.jpg",
      category: "shoes"
    },
    {
      name: "Nike React Infinity Run Flyknit",
      price: 159.99,
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Black", "White", "Blue"],
      image: "/images/cn55621954.jpg",
      category: "shoes"
    },
    {
      name: "Nike Blazer Mid '77",
      price: 124.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["White", "Black", "Gray"],
      image: "/images/cn55153742.jpg",
      category: "shoes"
    },
    {
      name: "Nike Air Force 1 '07",
      price: 99.99,
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["White", "Black", "Gray"],
      image: "/images/cn56151497.webp",
      category: "shoes"
    },
    {
      name: "Nike Free RN 5.0",
      price: 119.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Black", "White"],
      image: "/images/cn56151599.webp",
      category: "shoes"
    },
    {
      name: "Nike Air VaporMax 2021",
      price: 189.99,
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Black", "White", "Blue"],
      image: "/images/cn53790394.webp",
      category: "shoes"
    },
    {
      name: "Nike Air Zoom Structure 24",
      price: 129.99,
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Black", "Gray", "White"],
      image: "/images/cn56085561.webp",
      category: "shoes"
    }
  ];

const insertProducts = async () => {
  try {
    await Product.insertMany(products);
    console.log('Products inserted successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting products:', err);
  }
};
