export const serverDomain = "https://localhost:7012/";

export const userStorage = "authUser";
export const cartStorage = "cart_items";
export const paymentMethodStorage = "payment_method";
export const tax = 0.18;
export const deliveryCost = 100;

export const dataDummies = {
  categories: [
    {
      id: 1,
      name: "electronics",
      picture:
        "https://s3-alpha-sig.figma.com/img/530f/7e16/05ec8831229db4c181b79227cb934d13?Expires=1652659200&Signature=KOqv3OiR9k14C~knqWQ1~FwheH6OwBYrrnnctIkhXdg6yiA1cWG7KfjYXZu1zMVcY7FBhrE1kZv-s4-16hYVe8fTfvvTl-X6yXub7tSuQCh-pERQbeIfAoE7kNsZqY6nBf~3l4syooUDrg3ly9xT2P5gb-gdYinxryRwzGOpNMse-qwSfXYNS4apchuUe8Y8Z2JDs5OGfql2himK3A1WKv5I0sbYszpcak4TuT~X-QcQaCWJ-WY8c1xMKgOdIm2FPbAwkkiHAmPxWCZJzZdZJS01e2aq48zSfceSvcyJvfVYENVY4JOhoCpzIczB9JgvkT9x1vHmk--SaSbQkNg-iQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 2,
      name: "footwear",
      picture:
        "https://s3-alpha-sig.figma.com/img/b7e5/5f8b/1e759fe105f5944d9d774ebf79876db6?Expires=1652659200&Signature=YfoKpE2VOG0Ot54UWmDzON3beqjfPOeKFPoe4nAi1Y9c9DoVPo4uBNQRqeV0IXZP0QtMal83TJLpjCqYF4zGAgcLZ7p1pg2TRtViXRIsSxuKuwkc7IThZEQW7oeyy06vYKeE8yIqoXEDrpTNxuqRrxh0NHSVzJZrSt1PQpE8xt76pUoH5P-WC5gdP0XeTTSa7DCAeJsId7nZWG9t5~RnKKmakoFKENjEX0gUU5iNWnR4PHoBZOCGduShUGfA-g6aNTGUK1sWD-t15dhjkg5nNoT0niEE3mKa6zbuqrMIZhk1URBLsNHu0~VO8CItMkYaYr805M7nY3tTTAu-ae8s2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 3,
      name: "games",
      picture:
        "https://s3-alpha-sig.figma.com/img/843f/3e7c/a7edd91d3af41ec2d3833247ce8604c2?Expires=1652659200&Signature=e4YrjFbQ4GmV5hBJNizDv7CCl8~cL5Epp2MxPCvmqWzTigS43l57ETqhEzLoOPdQ7SyJMVU9YUey8Y93np7zEGlJjFifJN5bq98X~xUls0VzfdVicCdZ6UGCvUteWnUDCW32wczLx8VYoL5NusCQMS5fUZjrrVZglDC4BY5fKVsSdS0V9sKk7Q7hDIQa2SCk6wXrw1DB9RDP7cWyjJ8nZUkjHih375GJarsbKB1~TVcYx9zNLdtg5mu7XcElZL2bP6mVfocttB78keqrTJ9O~a-xruGYBEU7XQvUN7~XcZovFAbC-Y3~yw4BNdzhuS064l29wF8rdldVDxSzkULFgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ],
  products: [
    {
      id: 1,
      name: "Crema de afeitar",
      price: 3000,
      quantity: 100,
      provider: 1,
      rating: 4,
      category: 1,
      picture:
        "https://res.cloudinary.com/mtree/f_auto,dpr_auto,q_auto/Gillette-MX/6zCTWRPaHWYCet3GvB9287/aead43fe54f1d460692bd74bae97ac86/Mask_Group_16_2x.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Crema de afeitar",
      price: 1000,
      quantity: 100,
      provider: 1,
      rating: 4,
      category: 2,
      picture:
        "https://res.cloudinary.com/mtree/f_auto,dpr_auto,q_auto/Gillette-MX/6zCTWRPaHWYCet3GvB9287/aead43fe54f1d460692bd74bae97ac86/Mask_Group_16_2x.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "Crema de afeitar",
      price: 2000,
      quantity: 100,
      provider: 1,
      category: 3,
      rating: 4,
      picture:
        "https://res.cloudinary.com/mtree/f_auto,dpr_auto,q_auto/Gillette-MX/6zCTWRPaHWYCet3GvB9287/aead43fe54f1d460692bd74bae97ac86/Mask_Group_16_2x.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
  providers: [
    {
      id: 1,
      name: "Sony.inc",
      phone: "8097890987",
      email: "sony@gmail.com",
    },
  ],
  user: {
    id: 1,
    email: "jlbello24@gmail.com",
    firstName: "Juan Luis",
    lastName: "Bello Polanco",
    phone: "8297813572",
    country: {
      id: 1,
      name: "República Dominicana",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/300px-Flag_of_the_Dominican_Republic.svg.png",
    },
    addresses: [
      {
        id: 1,
        user: 1,
        street: "Villa mella, crossing 1",
        building: "23",
        postal_code: "4431",
        city: {
          id: 2,
          name: "Boston",
          country: 2,
        },
      },
    ],
    credit_cards: [
      {
        id: 1,
        user: 1,
        name: "JUAN LUIS",
        number: "81092344",
        cvv: "123",
        expiration_date: new Date(),
      },
      {
        id: 2,
        user: 1,
        name: "JUAN LUIS",
        number: "423413312",
        cvv: "122",
        expiration_date: new Date(),
      },
    ],
  },
  countries: [
    {
      id: 1,
      name: "República Dominicana",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/300px-Flag_of_the_Dominican_Republic.svg.png",
      cities: [
        {
          id: 1,
          name: "Santo Domingo",
          country: 1,
        },
      ],
    },
    {
      id: 2,
      name: "Estados Unidos",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/300px-Flag_of_the_United_States.svg.png",
      cities: [
        {
          id: 2,
          name: "Boston",
          country: 2,
        },
      ],
    },
  ],

  cities: [
    {
      id: 1,
      name: "Santo Domingo",
      country: 1,
    },
    {
      id: 2,
      name: "Boston",
      country: 2,
    },
  ],
  addresses: [
    {
      id: 1,
      user: 1,
      street: "Villa mella, crossing 1",
      building: "23",
      postal_code: "4431",
      city: {
        id: 2,
        name: "Boston",
        country: 2,
      },
    },
  ],
  orders: [
    {
      id: 1,
      user: 1,
      total: 200,
      shipping_cost: 200,
      order_details: [{ order_id: 1, product_id: 1, price: 200 }],
      state: "canceled",
      card: { last_digits: 3455, type: "visa" },
      estimated_arrival: new Date(),
      arrived_at: null,
      canceled_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      user: 1,
      total: 200,
      shipping_cost: 200,
      order_details: [{ order_id: 1, product_id: 1, price: 200 }],
      state: "shipping",
      card: { last_digits: 3455, type: "visa" },
      estimated_arrival: new Date(),
      arrived_at: null,
      canceled_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
  credit_cards: [
    {
      id: 1,
      name: "juan",
      user: 1,
      number: "81092344",
      cvv: 123,
      expiration_date: new Date(),
    },
    {
      id: 2,
      user: 1,
      name: "julio",
      number: "423413312",
      cvv: 122,
      expiration_date: new Date(),
    },
  ],
};

export const apiRoutes = {
  register: "api/users",
  login: "api/users/login",
  products: "api/products",
  updateManyProducts: "api/products/many",
  orders: "api/orders",
  countries: "api/countries",
  credit_cards: "api/creditcards",
  categories: "api/categories",
  address: "api/addresses",
};
