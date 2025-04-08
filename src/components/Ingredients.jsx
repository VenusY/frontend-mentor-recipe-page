import '../styles/scss/Ingredients.scss';

export default function Ingredients() {
  return (
    <section className='ingredients card__section'>
      <h2 className='card__heading heading'>Ingredients</h2>

      <ul className='ingredients__list'>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient paragraph'>
            2-3 large eggs
          </span>
        </li>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient paragraph'>
            Salt, to taste
          </span>
        </li>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient paragraph'>
            Pepper, to taste
          </span>
        </li>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient paragraph'>
            1 tablespoon of butter or oil
          </span>
        </li>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient paragraph'>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </span>
        </li>
      </ul>
    </section>
  );
}
