export default function MealDetailPage({params} : {params : {slug:string}}) {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Welcome to the {params.slug} page!
        </h1>
      </main>
    );
  }
  