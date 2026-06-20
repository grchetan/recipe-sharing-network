import React from 'react';

const featuredRecipes = [
  {
    id: 1,
    title: 'Spicy Tomato Pasta',
    author: 'Ava',
    description:
      'Rich homemade tomato sauce, fresh basil, and simple ingredients.',
  },
  {
    id: 2,
    title: 'Berry Breakfast Smoothie',
    author: 'Noah',
    description:
      'A creamy mix of berries, banana, and almond milk for a bright start.',
  },
  {
    id: 3,
    title: 'Lemon Garlic Chicken',
    author: 'Mia',
    description: 'Tender roasted chicken with zesty lemon and savory garlic.',
  },
];

function App() {
  return (
    <div
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#fdf7f0',
        color: '#2e2b26',
      }}
    >
      <header
        style={{
          padding: '24px 28px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid rgba(46,43,38,0.12)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div>
            <p style={{ margin: 0, color: '#ff7f50', fontWeight: 700 }}>
              RecipeShare
            </p>
          </div>
          <nav style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a
              href="#features"
              style={{ color: '#6f655b', textDecoration: 'none' }}
            >
              Features
            </a>
            <a
              href="#recipes"
              style={{ color: '#6f655b', textDecoration: 'none' }}
            >
              Recipes
            </a>
            <a
              href="#contact"
              style={{ color: '#6f655b', textDecoration: 'none' }}
            >
              Contact
            </a>
            <a
              href="#get-started"
              style={{
                padding: '10px 18px',
                borderRadius: 999,
                backgroundColor: '#ff7f50',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main
        style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 80px' }}
      >
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: '#ff7f50',
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}
            >
              Share your best recipes
            </p>
            <h1
              style={{
                fontSize: '3rem',
                lineHeight: 1.05,
                margin: '20px 0 24px',
              }}
            >
              Cook. Share. Discover recipes made by real food lovers.
            </h1>
            <p
              style={{
                maxWidth: 620,
                lineHeight: 1.75,
                color: '#5b5348',
                fontSize: '1.05rem',
              }}
            >
              RecipeShare helps you find easy meals, save favorites, and connect
              with a friendly kitchen community. Start browsing recipes or post
              your own signature dish today.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
                marginTop: 32,
              }}
            >
              <a
                href="#recipes"
                style={{
                  padding: '14px 28px',
                  borderRadius: 999,
                  backgroundColor: '#ff7f50',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                Explore Recipes
              </a>
              <a
                href="#features"
                style={{
                  padding: '14px 28px',
                  borderRadius: 999,
                  backgroundColor: '#fff8f2',
                  color: '#5b5348',
                  textDecoration: 'none',
                  border: '1px solid rgba(46,43,38,0.12)',
                  fontWeight: 700,
                }}
              >
                How it works
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 24,
                marginTop: 44,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <p
                  style={{
                    margin: '0 0 8px',
                    fontSize: '0.9rem',
                    color: '#6f655b',
                  }}
                >
                  Community recipes
                </p>
                <strong style={{ fontSize: '1.5rem' }}>1.2K+</strong>
              </div>
              <div>
                <p
                  style={{
                    margin: '0 0 8px',
                    fontSize: '0.9rem',
                    color: '#6f655b',
                  }}
                >
                  Weekly contributions
                </p>
                <strong style={{ fontSize: '1.5rem' }}>320+</strong>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              borderRadius: 28,
              padding: 24,
              boxShadow: '0 28px 80px rgba(88,71,58,0.12)',
            }}
          >
            <div style={{ display: 'grid', gap: 18 }}>
              <div
                style={{
                  padding: 20,
                  borderRadius: 20,
                  backgroundColor: '#fff4ec',
                }}
              >
                <p style={{ margin: 0, color: '#ff7f50', fontWeight: 700 }}>
                  Trending
                </p>
                <h2 style={{ margin: '16px 0 8px', fontSize: '1.5rem' }}>
                  Spicy Tomato Pasta
                </h2>
                <p style={{ margin: 0, color: '#6f655b' }}>
                  Fresh ingredients, cozy dinner inspiration, and an easy
                  step-by-step guide.
                </p>
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      backgroundColor: '#ffe7d8',
                    }}
                  />
                  <div>
                    <p style={{ margin: 0, fontWeight: 700 }}>
                      Save your favorite recipes
                    </p>
                    <p
                      style={{
                        margin: '6px 0 0',
                        color: '#6f655b',
                        fontSize: '0.95rem',
                      }}
                    >
                      Keep a personal collection of tried-and-true meals.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      backgroundColor: '#fdf2e7',
                    }}
                  />
                  <div>
                    <p style={{ margin: 0, fontWeight: 700 }}>
                      Share your story
                    </p>
                    <p
                      style={{
                        margin: '6px 0 0',
                        color: '#6f655b',
                        fontSize: '0.95rem',
                      }}
                    >
                      Post recipes with notes, tips, and food memories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" style={{ marginTop: 72 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p
              style={{
                margin: 0,
                color: '#ff7f50',
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}
            >
              Built for home cooks
            </p>
            <h2 style={{ margin: '16px 0 0', fontSize: '2rem' }}>
              Everything you need to explore and share recipes.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gap: 20,
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            }}
          >
            {[
              {
                title: 'Search by style',
                text: 'Find meals by category, ingredient, or dietary preference with ease.',
              },
              {
                title: 'Save favorites',
                text: 'Bookmark recipes to return to them anytime you want.',
              },
              {
                title: 'Share your tips',
                text: 'Add notes and variations so others can cook with confidence.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: 26,
                  borderRadius: 18,
                  backgroundColor: 'white',
                  boxShadow: '0 16px 40px rgba(74, 65, 54, 0.08)',
                }}
              >
                <h3 style={{ margin: '0 0 12px', fontSize: '1.2rem' }}>
                  {feature.title}
                </h3>
                <p style={{ margin: 0, lineHeight: 1.8, color: '#5b5348' }}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="recipes" style={{ marginTop: 72 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  color: '#ff7f50',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                Featured recipes
              </p>
              <h2 style={{ margin: '12px 0 0', fontSize: '2rem' }}>
                Community favorites
              </h2>
            </div>
            <a
              href="#get-started"
              style={{
                color: '#ff7f50',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Start sharing
            </a>
          </div>
          <div
            style={{
              marginTop: 28,
              display: 'grid',
              gap: 20,
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {featuredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  padding: 24,
                  borderRadius: 24,
                  backgroundColor: 'white',
                  border: '1px solid rgba(46,43,38,0.08)',
                }}
              >
                <h3 style={{ margin: '0 0 12px' }}>{recipe.title}</h3>
                <p
                  style={{
                    margin: '0 0 16px',
                    color: '#5b5348',
                    lineHeight: 1.75,
                  }}
                >
                  {recipe.description}
                </p>
                <p style={{ margin: 0, color: '#7a7164', fontSize: '0.95rem' }}>
                  Shared by <strong>{recipe.author}</strong>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="get-started"
          style={{
            marginTop: 72,
            padding: '40px 32px',
            borderRadius: 24,
            backgroundColor: '#fff2e7',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              maxWidth: 760,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2 style={{ margin: 0, fontSize: '2rem' }}>
              Ready to join the kitchen community?
            </h2>
            <p style={{ margin: 0, color: '#5b5348', lineHeight: 1.8 }}>
              Share your favorite recipe, discover new dishes, and keep track of
              recipes you want to try.
            </p>
            <a
              href="#"
              style={{
                display: 'inline-block',
                marginTop: 10,
                padding: '14px 30px',
                borderRadius: 999,
                backgroundColor: '#2a1e1a',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Create an account
            </a>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        style={{
          padding: '28px 24px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgba(46,43,38,0.12)',
          textAlign: 'center',
          color: '#6f655b',
        }}
      >
        <p style={{ margin: '0 0 8px' }}>RecipeShare © 2026</p>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>
          A welcoming landing page for your recipe-sharing network.
        </p>
      </footer>
    </div>
  );
}

export default App;
