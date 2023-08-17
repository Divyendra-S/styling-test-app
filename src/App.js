import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment >
      <div class = " bg-gradient-to-br from-cyan-300">
      <Header />
      <main>
        <Meals/>
      </main>
      </div>
    </Fragment>
  );
}

export default App;
