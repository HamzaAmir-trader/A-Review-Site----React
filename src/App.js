import React from 'react';
import Review from './Review';

// ICONS

function App() {
  return (
    <React.Fragment>
      <main>
        <section className="container">
          <div className="title">
            <h2>Review Section</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </React.Fragment>
  )
}

export default App;