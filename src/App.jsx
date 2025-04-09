import './styles/reset.css';
import './styles/scss/App.scss';
import Introduction from './components/Introduction';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrition from './components/Nutrition';

export default function App() {
  return (
    <div className='card'>
      <img
        src={require('./assets/images/image-omelette.jpeg')}
        alt='Omelette'
        className='card__image'
      />

      <main className='card__body'>
        <Introduction />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </main>
    </div>
  );
}
