import { title } from "process";

const menuData = [
    // {
    //   section: "Desserts",
    //   items: [
    //     {
    //       id: 1,
    //       name: "Oladushki",
    //       prepTime: "40 min",
    //       cookTime: "20 min",
    //       totalTime: "60 min",
    //       ingredients: "eggs, sugar, salt, yoghurt, flour, baking soda",
    //       measurement: [
    //         {
    //             title: "Ingredients",
    //             items: [
    //                 { name: "Eggs", quantity: "2 PCs." },
    //                 { name: "Sugar", quantity: "3 tbsp." },
    //                 { name: "Salt", quantity: "0.5 tsp." },
    //                 { name: "Yoghurt", quantity: "200 ml." },
    //                 { name: "Flour", quantity: "200 g." },
    //                 { name: "Baking soda", quantity: "2 tsp." },
    //             ]
    //         },
    //       ],
    //       description: "Fluffy and delicious pancakes.",
    //       directions: [
    //         "Mix flour, sugar, and baking soda in a bowl.",
    //         "Add eggs and yoghurt; stir to combine.",
    //         "Heat a skillet over medium heat and pour batter.",
    //         "Cook until golden brown on both sides.",
    //       ],
    //       image: "pancakes.jpg",
    //     },
    //     {
    //         id: 2,
    //         name: "Blinchiki",
    //         prepTime: "10 min",
    //         cookTime: "30 min",
    //         totalTime: "40 min",
    //         ingredients: "eggs, sugar, salt, flour, milk, water, vegetable oil",
    //         measurement: [
    //             "Eggs - 3 PCs.",
    //             "Salt - 0.5 tsp.",
    //             "Sugar - 3 tbsp.",
    //             "Flour - 200 g.", 
    //             "Milk - 200 ml.",    
    //             "Boiling water - 200 ml.",
    //             "Vegetable oil - 3 tbsp.",
    //         ],
    //         description: "Fluffy and delicious pancakes.",
    //         directions: [
    //           "Mix flour, sugar, and baking soda in a bowl.",
    //           "Add eggs and yoghurt; stir to combine.",
    //           "Heat a skillet over medium heat and pour batter.",
    //           "Cook until golden brown on both sides.",
    //         ],
    //         image: "pancakes.jpg",
    //       },
    //       {
    //         id: 3,
    //         name: "Cottage cheese pie",
    //         prepTime: "10 min",
    //         cookTime: "45 min",
    //         totalTime: "55 min",
    //         ingredients: "butter, flour, sugar, cottage cheese, eggs, sour cream, vanilla",
    //         measurement: [
    //             {
    //                 title: "Crust:",
    //                 items: [
    //                     "Butter - 150 g.",
    //                     "Flour - 275 g.", 
    //                     "Sugar - 100 g.",
    //                 ]
    //             },
    //             {
    //                 title: "Filling:",
    //                 items: [
    //                     "Cottage cheese - 300 g.",
    //                     "Eggs - 2 PCs.",
    //                     "Sugar - 125 g.",
    //                     "Sour cream - 150 g.",
    //                     "Vanilla - 3 g.",
    //                 ]
    //             }
                
    //         ],
    //         description: "Fluffy and delicious pancakes.",
    //         directions: [
    //           "Mix flour, sugar, and baking soda in a bowl.",
    //           "Add eggs and yoghurt; stir to combine.",
    //           "Heat a skillet over medium heat and pour batter.",
    //           "Cook until golden brown on both sides.",
    //         ],
    //         image: "pancakes.jpg",
    //       },
    //       {
    //         id: 4,
    //         name: "Lemon cake",
    //         prepTime: "10 min",
    //         cookTime: "35 min",
    //         totalTime: "45 min",
    //         ingredients: "eggs, sugar, lemon, vegetable oil, milk, flour, baking powder",
    //         measurement: [
    //             "Eggs - 1 PC.",
    //             "Granulated sugar - 150 g.",
    //             "Lemon - 1 PC.",
    //             "Vegetable oil - 100 ml.",
    //             "Milk - 200 ml.",
    //             "All-purpose flour - 260 g.",
    //             "Baking powder - 1.5 tsp.",
                
    //         ],
    //         description: "Fluffy and delicious pancakes.",
    //         directions: [
    //           "Mix flour, sugar, and baking soda in a bowl.",
    //           "Add eggs and yoghurt; stir to combine.",
    //           "Heat a skillet over medium heat and pour batter.",
    //           "Cook until golden brown on both sides.",
    //         ],
    //         image: "pancakes.jpg",
    //       },
    //       {
    //         id: 5,
    //         name: "Carrot cake",
    //         prepTime: "15 min",
    //         cookTime: "50 min",
    //         totalTime: "65 min",
    //         ingredients: "flour, baking powder, baking soda, salt, cinnamon, vegetable oil, brown sugar, granulated sugar, eggs, vanilla, carrots, pecans, whipped cream, powdered sugar",
    //         measurement: [
    //             {
    //                 title: "Cake:",
    //                 items: [
    //                     "All-purpose flour - 300 g.",
    //                     "Baking powder - 2 tsp.",
    //                     "Baking soda - 1 tsp.",
    //                     "Salt - 1 tsp.",
    //                     "Cinnamon - 1 tsp.",
    //                     "Vegetable oil - 320 ml.",
    //                     "Brown sugar - 200 g.",
    //                     "Granulated sugar - 200 g.",
    //                     "Eggs - 4 PCs.",
    //                     "Vanilla - 2 tsp.",
    //                     "Carrots - 200 g.",
    //                     "Crushed pecans - 100 g.",
    //                 ]
    //             },
    //             {
    //                 title: "Cream:",
    //                 items: [
    //                     "Whipped cream - 200 g.",
    //                     "Powdered sugar - 100 g.",
    //                 ]
    //             }
    //         ],
    //         description: "Fluffy and delicious pancakes.",
    //         directions: [
    //           "Mix flour, sugar, and baking soda in a bowl.",
    //           "Add eggs and yoghurt; stir to combine.",
    //           "Heat a skillet over medium heat and pour batter.",
    //           "Cook until golden brown on both sides.",
    //         ],
    //         image: "pancakes.jpg",
    //       },
    //       {
    //       id: 6,
    //       name: "Apple cake",
    //       prepTime: "15 min",
    //       cookTime: "50 min",
    //       totalTime: "65 min",
    //       ingredients: "apples, sugar, flour, eggs, salt",
    //       measurement: [
    //         "Sour apples - 500 g.",   
    //         "Granulated sugar - 160 g.",
    //         "All-purpose flour - 160 g.",
    //         "Eggs - 4 PCs.",
    //         "Salt - 3 g.",
              
    //       ],
    //       description: "Fluffy and delicious pancakes.",
    //       directions: [
    //         "Mix flour, sugar, and baking soda in a bowl.",
    //         "Add eggs and yoghurt; stir to combine.",
    //         "Heat a skillet over medium heat and pour batter.",
    //         "Cook until golden brown on both sides.",
    //       ],
    //       image: "pancakes.jpg",
    //     },
    //     {
    //         id: 7,
    //         name: "Peach cobbler",
    //         prepTime: "15 min",
    //         cookTime: "25 min",
    //         totalTime: "40 min",
    //         ingredients: "peaches, sugar, butter, flour, baking powder, salt, milk, vanilla ice cream",
    //         measurement: [
    //             {
    //                 title: "Peaches:",
    //                 items: [
    //                     "Peaches - 4 PCs.",
    //                     "Granulated sugar - 50 g.",
    //                     "Brown sugar - 50 g.",
    //                 ]
    //             },
    //             {
    //                 title: "Crust:",
    //                 items: [
    //                     "Granulated sugar - 150 g.",
    //                     "Butter - 7 tbsp.",
    //                     "All-purpose flour - 1 cup.",
    //                     "Baking powder - 2 tsp.",
    //                     "Salt - 1/4 tsp.",
    //                     "Milk - 3/4 cup.",
    //                     "Powdered sugar - 100 g.",
    //                 ]
    //             },
    //             {
    //                 title: "Optional:",
    //                 items: [
    //                     "Vanilla ice cream - 1 scoop",
    //                 ]
    //             }
    //         ],
    //         description: "Fluffy and delicious pancakes.",
    //         directions: [
    //           "Mix flour, sugar, and baking soda in a bowl.",
    //           "Add eggs and yoghurt; stir to combine.",
    //           "Heat a skillet over medium heat and pour batter.",
    //           "Cook until golden brown on both sides.",
    //         ],
    //         image: "pancakes.jpg",
    //       }, 
    //     {
    //         id: 8,
    //         name: "Choux pastry",
    //         prepTime: "15 min",
    //         cookTime: "35 min",
    //         totalTime: "50 min",
    //         ingredients: "water, butter, salt, sugar, flour, eggs",
    //         measurement: [
    //             "Water - 160 ml.",
    //             "Butter - 80 g.",
    //             "Salt - 1/4 tsp.",
    //             "Sugar - 1 tsp.",
    //             "Flour - 150-200 g.",
    //             "Eggs - 2 PCs.",
                
    //         ],
    //         description: "Fluffy and delicious pancakes.",
    //         directions: [
    //           "Mix flour, sugar, and baking soda in a bowl.",
    //           "Add eggs and yoghurt; stir to combine.",
    //           "Heat a skillet over medium heat and pour batter.",
    //           "Cook until golden brown on both sides.",
    //         ],
    //         image: "pancakes.jpg",
    //       },
    //       {
    //         id: 9,
    //         name: "Chocolate pudding",
    //         prepTime: "10 min",
    //         cookTime: "15 min",
    //         totalTime: "25 min",
    //         ingredients: "sugar, cocoa powder, milk, egg yolks, cornstarch, butter, vanilla extract",
    //         measurement: [
    //             "Sugar - 100 g.",
    //             "Cocoa powder - 33 g.",
    //             "Whole milk - 540 ml.",
    //             "Egg yolks - 2 PCs.",
    //             "Cornstarch - 2 tbsp.",
    //             "Butter - 2 tbsp.",
    //             "Vanilla extract - 2 tsp.",
    //         ],
    //         description: "Fluffy and delicious pancakes.",
    //         directions: [
    //           "Mix flour, sugar, and baking soda in a bowl.",
    //           "Add eggs and yoghurt; stir to combine.",
    //           "Heat a skillet over medium heat and pour batter.",
    //           "Cook until golden brown on both sides.",
    //         ],
    //         image: "pancakes.jpg",
    //       }, 
    //   ],
    // },
    {
      section: "Main Dishes",
      items: [
        {
          id: 1,
          name: "Mongolian beef",
          servings: "4",
          prepTime: "10 min",
          cookTime: "15 min",
          totalTime: "25 min",
          ingredients: "beef stroganoff, cornstarch, vegetable oil, ground pepper, onion powder, salt, garlic, soy sauce, brown sugar, water",
          measurement: [
            {
                title: "Beef:",
                items: [
                    { name: "Beef stroganoff", quantity: "500 g." },
                    { name: "Cornstarch", quantity: "30 g." },
                    { name: "Vegetable oil", quantity: "30 ml." },
                    { name: "Ground pepper", quantity: "2 tsp." },
                    { name: "Onion powder", quantity: "2 tbsp" },
                    { name: "Salt", quantity: "1 pinch" },
                ]
            },
            {
                title: "Sauce:",
                items: [
                    { name: "Vegetable oil", quantity: "20 ml." },    
                    { name: "Garlic", quantity: "1 PC." },
                    { name: "Soy sauce", quantity: "40 ml." },
                    { name: "Brown sugar", quantity: "40 g." },
                    { name: "Cornstarch", quantity: "10 g." },
                    { name: "Water", quantity: "70 ml." },
                ]
            }
        ],
          description: "This quick and easy dish has become a favorite in my house, perfect for busy weeknights when you crave something satisfying and full of flavor. The tender beef, coated in a rich, glossy sauce, pairs beautifully with plain white rice and roasted vegetables, creating a meal that's as comforting as it is delicious.",
          directions: [
            {
              step: "Prepare the Beef:",
              subSteps: [
                "If using steak, slice into thin strips against the grain for tenderness.",
                "Place the beef in a large bowl, toss with cornstarch, and let sit for 5 minutes.",
              ]
            },
            {
              step: "Cook the Beef:",
              subSteps: [
                "Preheat the air fryer to 180°C.",
                "Spritz the beef with oil, then season with salt, pepper, and onion powder. Toss to coat.",
                "Air fry for 10–12 minutes, shaking the basket every few minutes for even cooking.",
              ]
            },
            {
              step: "Prepare the Sauce:",
              subSteps: [
                "Heat olive oil in a small pan over medium heat. Add garlic and sauté until golden.",
                "Stir in soy sauce, water, brown sugar, and a cornstarch slurry (cornstarch mixed with water).",
                "Bring to a boil and cook for 6–7 minutes, stirring occasionally, until the sauce thickens.",
              ]
            },
            {
              step: "Combine and Serve:",
              subSteps: [
                "Add the cooked beef to the sauce, toss to coat, and cook for an additional 1–2 minutes.",
                "Serve hot with plain white rice and roasted vegetables.",
              ]
            }
          ],
          image: "chocolate_cake.jpg",
        },
        {
            id: 2,
            name: "Creamy pasta",
            prepTime: "15 min",
            cookTime: "15 min",
            totalTime: "30 min",
            ingredients: "spaghetti, heavy cream, garlic, vegetable oil, salt, pepper, salmon & shrimp / chicken breast, broccoli, spinach, mushrooms",
            measurement: [
                {
                    title: "Base:",
                    items: [
                        { name: "Spaghetti", quantity: "200 g." },
                        { name: "Salmon & Shrimp / Chicken breast", quantity: "400 g." }, 
                    ]
                },
                {
                    title: "Creamy sauce:",
                    items: [
                        { name: "Heavy cream", quantity: "200 ml." },
                        { name: "Garlic", quantity: "1 PC." },
                        { name: "Vegetable oil", quantity: "20 ml." },
                        { name: "Salt", quantity: "0.5 tsp. (to taste)" },
                        { name: "Pepper", quantity: "0.5 tsp. (to taste)" },
                        { name: "Broccoli", quantity: "1 PC." },
                        { name: "Spinach", quantity: "200 g." },
                        { name: "Mushrooms", quantity: "100 g." },
                    ]
                }
            ],
            description: "When I’m not sure what I’m craving, this creamy seafood pasta is my go-to recipe. It’s easy to make, quick to prepare, and packed with nutritious ingredients that leave me feeling satisfied. The combination of tender salmon and shrimp (or chicken, if you prefer), vibrant broccoli and spinach, and a velvety cream sauce makes for a comforting yet wholesome dish. Paired with perfectly cooked spaghetti, it’s a meal that never fails to hit the spot.",
            directions: [
              {
                step: "Prepare the Ingredients:",
                subSteps: [
                  "Cook the spaghetti according to the package instructions. Drain and set aside.",
                  "If using seafood, cut salmon into bite-sized pieces and clean the shrimp (make sure it's deveined). Alternatively, dice the chicken breast.",
                ]
              },
              {
                step: "Season and Cook the Protein:",
                subSteps: [
                  "In a large bowl, season the salmon and shrimp (or chicken) with salt and pepper.",
                  "Heat the vegetable oil in a large skillet over medium heat.",
                  "Add the seasoned protein and cook until golden and fully cooked. Cook shrimp for 2–3 minutes per side until pink and opaque, salmon for 3–4 minutes per side until golden and flaky, or chicken for 4–5 minutes per side until golden and fully cooked. Remove from the skillet and set aside."
                ]
              },
              {
                step: "Sauté the Vegetables:",
                subSteps: [
                  "In the same skillet, add minced garlic and sauté until fragrant (about 2-3 minutes).",
                  "Add the broccoli, mushrooms, and spinach to the skillet. Season lightly with salt and pepper, close with a lid, and cook for 3–4 minutes until softened.",
                ]
              },
              {
                step: "Combine and Serve:",
                subSteps: [
                  "Return the cooked spaghetti, salmon and shrimp (or chicken) to the skillet.",
                  "Pour in the heavy cream and stir well. Taste and adjust seasoning if needed.",
                  "Bring the sauce to a gentle simmer and take the skillet off the heat.",
                  "Plate the pasta and serve hot. Garnish with grated Parmesan cheese or fresh parsley if desired. Enjoy!"
                ]
              }
            ],
            image: "chocolate_cake.jpg",
          },
          // {
          //   id: 3,
          //   name: "Pasta bolognese",
          //   prepTime: "5 min",
          //   cookTime: "35 min",
          //   totalTime: "40 min",
          //   ingredients: "spaghetti, ground beef, garlic, vegetable oil, salt, pepper, napoletana sauce, carrot, celery, bell pepper, chopped tomatoes, water",
          //   measurement: [
          //       {
          //           title: "Bolognese sauce:",
          //           items: [
          //             { name: "Ground beef", quantity: "500 g." },
          //             { name: "Garlic", quantity: "1 PC." },
          //             { name: "Vegetable oil", quantity: "20 ml." },
          //             { name: "Salt", quantity: "0.5 tsp. (to taste)" },
          //             { name: "Pepper", quantity: "0.5 tsp. (to taste)" },
          //             { name: "Napoletana sauce", quantity: "200 g." },  
          //             { name: "Carrot", quantity: "1 PC." },
          //             { name: "Celery", quantity: "1 PC." },
          //             { name: "Bell pepper", quantity: "1 PC." },
          //             { name: "Chopped tomatoes", quantity: "200 g." },
          //             { name: "Water", quantity: "100 ml." },
          //           ]
          //       },
          //       {
          //           title: "Base:",
          //           items: [
          //               { name: "Spaghetti", quantity: "200 g." },
          //           ]
          //       }
          //   ],
          //   description: "Rich and moist chocolate cake.",
          //   directions: [
          //     "Mix dry ingredients in a bowl.",
          //     "Add wet ingredients and combine.",
          //     "Bake in a preheated oven at 180°C for 30 minutes.",
          //   ],
          //   image: "chocolate_cake.jpg",
          // },
          // {
          //   id: 4,
          //   name: "Lasagna",
          //   prepTime: "75 min",
          //   cookTime: "45 min",
          //   totalTime: "120 min",
          //   ingredients: "lasagna sheets, ground beef, garlic, vegetable oil, salt, pepper, napoletana sauce, carrot, celery, bell pepper, chopped tomatoes, water",
          //   measurement: [
          //       {
          //           title: "Bolognese Sauce:",
          //           items: [
          //             { name: "Ground beef", quantity: "500 g." },
          //             { name: "Garlic", quantity: "1 PC." },
          //             { name: "Vegetable oil", quantity: "20 ml." },
          //             { name: "Salt", quantity: "0.5 tsp. (to taste)" },
          //             { name: "Pepper", quantity: "0.5 tsp. (to taste)" },
          //             { name: "Napoletana sauce", quantity: "200 g." },  
          //             { name: "Carrot", quantity: "1 PC." },
          //             { name: "Celery", quantity: "1 PC." },
          //             { name: "Bell pepper", quantity: "1 PC." },
          //             { name: "Chopped tomatoes", quantity: "200 g." },
          //             { name: "Water", quantity: "100 ml." },
          //           ]
          //         },
          //         {
          //           title: "Bechamel Sauce:",
          //           items: [
          //               { name: "Butter", quantity: "100 g." },   
          //               { name: "All purpose flour", quantity: "150 g." },
          //               { name: "Milk", quantity: "1 L." },
          //               { name: "Salt", quantity: "0.5 tsp. (to taste)" },
          //               { name: "Black pepper", quantity: "0.5 tsp. (to taste)" },
          //           ]
          //         },
          //         {
          //           title: "Base:",
          //           items: [
          //             { name: "Lasagna sheets", quantity: "200 g." },
          //             { name: "Mozzarella cheese", quantity: "200 g." }
          //           ]
          //         }
          // ],
          //   description: "Rich and moist chocolate cake.",
          //   directions: [
          //     "Mix dry ingredients in a bowl.",
          //     "Add wet ingredients and combine.",
          //     "Bake in a preheated oven at 180°C for 30 minutes.",
          //   ],
          //   image: "chocolate_cake.jpg",
          // },
          // {
          //   id: 4,
          //   name: "Soy sauce chicken thighs",
          //   prepTime: "5 min",
          //   cookTime: "20 min",
          //   totalTime: "25 min",
          //   ingredients: "chicken thighs, soy sauce, honey / sugar, salt, black pepper, garlic, onion powder, paprika powder",
          //   measurement: [
          //       { name: "Boneless chicken thighs with skin", quantity: "0.5 kg" },
          //       { name: "Soy sauce", quantity: "4 tbsp" },
          //       { name: "Honey / sugar", quantity: "2 tbsp" },
          //       { name: "Salt", quantity: "to taste" },
          //       { name: "Black pepper", quantity: "to taste" },
          //       { name: "Garlic", quantity: "to taste" },
          //       { name: "Onion powder", quantity: "to taste" },
          //       { name: "Paprika powder", quantity: "to taste" },
          // ],
          //   description: "Rich and moist chocolate cake.",
          //   directions: [
          //     "Mix dry ingredients in a bowl.",
          //     "Add wet ingredients and combine.",
          //     "Bake in a preheated oven at 180°C for 30 minutes.",
          //   ],
          //   image: "chocolate_cake.jpg",
          // },
          // {
          //   id: 5,
          //   name: "Korean-style fried chicken",
          //   prepTime: "15 min",
          //   cookTime: "20 min",
          //   totalTime: "35 min",
          //   ingredients: "chicken wings, vegetable oil, corn starch, ketchup, gochujang, honey, brown sugar, soy sauce, sesame oil, garlic",
          //   measurement: [
          //       {
          //           title: "Chicken:",
          //           items: [
          //               { name: "Chicken wings", quantity: "500 g." },
          //               { name: "Vegetable oil", quantity: "1 tbsp." },
          //               { name: "Corn starch", quantity: "3 tbsp." },
          //           ]
          //       },
          //       {
          //           title: "Sauce:",
          //           items: [
          //               { name: "Ketchup", quantity: "1 tbsp." },
          //               { name: "Gochujang", quantity: "1 tbsp." },
          //               { name: "Honey", quantity: "1 tbsp." },
          //               { name: "Brown sugar", quantity: "1 tbsp." },
          //               { name: "Soy sauce", quantity: "0.5 tbsp." },
          //               { name: "Sesame oil", quantity: "0.5 tbsp." },
          //               { name: "Garlic", quantity: "2 PCs." },
          //           ]
          //       }
          //   ],
          //   description: "Rich and moist chocolate cake.",
          //   directions: [
          //     "Mix dry ingredients in a bowl.",
          //     "Add wet ingredients and combine.",
          //     "Bake in a preheated oven at 180°C for 30 minutes.",
          //   ],
          //   image: "chocolate_cake.jpg",
          // },
          // {
          //   id: 6,
          //   name: "Chicken breast (air fryer)",
          //   prepTime: "5 min",
          //   cookTime: "15 min",
          //   totalTime: "20 min",
          //   ingredients: "chicken breast, salt, black pepper, garlic, onion powder, paprika powder",
          //   measurement: [
          //       { name: "Chicken breast", quantity: "300 g." },
          //       { name: "Salt", quantity: "to taste" },
          //       { name: "Black pepper", quantity: "to taste" },
          //       { name: "Garlic", quantity: "to taste" },
          //       { name: "Onion powder", quantity: "to taste" },
          //       { name: "Paprika powder", quantity: "to taste" },
          // ],
          //   description: "Rich and moist chocolate cake.",
          //   directions: [
          //     "Mix dry ingredients in a bowl.",
          //     "Add wet ingredients and combine.",
          //     "Bake in a preheated oven at 180°C for 30 minutes.",
          //   ],
          //   image: "chocolate_cake.jpg",
          // },
          // {
          //   id: 7,
          //   name: "Salmon (air fryer)",
          //   prepTime: "8 min",
          //   cookTime: "12 min",
          //   totalTime: "20 min",
          //   ingredients: "chicken thighs, soy sauce, honey / sugar, salt, black pepper, garlic, onion powder, paprika powder",
          //   measurement: [
          //       { name: "Salmon", quantity: "300 g." },
          //       { name: "Salt", quantity: "to taste" },
          //       { name: "Black pepper", quantity: "to taste" },
          //       { name: "Garlic", quantity: "to taste" },
          //       { name: "Oregano", quantity: "to taste" },
          // ],
          //   description: "Rich and moist chocolate cake.",
          //   directions: [
          //     "Mix dry ingredients in a bowl.",
          //     "Add wet ingredients and combine.",
          //     "Bake in a preheated oven at 180°C for 30 minutes.",
          //   ],
          //   image: "chocolate_cake.jpg",
          // },
          // {
          //   id: 8,
          //   name: "Oven baked chicken",
          //   prepTime: "45 min",
          //   cookTime: "45 min",
          //   totalTime: "90 min",
          //   ingredients: "chicken thighs & wings, soy sauce, salt, black pepper, garlic, oregano, mayonnaise",
          //   measurement: [
          //       { name: "Chicken thighs & wings", quantity: "750 g." },
          //       { name: "Salt", quantity: "to taste" },
          //       { name: "Black pepper", quantity: "to taste" },
          //       { name: "Garlic", quantity: "3 PCs." },
          //       { name: "Oregano", quantity: "to taste" },
          //       { name: "Mayonnaise", quantity: "6 tbsp." },
          //       { name: "Soy sauce", quantity: "50 ml." },
          // ],
          //   description: "Rich and moist chocolate cake.",
          //   directions: [
          //     "Mix dry ingredients in a bowl.",
          //     "Add wet ingredients and combine.",
          //     "Bake in a preheated oven at 180°C for 30 minutes.",
          //   ],
          //   image: "chocolate_cake.jpg",
          // },
          // {
          //   id: 9,
          //   name: "Ground beef patty",
          //   prepTime: "30 min",
          //   cookTime: "10 min",
          //   totalTime: "40 min",
          //   ingredients: "ground beef, salt, black pepper, garlic, onion powder, paprika powder",
          //   measurement: [
          //       { name: "Ground beef", quantity: "500 g." },
          //       { name: "Salt", quantity: "to taste" },
          //       { name: "Black pepper", quantity: "to taste" },
          //       { name: "Garlic", quantity: "3 PCs." },
          //       { name: "Onion powder", quantity: "to taste" },
          //       { name: "Carrot", quantity: "1 PC." },
          //       { name: "Potato", quantity: "1 PC." },
          //       { name: "Zucchini", quantity: "0.5 PC." },
          //       { name: "Egg", quantity: "2 PCs." },
          // ],
          //   description: "Rich and moist chocolate cake.",
          //   directions: [
          //     "Mix dry ingredients in a bowl.",
          //     "Add wet ingredients and combine.",
          //     "Bake in a preheated oven at 180°C for 30 minutes.",
          //   ],
          //   image: "chocolate_cake.jpg",
          // },
      ],
    },
    // {
    //     section: "Side Dishes",
    //     items: [
    //       {
    //         id: 1,
    //         name: "Cooked rice",
    //         prepTime: "5 min",
    //         cookTime: "15 min",
    //         totalTime: "20 min",
    //         ingredients: "rice, water, salt, sesame oil",
    //         measurement: [
    //           { name: "Rice", quantity: "200 g." },
    //           { name: "Water", quantity: "375 g." },
    //           { name: "Salt", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Sesame oil", quantity: "1 tbsp." },
    //       ],
    //         description: "Rich and moist chocolate cake.",
    //         directions: [
    //         ],
    //         image: "chocolate_cake.jpg",
    //       },
    //       {
    //         id: 2,
    //         name: "Potato purée",
    //         prepTime: "5 min",
    //         cookTime: "25 min",
    //         totalTime: "30 min",
    //         ingredients: "potatoes, water, salt, butter, milk",
    //         measurement: [
    //           { name: "Potatoes", quantity: "300 g. (3-4 PCs.)" },
    //           { name: "Water", quantity: "500 g." },
    //           { name: "Salt", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Butter", quantity: "50 g." },
    //           { name: "Milk", quantity: "100 ml." },
    //       ],
    //         description: "Rich and moist chocolate cake.",
    //         directions: [
    //         ],
    //         image: "chocolate_cake.jpg",
    //       },
    //       {
    //         id: 3,
    //         name: "Potato wedges",
    //         prepTime: "5 min",
    //         cookTime: "20 min",
    //         totalTime: "25 min",
    //         ingredients: "potatoes, salt, black pepper, paprika powder, oregano, vegetable oil",
    //         measurement: [
    //           { name: "Potatoes", quantity: "300 g. (3-4 PCs.)" },
    //           { name: "Salt", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Black pepper", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Paprika powder", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Oregano", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Vegetable oil", quantity: "2 tbsp." },
    //       ],
    //         description: "Rich and moist chocolate cake.",
    //         directions: [
    //         ],
    //         image: "chocolate_cake.jpg",
    //       },
    //       {
    //         id: 4,
    //         name: "Oven baked potatoes",
    //         prepTime: "15 min",
    //         cookTime: "45 min",
    //         totalTime: "60 min",
    //         ingredients: "potatoes, water, salt, butter",
    //         measurement: [
    //           { name: "Potatoes", quantity: "300 g." },
    //           { name: "Salt", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Black pepper", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Oregano", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Mayonnaise", quantity: "3 tbsp." },
    //           { name: "Soy sauce", quantity: "2 tbsp." },
    //       ],
    //         description: "Rich and moist chocolate cake.",
    //         directions: [
    //         ],
    //         image: "chocolate_cake.jpg",
    //       },
    //       {
    //         id: 5,
    //         name: "Garlic edamame",
    //         prepTime: "5 min",
    //         cookTime: "12 min",
    //         totalTime: "17 min",
    //         ingredients: "edamame, garlic, salt, black pepper, sesame oil",
    //         measurement: [
    //           { name: "Edamame", quantity: "200 g." },
    //           { name: "Garlic", quantity: "1 PC." },
    //           { name: "Salt", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Black pepper", quantity: "0.5 tsp. (to taste)" },
    //           { name: "Sesame oil", quantity: "2 tbsp." },
    //       ],
    //         description: "Rich and moist chocolate cake.",
    //         directions: [
    //         ],
    //         image: "chocolate_cake.jpg",
    //       },
    //       {
    //         id: 6,
    //         name: "Roasted brussels sprouts",
    //         prepTime: "5 min",
    //         cookTime: "12 min",
    //         totalTime: "17 min",
    //         ingredients: "brussels sprouts, salt, black pepper, vegetable oil",
    //         measurement: [
    //           {
    //             title: "Ingredients",
    //             items: [
    //               { name: "Brussels sprouts", quantity: "200 g" },
    //               { name: "Salt", quantity: "0.5 tsp. (to taste)" },
    //               { name: "Black pepper", quantity: "0.5 tsp. (to taste)" },
    //               { name: "Vegetable oil", quantity: "2 tbsp" }
    //             ]
    //           }
    //       ],
    //         description: "Rich and moist chocolate cake.",
    //         directions: [
    //         ],
    //         image: "chocolate_cake.jpg",
    //       },
    //     ],
    // }
  ];
  
  export default menuData;
  