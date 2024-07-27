import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
export type MealItem = {
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
    id: string;
  };
  
export default function MealsGrid({ meals }: { meals: MealItem[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
            <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
