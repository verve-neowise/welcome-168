import './app.css';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <ul className="nav">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Info</li>
          <li className="nav-link">Contact Us</li>
        </ul>
      </header>
      <main>
        <h1 className='welcome'>
          Welcome to Book store
        </h1>
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque quia beatae similique natus, animi a tempora eum! Velit vel nisi provident possimus, a illo quae atque ea fugit itaque.
        </p>
        <button className="learn-more">
          Learn More
        </button>
      </main>
    </div>
  );
}

export default App;
