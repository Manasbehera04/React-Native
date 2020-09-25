import Category from "../models/Category";
import Recipe from "../models/Recipe";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Quick & Easy", "#f54242"),
  new Category("c3", "Hamburgers", "#f5a442"),
  new Category("c4", "German", "#f5d142"),
  new Category("c5", "Light & Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
  new Category("c7", "Breakfast", "#9eecff"),
  new Category("c8", "Indian", "#b9ffb0"),
  new Category("c9", "French", "#ffc7ff"),
  new Category("c10", "Summer", "#47fced"),
];

export const RECIPES = [
  new Recipe(
    "m1",
    ["c1", "c2"],
    "Spaghetti with Tomato Sauce",
    "affordable",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    20,
    [
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false,
    true,
    true,
    true
  ),

  new Recipe(
    "m2",
    ["c2"],
    "Toast Hawaii",
    "affordable",
    "simple",
    "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
    10,
    [
      "1 Slice White Bread",
      "1 Slice Ham",
      "1 Slice Pineapple",
      "1-2 Slices of Cheese",
      "Butter",
    ],
    [
      "Butter one side of the white bread",
      "Layer ham, the pineapple and cheese on the white bread",
      "Bake the toast for round about 10 minutes in the oven at 200°C",
    ],
    false,
    false,
    false,
    false
  ),

  new Recipe(
    "m3",
    ["c3"],
    "Classic Hamburger",
    "pricey",
    "simple",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    45,
    [
      "300g Cattle Hack",
      "1 Tomato",
      "1 Cucumber",
      "1 Onion",
      "Ketchup",
      "2 Burger Buns",
    ],
    [
      "Form 2 patties",
      "Fry the patties for c. 4 minutes on each side",
      "Quickly fry the buns for c. 1 minute on each side",
      "Bruch buns with ketchup",
      "Serve burger with tomato, cucumber and onion",
    ],
    false,
    false,
    false,
    true
  ),

  new Recipe(
    "m4",
    ["c4"],
    "Wiener Schnitzel",
    "luxurious",
    "challenging",
    "https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg",
    60,
    [
      "8 Veal Cutlets",
      "4 Eggs",
      "200g Bread Crumbs",
      "100g Flour",
      "300ml Butter",
      "100g Vegetable Oil",
      "Salt",
      "Lemon Slices",
    ],
    [
      "Tenderize the veal to about 2–4mm, and salt on both sides.",
      "On a flat plate, stir the eggs briefly with a fork.",
      "Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.",
      "Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.",
      "Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.",
      "Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.",
      "Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.",
    ],
    false,
    false,
    false,
    false
  ),

  new Recipe(
    "m5",
    ["c2", "c5", "c10"],
    "Salad with Smoked Salmon",
    "luxurious",
    "simple",
    "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg",
    15,
    [
      "Arugula",
      "Lamb's Lettuce",
      "Parsley",
      "Fennel",
      "200g Smoked Salmon",
      "Mustard",
      "Balsamic Vinegar",
      "Olive Oil",
      "Salt and Pepper",
    ],
    [
      "Wash and cut salad and herbs",
      "Dice the salmon",
      "Process mustard, vinegar and olive oil into a dessing",
      "Prepare the salad",
      "Add salmon cubes and dressing",
    ],
    true,
    false,
    true,
    true
  ),

  new Recipe(
    "m6",
    ["c6", "c10"],
    "Delicious Orange Mousse",
    "affordable",
    "hard",
    "https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg",
    240,
    [
      "4 Sheets of Gelatine",
      "150ml Orange Juice",
      "80g Sugar",
      "300g Yoghurt",
      "200g Cream",
      "Orange Peel",
    ],
    [
      "Dissolve gelatine in pot",
      "Add orange juice and sugar",
      "Take pot off the stove",
      "Add 2 tablespoons of yoghurt",
      "Stir gelatin under remaining yoghurt",
      "Cool everything down in the refrigerator",
      "Whip the cream and lift it under die orange mass",
      "Cool down again for at least 4 hours",
      "Serve with orange peel",
    ],
    true,
    false,
    true,
    false
  ),

  new Recipe(
    "m7",
    ["c7"],
    "Pancakes",
    "affordable",
    "simple",
    "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",
    20,
    [
      "1 1/2 Cups all-purpose Flour",
      "3 1/2 Teaspoons Baking Powder",
      "1 Teaspoon Salt",
      "1 Tablespoon White Sugar",
      "1 1/4 cups Milk",
      "1 Egg",
      "3 Tablespoons Butter, melted",
    ],
    [
      "In a large bowl, sift together the flour, baking powder, salt and sugar.",
      "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    ],
    true,
    false,
    true,
    false
  ),

  new Recipe(
    "m8",
    ["c8"],
    "Creamy Indian Chicken Curry",
    "pricey",
    "challenging",
    "https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg",
    35,
    [
      "4 Chicken Breasts",
      "1 Onion",
      "2 Cloves of Garlic",
      "1 Piece of Ginger",
      "4 Tablespoons Almonds",
      "1 Teaspoon Cayenne Pepper",
      "500ml Coconut Milk",
    ],
    [
      "Slice and fry the chicken breast",
      "Process onion, garlic and ginger into paste and sauté everything",
      "Add spices and stir fry",
      "Add chicken breast + 250ml of water and cook everything for 10 minutes",
      "Add coconut milk",
      "Serve with rice",
    ],
    true,
    false,
    false,
    true
  ),

  new Recipe(
    "m9",
    ["c9"],
    "Chocolate Souffle",
    "affordable",
    "hard",
    "https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg",
    45,
    [
      "1 Teaspoon melted Butter",
      "2 Tablespoons white Sugar",
      "2 Ounces 70% dark Chocolate, broken into pieces",
      "1 Tablespoon Butter",
      "1 Tablespoon all-purpose Flour",
      "4 1/3 tablespoons cold Milk",
      "1 Pinch Salt",
      "1 Pinch Cayenne Pepper",
      "1 Large Egg Yolk",
      "2 Large Egg Whites",
      "1 Pinch Cream of Tartar",
      "1 Tablespoon white Sugar",
    ],
    [
      "Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.",
      "Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.",
      "Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.",
      "Place chocolate pieces in a metal mixing bowl.",
      "Place bowl over a pan of about 3 cups hot water over low heat.",
      "Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.",
      "Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.",
      "Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.",
      "Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.",
      "Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.",
      "Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.",
      "whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.",
      "Transfer a little less than half of egg whites to chocolate.",
      "Mix until egg whites are thoroughly incorporated into the chocolate.",
      "Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.",
      "Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.",
      "Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.",
    ],
    true,
    false,
    true,
    false
  ),
  new Recipe(
    "m10",
    ["c2", "c5", "c10"],
    "Asparagus Salad with Cherry Tomatoes",
    "luxurious",
    "simple",
    "https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg",
    30,
    [
      "White and Green Asparagus",
      "30g Pine Nuts",
      "300g Cherry Tomatoes",
      "Salad",
      "Salt, Pepper and Olive Oil",
    ],
    [
      "Wash, peel and cut the asparagus",
      "Cook in salted water",
      "Salt and pepper the asparagus",
      "Roast the pine nuts",
      "Halve the tomatoes",
      "Mix with asparagus, salad and dressing",
      "Serve with Baguette",
    ],
    true,
    true,
    true,
    true
  ),
  new Recipe(
    "m11",
    ["c8"],
    "Chicken Biryani",
    "affordable",
    "simple",
    "https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444__340.jpg",
    60,
    [
      "1 cup boiled basmati rice",
      "1/2 teaspoon mint leaves",
      "salt as required",
      "2 tablespoon refined oil",
      "3 green cardamom",
      "2 clove",
      "2 onion",
      "1 teaspoon turmeric",
      "1 tablespoon garlic paste",
      "1 cup hung curd",
      "2 tablespoon coriander leaves",
      "water as required",
      "1 tablespoon ghee",
      "600 gm chicken",
      "1 tablespoon garam masala powder",
      "1 dash saffron",
      "1 tablespoon bay leaf",
      "1 black cardamom",
      "1 teaspoon cumin seeds",
      "4 green chillies",
      "1 tablespoon ginger paste",
      "1 teaspoon red chilli powder",
      "1/2 tablespoon ginger",
      "2 drops kewra",
      "1 tablespoon rose water",
    ],
    [
      "To make this delightful biryani, soak saffron in water to prepare saffron water. Next, mix kewra drops in water and mix well to make kewra water.",
      "In the meanwhile, heat refined oil in a deep bottomed pan. Once the oil is hot enough. Add cumin seeds, bay leaf, green cardamom, black cardamom, cloves in it, and saute for about a minute. Then, add chopped onion in it and saute until pink.",
      "Now, add chicken into it with slit green chillies, turmeric, salt to taste, ginger garlic paste, red chilli powder, and 2 green chilli paste. Mix well all the spices and cook for 2-3 minutes. Then, add hung curd into it.",
      "Turn the flame to medium again and add garam masala in it along with ginger julienned, coriander and mint leaves. Add kewra water, rose water and saffron water in it. Cook till the chicken is tender.",
      "Then add 1 cup cooked rice and spread evenly. Then add saffron water and pour ghee over it. Cook for 15-20 minutes with closed lid and garnish with 1 tbsp fried onions and coriander leaves. Serve hot",
      "The first and foremost important thing to take care of while preparing chicken biryani is, always use a heavy-bottomed pan as you would not want the chicken getting cooked.",
      "The restaurant-style chicken biryani uses the whole chicken in preparation and the chicken breast can dry when cooking at home. It's always suggested to use chicken thigh or drums...",
    ],
    false,
    true,
    true,
    true
  ),
  new Recipe(
    "m12",
    ["c8"],
    "Paneer Butter Masala",
    "affordable",
    "simple",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
    40,
    [
      "18 to 20 whole cashews",
      "⅓ cup hot water for soaking cashews",
      "2 cups diced tomatoes or 300 grams tomatoes or 4 to 5 medium size – pureed",
      "2 tablespoons butter or 1 tablespoon oil + 1 or 2 tablespoons butter",
      "1 tej patta (indian bay leaf)",
      "1 inch ginger and 3 to 4 garlic – crushed or ground in a mortar and pestle",
      "½ to 1 teaspoon kashmiri red chili powder or deghi mirch – if using any other chilli powder you can add ¼ to ½ teaspoon",
      "1.5 cups water or add as required",
      "1 inch ginger julienned, reserve a few for garnishing",
      "1 or 2 green chili – slit (reserve a few for garnishing)",
      "200 to 250 grams paneer (cottage cheese) – cubed or diced",
      "1 teaspoon kasuri methi (dry fenugreek leaves) – optional",
      "½ to 1 teaspoon garam masala or tandoori masala",
      "2 to 3 tablespoons low-fat cream or 1 to 2 tablespoons heavy whipping cream – optional",
      "¼ to 1 teaspoon sugar – optional, add as required depending on the sourness of the tomatoes",
      "salt as required – check notes below for adding sugar",
      "1 to 2 tablespoons chopped coriander leaves (cilantro leaves) for garnishing – optional",
      "a few ginger julienne",
      "1 tablespoon low fat cream 1 tablespoon heavy whipping cream – optional",
      "1 to 2 teaspoons butter – optional",
    ],
    [
      "Soak 18 to 20 cashews in a hot water for 20 to 30 minutes. When the cashews are soaking, you can prep the other ingredients like chopping tomatoes, preparing ginger-garlic paste, slicing paneer etc.",
      "Then drain and add the soaked cashews in a blender or grinder.",
      "Add 2 to 3 tablespoons water and grind to a smooth paste without any tiny bits or pieces of cashews.",
      "In the same blender add 2 cups of diced or roughly chopped tomatoes. No need to blanch the tomatoes before blending.",
      "Blend to a smooth tomato puree. Keep aside. Don’t add any water while blending the tomatoes.",
      "Melt butter in a pan on a low flame. Add bay leaf and fry for 2 to 3 seconds or till the oil become fragrant.",
      "Add ginger-garlic paste and saute for some seconds till the raw aroma disappears.",
      "Add the tomato puree and stir well. Cook for 5 to 6 minutes. Then add kashmiri red chili powder and stir again. Continue to saute till the oil starts to leave the sides of the tomato paste. The tomato paste will thicken considerably and will start coming together as one whole lump.",
      "Then add cashew paste and stir well. Saute the cashew paste for a few minutes till the oil begins to leave the sides of the masala paste.",
      "The cashew paste will begin to cook fast. Approx 3 to 4 minutes on a low flame. So keep stirring non-stop.",
      "Add water and mix very well. Simmer on a low flame. The curry will come to a boil.",
      "After 2 to 3 minutes of boiling, add ginger julienne. Reserve a few for garnishing. The curry will also begin to thicken.",
      "Add julienned ginger and green chillies, salt and sugar and simmer till the curry begins to thicken.",
      "After 3 to 4 minutes, add 1 or 2 slit green chillies. also add salt as per taste and ½ to 1 teaspoon sugar (optional).",
      "You can add sugar from ¼ tsp to 1 teaspoon or more depending on the sourness of the tomatoes. Sugar is optional and you can skip it too. If you add cream, then you will need to add less sugar. Mix very well and simmer for a minute.",
      "After the gravy thickens to your desired consistency, then add the paneer cubes and stir gently. i keep the gravy to a medium consistency. ",
      "After that add crushed kasuri methi (dry fenugreek leaves), garam masala and cream. Gently mix and then switch off the flame.",
      "Garnish it with coriander leaves and ginger julienne. You can even dot the gravy with some butter or drizzle some cream. ",
      "Serve paneer butter masala hot with plain naan, garlic naan, roti, paratha or steamed basmati or jeera rice or even peas pulao.",
      "Side accompaniments can be an onion-cucumber salad or some pickle. Also serve some lemon wedges by the side.",
    ],
    false,
    true,
    true,
    true
  ),
];
