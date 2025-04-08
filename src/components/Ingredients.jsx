export default function Ingredients() {
  return (
    <section className='ingredients'>
      <h2 className='card__heading'>Ingredients</h2>

      <ul className='ingredients__list'>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient'>2-3 large eggs</span>
        </li>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient'>Salt, to taste</span>
        </li>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient'>Pepper, to taste</span>
        </li>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient'>
            1 tablespoon of butter or oil
          </span>
        </li>
        <li className='ingredients__list-item'>
          <div className='ingredients__list-marker'></div>
          <span className='ingredients__ingredient'>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </span>
        </li>
      </ul>
    </section>
  );
}
