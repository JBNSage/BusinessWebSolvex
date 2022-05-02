export const serverDomain = "";

export const userStorage = "authUser";

export const dataDummies = {
  categories: [
    {
      id: 1,
      name: "electronics",
    },
    {
      id: 2,
      name: "footwear",
    },
    {
      id: 3,
      name: "games",
    },
  ],
  products: [
    {
      id: 1,
      name: "Crema de afeitar",
      price: 200,
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
      price: 200,
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
      price: 200,
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
    first_name: "Juan Luis",
    last_name: "Bello Polanco",
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
        city: 1,
      },
    ],
    credit_cards: [
      {
        id: 1,
        user: 1,
        number: "81092344",
        cvv: 123,
        due_date: new Date(),
      },
      {
        id: 2,
        user: 1,
        number: "423413312",
        cvv: 122,
        due_date: new Date(),
      },
    ],
  },
  countries: [
    {
      id: 1,
      name: "República Dominicana",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/300px-Flag_of_the_Dominican_Republic.svg.png",
    },
    {
      id: 2,
      name: "Estados Unidos",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/300px-Flag_of_the_United_States.svg.png",
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
      city: 1,
    },
  ],
  orders: [
    {
      id: 1,
      user: 1,
      product: 1,
      price: 200,
      discount: null,
      type: "delivery",
      estimated_arrival: new Date(),
      arrived_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 1,
      user: 1,
      product: 2,
      price: 500,
      discount: { percentage_discounted: 0.1, reason: "coupon" },
      type: "delivery",
      estimated_arrival: new Date(),
      arrived_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
  credit_cards: [
    {
      id: 1,
      user: 1,
      number: "81092344",
      cvv: 123,
      due_date: new Date(),
    },
    {
      id: 2,
      user: 1,
      number: "423413312",
      cvv: 122,
      due_date: new Date(),
    },
  ],
};

export const apiRoutes = {
  register: dataDummies.user,
  login: dataDummies.user,
  products: dataDummies.products,
  orders: dataDummies.orders,
  countries: dataDummies.countries,
  credit_cards: dataDummies.credit_cards,
  categories: dataDummies.categories,
};
