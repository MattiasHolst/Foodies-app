export default function MealDetailPage({params} : {params : {mealId:string}}) {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Welcome to the {params.mealId} page!
        </h1>
      </main>
    );
  }
  