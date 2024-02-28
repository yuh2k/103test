import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import cookieImg from '../images/cookie.png';
import friedeggImg from '../images/friedegg.png';
import burgerImg from '../images/burger.png';
import kajmakImg from '../images/kajmak.png';
import phoImg from '../images/pho.png';
import empanadasImg from '../images/empanadas.png';
import friedriceImg from '../images/friedrice.png';

function Recipe() {

  return (
    <div className=''>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
      <Accordion.Header>
        Empanadas
        <img src={empanadasImg} alt="Empanadas" style={{ width: '100px', height: 'auto', marginRight: '5px' }} />
      </Accordion.Header>
        <Accordion.Body>
          Ingredients:<br />
          - 1 lb ground beef or chicken<br />
          - 1 diced onion<br />
          - 1 tsp cumin<br />
          - Salt and pepper to taste<br />
          - Pre-made empanada dough (or puff pastry sheets)<br />
          <br />
          Instructions:<br />
          1. Cook the meat and onion in a pan until browned. Add cumin, salt, and pepper.<br />
          2. Cut dough into circles, fill with the meat mixture, fold, and seal the edges.<br />
          3. Fry in hot oil until golden or bake at 375°F for 20-25 minutes.<br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>
        Fried Rice
        <img src={friedriceImg} alt="Fried Rice" style={{ width: '75px', height: 'auto', marginRight: '5px' }} />
      </Accordion.Header>
        <Accordion.Body>
          Ingredients:<br />
          - 2 cups cooked rice (preferably cold)<br />
          - 2 tbsp vegetable oil<br />
          - 1 diced onion<br />
          - 1 cup mixed vegetables (peas, carrots, corn)<br />
          - 2 beaten eggs<br />
          - Soy sauce to taste<br />
          <br />
          Instructions:<br />
          1. Heat oil in a pan, sauté onions until translucent.<br />
          2. Add mixed vegetables, cook for a few minutes.<br />
          3. Push vegetables to the side, add eggs, and scramble.<br />
          4. Mix in rice, add soy sauce, and stir-fry for 3-5 minutes.<br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>
        Pho
        <img src={phoImg} alt="Pho" style={{ width: '75px', height: 'auto', marginRight: '5px' }} />
      </Accordion.Header>
        <Accordion.Body>
          Ingredients:<br />
          - 4 cups beef or chicken broth<br />
          - 1 sliced onion<br />
          - 1 tsp ginger<br />
          - Star anise, cinnamon, cloves<br />
          - Rice noodles<br />
          - Thinly sliced beef or chicken<br />
          - Bean sprouts, basil, lime, and hoisin sauce for garnish<br />
          <br />
          Instructions:<br />
          1. Simmer broth with onion, ginger, star anise, cinnamon, and cloves for 15-20 minutes.<br />
          2. Cook rice noodles as per package instructions.<br />
          3. Place noodles in bowls, top with raw beef or chicken slices.<br />
          4. Pour hot broth over the top to cook the meat.<br />
          5. Serve with bean sprouts, basil, lime, and hoisin sauce.<br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Kajmak
          <img src={kajmakImg} alt="Kajmak" style={{ width: '75px', height: 'auto', marginRight: '5px' }} />
        </Accordion.Header>
        <Accordion.Body> 
          Ingredients:<br />
          - 2 liters of fresh, unpasteurized milk<br />
          - 1/2 cup of cream<br />
          <br />
          Instructions:<br />
          1. Gently heat the milk until it is lukewarm.<br />
          2. Slowly add the cream and stir continuously.<br />
          3. Keep the mixture at a low temperature and let it simmer for 2-3 hours, stirring occasionally.<br />
          4. Once the mixture thickens, remove from heat and let it cool.<br />
          5. Once cooled, collect the creamy layer on top - that is your Kajmak.<br />
          6. Store in the refrigerator and consume within a few days.<br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Burger
          <img src={burgerImg} alt="Burger" style={{ width: '75px', height: 'auto',  marginRight: '5px' }} />
        </Accordion.Header>
        <Accordion.Body>
          Ingredients:<br />
          - 1 lb ground beef<br />
          - Salt and pepper to taste<br />
          - 4 burger buns<br />
          - Lettuce, tomato, cheese, and condiments of choice<br />
          <br />
          Instructions:<br />
          1. Shape beef into 4 patties, season with salt and pepper.<br />
          2. Grill or pan-fry patties to desired doneness.<br />
          3. Serve on buns with lettuce, tomato, cheese, and condiments.<br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Fried Egg
          <img src={friedeggImg} alt="Fried Egg" style={{ width: '75px', height: 'auto', marginRight: '5px' }} />
        </Accordion.Header>
        <Accordion.Body>
          Ingredients:<br />
          - Eggs<br />
          - Salt and pepper to taste<br />
          - Butter or oil for frying<br />
          <br />
          Instructions:<br />
          1. Heat butter or oil in a pan.<br />
          2. Crack eggs into the pan, season with salt and pepper.<br />
          3. Cook to desired doneness, serve immediately.<br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          Cookies
          <img src={cookieImg} alt="Cookies" style={{ width: '75px', height: 'auto', marginRight: '5px' }} />
        </Accordion.Header>
        <Accordion.Body>
          Ingredients:<br />
          - 1/2 cup butter, softened<br />
          - 3/4 cup sugar<br />
          - 1 egg<br />
          - 1 tsp vanilla extract<br />
          - 1 1/2 cups flour<br />
          - 1/2 tsp baking soda<br />
          - 1/4 tsp salt<br />
          - 1/2 cup chocolate chips (optional)<br />
          <br />
          Instructions:<br />
          1. Cream butter and sugar, add egg and vanilla.<br />
          2. Mix in flour, baking soda, and salt.<br />
          3. Stir in chocolate chips.<br />
          4. Drop by spoonfuls onto a baking sheet, bake at 350°F for 10-12 minutes.<br />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
    </div>
  )
}

export default function Recipes() {
    return (
      <section>
        <Recipe />
      </section>
    );
  }