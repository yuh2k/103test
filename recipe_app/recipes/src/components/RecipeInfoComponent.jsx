//this would be our very rudimentary data base. 
//IMPORTANT: change the image path to the correct path for the images in the project
import cookieImg from '../images/cookie.png';
import friedeggImg from '../images/friedegg.png';
import burgerImg from '../images/burger.png';
import kajmakImg from '../images/kajmak.png';
import phoImg from '../images/pho.png';
import empanadasImg from '../images/empanadas.png';
import friedriceImg from '../images/friedrice.png';


const recipeMap = new Map([
    ["burger", {
        title: "Burger",
        description: "Ingredients:\n" +
                     "- 1 lb ground beef\n" +
                     "- Salt and pepper to taste\n" +
                     "- 4 burger buns\n" +
                     "- Lettuce, tomato, cheese, and condiments of choice\n\n" +
                     "Instructions:\n" +
                     "1. Shape beef into 4 patties, season with salt and pepper.\n" +
                     "2. Grill or pan-fry patties to desired doneness.\n" +
                     "3. Serve on buns with lettuce, tomato, cheese, and condiments.\n",
        instructions: "1. Shape beef into 4 patties, season with salt and pepper.\n" +
                        "2. Grill or pan-fry patties to desired doneness.\n" +
                        "3. Serve on buns with lettuce, tomato, cheese, and condiments.",
        image: burgerImg
    }],
    ["cookie", {
        title: "Cookie",
        description: "Ingredients:\n" +
                     "- 1/2 cup butter, softened\n" +
                     "- 3/4 cup sugar\n" +
                     "- 1 egg\n" +
                     "- 1 tsp vanilla extract\n" +
                     "- 1 1/2 cups flour\n" +
                     "- 1/2 tsp baking soda\n" +
                     "- 1/4 tsp salt\n" +
                     "- 1/2 cup chocolate chips (optional)\n\n" +
                     "Instructions:\n" +
                     "1. Cream butter and sugar, add egg and vanilla.\n" +
                     "2. Mix in flour, baking soda, and salt.\n" +
                     "3. Stir in chocolate chips.\n" +
                     "4. Drop by spoonfuls onto a baking sheet, bake at 350°F for 10-12 minutes.\n",
        instructions: "1. Cream butter and sugar, add egg and vanilla.\n" + 
                        "2. Mix in flour, baking soda, and salt.\n" +   
                        "3. Stir in chocolate chips.\n" +
                        "4. Drop by spoonfuls onto a baking sheet, bake at 350°F for 10-12 minutes.",
        image: cookieImg
    }],
    ["empanadas", {
        title: "Empanadas",
        description: "Ingredients:\n" +
                     "- 1 lb ground beef or chicken\n" +
                     "- 1 diced onion\n" +
                     "- 1 tsp cumin\n" +
                     "- Salt and pepper to taste\n" +
                     "- Pre-made empanada dough (or puff pastry sheets)\n\n" +
                     "Instructions:\n" +
                     "1. Cook the meat and onion in a pan until browned. Add cumin, salt, and pepper.\n" +
                     "2. Cut dough into circles, fill with the meat mixture, fold, and seal the edges.\n" +
                     "3. Fry in hot oil until golden or bake at 375°F for 20-25 minutes.\n",
        instructions: "1. Cook the meat and onion in a pan until browned. Add cumin, salt, and pepper.\n" + 
                        "2. Cut dough into circles, fill with the meat mixture, fold, and seal the edges.\n" +
                        "3. Fry in hot oil until golden or bake at 375°F for 20-25 minutes.",
        image: empanadasImg
    }],
    ["friedegg", {
        title: "Fried Egg",
        description: "Ingredients:\n" +
                     "- Eggs\n" +
                     "- Salt and pepper to taste\n" +
                     "- Butter or oil for frying\n\n" +
                     "Instructions:\n" +
                     "1. Heat butter or oil in a pan.\n" +
                     "2. Crack eggs into the pan, season with salt and pepper.\n" +
                     "3. Cook to desired doneness, serve immediately.\n",
        instructions: "1. Heat butter or oil in a pan.\n" +  
                        "2. Crack eggs into the pan, season with salt and pepper.\n" +
                        "3. Cook to desired doneness, serve immediately.",
        image: friedeggImg
    }],
    ["friedrice", {
        title: "Fried Rice",
        description: "Ingredients:\n" +
                     "- 2 cups cooked rice (preferably cold)\n" +
                     "- 2 tbsp vegetable oil\n" +
                     "- 1 diced onion\n" +
                     "- 1 cup mixed vegetables (peas, carrots, corn)\n" +
                     "- 2 beaten eggs\n" +
                     "- Soy sauce to taste\n\n" +
                     "Instructions:\n" +
                     "1. Heat oil in a pan, sauté onions until translucent.\n" +
                     "2. Add mixed vegetables, cook for a few minutes.\n" +
                     "3. Push vegetables to the side, add eggs, and scramble.\n" +
                     "4. Mix in rice, add soy sauce, and stir-fry for 3-5 minutes.\n",
        instructions: "1. Heat oil in a pan, sauté onions until translucent.\n" +
                        "2. Add mixed vegetables, cook for a few minutes.\n" +
                        "3. Push vegetables to the side, add eggs, and scramble.\n" +
                        "4. Mix in rice, add soy sauce, and stir-fry for 3-5 minutes.",
        image: friedriceImg
    }],
    ["kajmak", {
        title: "Kajmak",
        description: "Ingredients:\n" +
                     "- 2 liters of fresh, unpasteurized milk\n" +
                     "- 1/2 cup of cream\n\n" +
                     "Instructions:\n" +
                     "1. Gently heat the milk until it is lukewarm.\n" +
                     "2. Slowly add the cream and stir continuously.\n" +
                     "3. Keep the mixture at a low temperature and let it simmer for 2-3 hours, stirring occasionally.\n" +
                     "4. Once the mixture thickens, remove from heat and let it cool.\n" +
                     "5. Once cooled, collect the creamy layer on top - that is your Kajmak.\n" +
                     "6. Store in the refrigerator and consume within a few days.\n",
        instructions: "1. Gently heat the milk until it is lukewarm.\n" +       
                            "2. Slowly add the cream and stir continuously.\n" +    
                            "3. Keep the mixture at a low temperature and let it simmer for 2-3 hours, stirring occasionally.\n" +
                            "4. Once the mixture thickens, remove from heat and let it cool.\n" +
                            "5. Once cooled, collect the creamy layer on top - that is your Kajmak.\n" +
                            "6. Store in the refrigerator and consume within a few days.",
        image: kajmakImg
    }],
    ["pho", {
        title: "Pho",
        description: "Ingredients:\n" +
                     "- 4 cups beef or chicken broth\n" +
                     "- 1 sliced onion\n" +
                     "- 1 tsp ginger\n" +
                     "- Star anise, cinnamon, cloves\n" +
                     "- Rice noodles\n" +
                     "- Thinly sliced beef or chicken\n" +
                     "- Bean sprouts, basil, lime, and hoisin sauce for garnish\n\n" +
                     "Instructions:\n" +
                     "1. Simmer broth with onion, ginger, star anise, cinnamon, and cloves for 15-20 minutes.\n" +
                     "2. Cook rice noodles as per package instructions.\n" +
                     "3. Place noodles in bowls, top with raw beef or chicken slices.\n" +
                     "4. Pour hot broth over the top to cook the meat.\n" +
                     "5. Serve with bean sprouts, basil, lime, and hoisin sauce.\n",
        instructions: "1. Simmer broth with onion, ginger, star anise, cinnamon, and cloves for 15-20 minutes.\n" +
                        "2. Cook rice noodles as per package instructions.\n" +
                        "3. Place noodles in bowls, top with raw beef or chicken slices.\n" +
                        "4. Pour hot broth over the top to cook the meat.\n" +
                        "5. Serve with bean sprouts, basil, lime, and hoisin sauce.",
        image: phoImg
    }],
]);


const getRecipeById = (recipeID) => {
    return recipeMap.get(recipeID);
}

export { getRecipeById }