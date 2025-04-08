import './styles/reset.css';
import Introduction from './components/Introduction';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrition from './components/Nutrition';

export default function App() {
  return (
    <div className='card'>
      <Introduction />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  );
}
