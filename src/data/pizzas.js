const pizzas = [
  { id: 1, name: 'Margherita', price: 8.99, image: 'https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/05e8ba85-4444-4c19-b085-8012f1baf0b4_margherita_side.webp?ver=V0.0.1', description: 'Tomato, mozzarella & basil.', veg: true },
  { id: 2, name: 'Pepperoni', price: 10.99, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop', description: 'Mozzarella & spicy pepperoni.', veg: false },
  { id: 3, name: 'BBQ Chicken', price: 11.99, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop', description: 'BBQ sauce, chicken & onions.', veg: false },
  { id: 4, name: 'Hawaiian', price: 10.49, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop', description: 'Ham, pineapple & cheese.', veg: false },
  { id: 5, name: 'Veggie Delight', price: 9.99, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop', description: 'Peppers, olives, onions & mushrooms.', veg: true },
  { id: 6, name: 'Four Cheese', price: 11.49, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop', description: 'Mozzarella, parmesan, cheddar & gorgonzola.', veg: true },
  { id: 7, name: 'Meat Lovers', price: 12.99, image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=800&auto=format&fit=crop', description: 'Pepperoni, sausage, ham & bacon.', veg: false },
  { id: 8, name: 'Mexicana', price: 11.49, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop', description: 'Spicy beef, jalapeños & corn.', veg: false },
  { id: 9, name: 'Tandoori', price: 12.49, image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=800&auto=format&fit=crop', description: 'Tandoori chicken, onions & cilantro.', veg: false },
  { id: 10, name: 'Pesto Special', price: 10.99, image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=800&auto=format&fit=crop', description: 'Pesto sauce, mozzarella & cherry tomatoes.', veg: true },
  { id: 11, name: 'Mushroom Truffle', price: 12.99, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop', description: 'Wild mushrooms & truffle oil.', veg: true },
  { id: 12, name: 'Buffalo', price: 11.99, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop', description: 'Buffalo sauce & chicken.', veg: false },
  { id: 13, name: 'Spinach Ricotta', price: 10.49, image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=800&auto=format&fit=crop', description: 'Spinach, ricotta & garlic.', veg: true },
  { id: 14, name: 'Greek', price: 10.99, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop', description: 'Feta, olives, tomatoes & onion.', veg: true },
  { id: 15, name: 'Shrimp Scampi', price: 13.49, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop', description: 'Garlic shrimp & lemon butter.', veg: false },
  { id: 16, name: 'Supreme', price: 12.99, image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=800&auto=format&fit=crop', description: 'Everything — meats & veggies.', veg: false },
  { id: 17, name: 'Tricolore', price: 9.99, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop', description: 'Buffalo mozzarella, prosciutto & arugula.', veg: false },
  { id: 18, name: 'Calzone (Folded)', price: 10.99, image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=800&auto=format&fit=crop', description: 'Folded pizza with ricotta & ham.', veg: false },
  { id: 19, name: 'Garlic Lovers', price: 9.49, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop', description: 'Roasted garlic, cheese & herbs.', veg: true },
  { id: 20, name: 'Hot & Sweet', price: 11.49, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop', description: 'Chili honey drizzle with spicy salami.', veg: false },
];

export default pizzas;
