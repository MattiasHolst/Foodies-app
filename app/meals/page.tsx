import Link from "next/link";

export default function MealsPage() {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Welcome to the Meals Page!
          <p><Link href="/meals/share">Share</Link></p>
        </h1>
      </main>
    );
  }
  