import React from 'react';

const recipes = [
  {
    id: 1,
    title: 'Spicy Tomato Pasta',
    author: 'Ava',
    description:
      'A quick pasta with a rich homemade tomato sauce and fresh basil.',
  },
  {
    id: 2,
    title: 'Berry Breakfast Smoothie',
    author: 'Noah',
    description:
      'A healthy smoothie with mixed berries, banana, and almond milk.',
  },
  {
    id: 3,
    title: 'Lemon Garlic Chicken',
    author: 'Mia',
    description: 'A simple roasted chicken with lemon, garlic, and herbs.',
  },
];

function App() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f7f2ef',
        color: '#333',
      }}
    >
      <header
        style={{
          backgroundColor: '#ff7f50',
          padding: '24px 16px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h1 style={{ margin: 0 }}>Recipe Sharing Network</h1>
        <p
          style={{
            margin: '8px 0 0',
            maxWidth: 640,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Discover and share simple recipes from a community of food lovers.
        </p>
      </header>

      <main style={{ padding: '24px 16px', maxWidth: 960, margin: '0 auto' }}>
        <section style={{ marginBottom: 32 }}>
          <h2>Featured Recipes</h2>
          <div
            style={{
              display: 'grid',
              gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  padding: 18,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                <h3 style={{ marginTop: 0 }}>{recipe.title}</h3>
                <p style={{ margin: '8px 0', color: '#555' }}>
                  {recipe.description}
                </p>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#777' }}>
                  Shared by <strong>{recipe.author}</strong>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>How it works</h2>
          <ul style={{ lineHeight: 1.75, paddingLeft: 20 }}>
            <li>Browse community-created recipes.</li>
            <li>Share your own favorite dishes.</li>
            <li>Save and revisit recipes anytime.</li>
          </ul>
        </section>
      </main>

      <footer
        style={{
          backgroundColor: '#fff3eb',
          padding: '16px',
          textAlign: 'center',
          fontSize: '0.95rem',
          color: '#666',
        }}
      >
        <p style={{ margin: 0 }}>
          A simple starting page for a recipe sharing network.
        </p>
      </footer>
    </div>
  );
}

export default App;
