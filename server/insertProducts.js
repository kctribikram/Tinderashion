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
      name: "Men's T-Shirt",
      price: 19.99,
      size: ["S", "M", "L", "XL"],
      color: ["Blue", "Gray", "White", "Green"],
      image: "/images/men tshirt.jpg",
      category: "mens"
    },
    {
      name: "Men's Jeans",
      price: 39.99,
      size: ["30", "32", "34", "36"],
      color: ["Gray", "Blue", "Black"],
      image: "/images/men jeans.jpg",
      category: "mens"
    },
    {
      name: "Men's Jacket",
      price: 59.99,
      size: ["S", "M", "L", "XL"],
      color: ["Green", "Black", "Red"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Shoes",
      price: 49.99,
      size: ["8", "9", "10", "11"],
      color: ["Red", "Blue", "Brown"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Polo Shirt",
      price: 25.99,
      size: ["S", "M", "L", "XL"],
      color: ["Yellow", "Blue", "White"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Sweatshirt",
      price: 35.99,
      size: ["S", "M", "L", "XL"],
      color: ["Gray", "Black", "Navy"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Shorts",
      price: 29.99,
      size: ["S", "M", "L", "XL"],
      color: ["Khaki", "Blue", "Gray"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Suit",
      price: 199.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Gray", "Navy", "Purple"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Blazer",
      price: 89.99,
      size: ["S", "M", "L", "XL"],
      color: ["Blue", "Black", "Gray"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Sweater",
      price: 45.99,
      size: ["S", "M", "L", "XL"],
      color: ["Red", "Gray", "Black"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Track Pants",
      price: 39.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Gray", "Blue"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Hoodie",
      price: 49.99,
      size: ["S", "M", "L", "XL"],
      color: ["Red", "Black", "White"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Tank Top",
      price: 15.99,
      size: ["S", "M", "L", "XL"],
      color: ["Blue", "White", "Gray"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Vest",
      price: 29.99,
      size: ["S", "M", "L", "XL"],
      color: ["Green", "Gray", "Black"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Chinos",
      price: 49.99,
      size: ["30", "32", "34", "36"],
      color: ["Beige", "Navy", "Black"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Dress Shirt",
      price: 39.99,
      size: ["S", "M", "L", "XL"],
      color: ["White", "Blue", "Gray"],
      image: "/images/men-fashion.jpeg",
      category: "mens"
    },
    {
      name: "Men's Socks",
      price: 9.99,
      size: ["One Size"],
      color: ["Black", "Gray", "White"],
      image: "/images/men-fashion.jpeg"
    },
   
    // Women's clothing
    {
      name: "Women's Dress",
      price: 49.99,
      size: ["S", "M", "L", "XL"],
      color: ["Red", "Blue", "Black"],
      image: "/images/women dress.jpg",
      category: "womens"
    },
    {
      name: "Women's Jeans",
      price: 39.99,
      size: ["24", "26", "28", "30"],
      color: ["Blue", "Black", "Gray"],
      image: "/images/women jeans.jpg",
      category: "womens"
    },
    {
      name: "Women's Jacket",
      price: 59.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Brown", "Gray"],
      image: "/images/women jacket.jpg",
      category: "womens"
    },
    {
      name: "Women's T-Shirt",
      price: 19.99,
      size: ["S", "M", "L", "XL"],
      color: ["White", "Black", "Pink"],
      image: "/images/womens-tshirt.jpeg",
      category: "womens"
    },
    {
      name: "Women's Blouse",
      price: 29.99,
      size: ["S", "M", "L", "XL"],
      color: ["Red", "White", "Blue"],
      image: "/images/womens-blouse.jpeg",
      category: "womens"
    },
    {
      name: "Women's Skirt",
      price: 35.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Red", "Blue"],
      image: "/images/womens-skirt.jpeg",
      category: "womens"
    },
    {
      name: "Women's Shorts",
      price: 24.99,
      size: ["S", "M", "L", "XL"],
      color: ["Blue", "White", "Black"],
      image: "/images/womens-shorts.jpeg",
      category: "womens"
    },
    {
      name: "Women's Sweater",
      price: 45.99,
      size: ["S", "M", "L", "XL"],
      color: ["Gray", "Pink", "Black"],
      image: "/images/womens-sweater.jpeg",
      category: "womens"
    },
    {
      name: "Women's Hoodie",
      price: 49.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "White", "Pink"],
      image: "/images/womens-hoodie.jpeg",
      category: "womens"
    },
    {
      name: "Women's Tank Top",
      price: 15.99,
      size: ["S", "M", "L", "XL"],
      color: ["White", "Black", "Gray"],
      image: "/images/womens-tank-top.jpeg",
      category: "womens"
    },
    {
      name: "Women's Leggings",
      price: 29.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Gray", "Navy"],
      image: "/images/womens-leggings.jpeg",
      category: "womens"
    },
    {
      name: "Women's Blazer",
      price: 89.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Gray", "Navy"],
      image: "/images/womens-blazer.jpeg",
      category: "womens"
    },
    {
      name: "Women's Coat",
      price: 99.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Gray", "Brown"],
      image: "/images/womens-coat.jpeg",
      category: "womens"
    },
    {
      name: "Women's Cardigan",
      price: 39.99,
      size: ["S", "M", "L", "XL"],
      color: ["White", "Gray", "Pink"],
      image: "/images/womens-cardigan.jpeg",
      category: "womens"
    },
    {
      name: "Women's Pants",
      price: 49.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Gray", "Navy"],
      image: "/images/womens-pants.jpeg",
      category: "womens"
    },
    {
      name: "Women's Dress Shirt",
      price: 39.99,
      size: ["S", "M", "L", "XL"],
      color: ["White", "Blue", "Pink"],
      image: "/images/womens-dress-shirt.jpeg",
      category: "womens"
    },
    {
      name: "Women's Socks",
      price: 9.99,
      size: ["One Size"],
      color: ["White", "Black", "Gray"],
      image: "/images/womens-socks.jpeg",
      category: "womens"
    },
    
    // Shoes
    {
      name: "Running Shoes",
      price: 69.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Red", "Blue", "Black"],
      image: "/images/shoes1.jpg",
      category: "shoes"
    },
    {
      name: "Casual Sneakers",
      price: 59.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["White", "Gray", "Black"],
      image: "/images/shoes2.jpg",
      category: "shoes"
    },
    {
      name: "Formal Shoes",
      price: 79.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Brown", "Black"],
      image: "/images/shoes3.jpg",
      category: "shoes"
    },
    {
      name: "Sports Shoes",
      price: 89.99,
      size: ["6", "7", "8", "9", "10"],
      color: ["Blue", "Green", "Black"],
      image: "/images/shoes4.jpg",
      category: "shoes"
    },
    {
      name: "Loafers",
      price: 49.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Tan", "Brown", "Black"],
      image: "/images/shoes5.jpg",
      category: "shoes"
    },
    {
      name: "Flip Flops",
      price: 19.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Red", "Blue", "Yellow"],
      image: "/images/shoes6.jpg",
      category: "shoes"
    },
    {
      name: "Boots",
      price: 129.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Black", "Brown"],
      image: "/images/shoes7.jpg",
      category: "shoes"
    },
    {
      name: "Sandals",
      price: 39.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Black", "Brown", "White"],
      image: "/images/shoes8.jpg",
      category: "shoes"
    },
    {
      name: "High Tops",
      price: 74.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["White", "Black", "Red"],
      image: "/images/shoes9.jpg",
      category: "shoes"
    },
    {
      name: "Slip-Ons",
      price: 54.99,
      size: ["7", "8", "9", "10", "11"],
      color: ["Gray", "Black", "Navy"],
      image: "/images/shoes10.jpg",
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
