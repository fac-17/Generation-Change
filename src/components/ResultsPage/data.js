const data = [
  {
    project_id: 1,
    category: "Volunteering",
    title: "Help keep Hamworthy Park amazing.",
    project_duration_weeks: 8,
    session_frequency_per_week: 1,
    session_duration_hours: 2,
    group_size: 15,
    minimum_age: 8,
    maximum_age: 10
  },
  {
    id: 2645902,
    name: "Cheeseburger",
    description:
      "Our regular two-patty burger with two slices of melted American cheese added.",
    price: 8,
    category: "burger"
  },
  {
    id: 2645905,
    name: "Bacon Burger",
    description:
      "Our regular two-patty burger layered with two strips of crispy, sweet apple-wood smoked bacon.\r\n\r\n",
    price: 9,
    category: "burger"
  },
  {
    id: 2645907,
    name: "Bacon Cheeseburger",
    description:
      "Our regular two patty-burger with two strips of crispy apple-wood smoked bacon and two slices of melted American cheese.",
    price: 9,
    category: "burger"
  },
  {
    id: 2645936,
    name: "Little Hamburger",
    description:
      "One fresh high-quality patty hot off the grill, on a soft, toasted bun.",
    price: 9,
    category: "burger"
  },
  {
    id: 2645952,
    name: "Little Cheeseburger",
    description:
      "Our single patty burger with a slice of melted American cheese added. ",
    price: 9,
    category: "burger"
  },
  {
    id: 2645966,
    name: "Little Bacon Burger",
    description:
      "Our single patty burger with two strips of crispy apple-wood smoked bacon.",
    price: 9,
    category: "burger"
  },
  {
    id: 2645975,
    name: "Little Bacon Cheeseburger",
    description:
      "Our single patty burger with crispy, sweet apple-wood smoked bacon and a slice of melted American cheese.",
    price: 7,
    category: "burger"
  },
  {
    id: 2646012,
    name: "All Beef Hot Dog",
    description:
      "Our All-beef Hotdog, split and grilled lengthwise for a caramelised finish.",
    price: 7,
    category: "hot dog"
  },
  {
    id: 2646021,
    name: "Cheese Dog",
    description:
      "Our All-beef Hotdog, topped with a slice of melted American cheese.",
    price: 7,
    category: "hot dog"
  },
  {
    id: 2646037,
    name: "Bacon Dog",
    description:
      "Our All-beef Hotdog with a layer of crispy, sweet apple-wood smoked bacon.",
    price: 6,
    category: "hot dog"
  },
  {
    id: 2646044,
    name: "Bacon Cheese Dog",
    description:
      "Our All–beef Hotdog with a layer of melted American cheese topped with crispy, sweet apple-wood smoked bacon.",
    price: 8,
    category: "hot dog"
  },
  {
    id: 2646064,
    name: "Veggie Sandwich",
    description:
      "Create your own Veggie Sandwich with any or all of our 15 free toppings.",
    price: 7,
    category: "sandwich"
  },
  {
    id: 2646067,
    name: "Cheese Veggie Sandwich",
    description:
      "Create your own Veggie Sandwich with any or all of our 15 free toppings. Then add melted American cheese.",
    price: 5,
    category: "sandwich"
  },
  {
    id: 2646073,
    name: "Grilled Cheese",
    description:
      "An American classic done the Five Guys way. American cheese melted on an inside-out bun, grilled until golden brown.\r\n\r\n",
    price: 6,
    category: "sandwich"
  },
  {
    id: 2646078,
    name: "BLT",
    description:
      "A pile of our crispy, sweet apple-wood smoked bacon with fresh-cut, full-flavoured tomato and cool, crunchy lettuce on a toasted bun.",
    price: 6,
    category: "sandwich"
  },
  {
    id: 2646088,
    name: "Little Five Guys Style",
    description:
      "Hot, fresh boardwalk-style fries. Cut fresh, cooked twice and salted. Our fries are cooked in pure, tasty peanut oil. ",
    price: 3,
    category: "fries"
  },
  {
    id: 2646091,
    name: "Regular Five Guys Style",
    description:
      "Hot, fresh boardwalk-style fries. Cut fresh, cooked twice and salted. Our fries are cooked in pure, tasty peanut oil.",
    price: 3,
    category: "fries"
  },
  {
    id: 2646095,
    name: "Large Five Guys Style",
    description:
      "Hot, fresh boardwalk-style fries. Cut fresh, cooked twice and salted. Our fries are cooked in pure, tasty peanut oil.",
    price: 4,
    category: "fries"
  },
  {
    id: 6838192,
    name: "Little - Cajun Style",
    description:
      "Our Five Guys Fries with a heavy dose of Cajun spice added. Unsure? Get the seasoning on the side. Our fries are cooked in pure, tasty peanut oil.",
    price: 4,
    category: "fries"
  },
  {
    id: 6838205,
    name: "Regular Cajun Style",
    description:
      "Our Five Guys Fries with a heavy dose of Cajun spice added. Unsure? Get the seasoning on the side. Our fries are cooked in pure, tasty peanut oil.",
    price: 3,
    category: "fries"
  },
  {
    id: 6838213,
    name: "Large Cajun Style ",
    description:
      "Our Five Guys Fries with a heavy dose of Cajun spice added. Unsure? Get the seasoning on the side. Our fries are cooked in pure, tasty peanut oil.",
    price: 3,
    category: "fries"
  },
  {
    id: 2646111,
    name: "Coke",
    description: "500ml.",
    price: 2,
    category: "drink"
  },
  {
    id: 2646114,
    name: "Diet Coke",
    description: "500ml.",
    price: 2,
    category: "drink"
  },
  {
    id: 2646116,
    name: "Sprite",
    description: "500ml.",
    price: 2,
    category: "drink"
  },
  {
    id: 2656134,
    name: "Fanta Orange",
    description: "500ml.",
    price: 2,
    category: "drink"
  },
  {
    id: 2646120,
    name: "Smart Water ",
    description: "600ml.",
    price: 2,
    category: "drink"
  },
  {
    id: 2646121,
    name: "Budweiser",
    description: "330ml.",
    price: 2,
    category: "drink"
  },
  {
    id: 2646125,
    name: "Brooklyn Lager",
    description: "330ml.",
    price: 2.5,
    category: "drink"
  },
  {
    id: 2646129,
    name: "Corona",
    description: "330ml.",
    price: 2,
    category: "drink"
  }
];

export default data;
