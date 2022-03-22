import { useEffect } from 'react';
import { useState } from 'react';

function ApiCall(){
  const [mealName, setMealName] = useState(null);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      let meal = [];
      for (let i = 0; i < data.meals.length; i++){
        meal = meal + data.meals[i].strMeal + ", "; //TODO remove comma at end 
      }
      setMealName(meal);
      
    });
  }, []);

  return(
    
    <div>
      Name of meal that includes chicken breast: {mealName}
    </div>
  )
}
export default ApiCall