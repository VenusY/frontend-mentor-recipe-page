import '../styles/scss/Introduction.scss';

export default function Introduction() {
  return (
    <section className='introduction'>
      <h1 className='introduction__heading'>Simple Omelette Recipe</h1>
      <p className='introduction__description paragraph'>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <section className='time'>
        <h2 className='time__heading'>Preparation time</h2>

        <ul className='time__list'>
          <li className='time__list-item'>
            <div className='time__list-marker'></div>
            <div className='time__item-container paragraph'>
              <span className='time__category'>Total</span>:{' '}
              <span className='time__minutes'>Approximately 10 minutes</span>
            </div>
          </li>

          <li className='time__list-item'>
            <div className='time__list-marker'></div>
            <div className='time__item-container paragraph'>
              <span className='time__category'>Preparation</span>:{' '}
              <span className='time__minutes'>5 minutes</span>
            </div>
          </li>

          <li className='time__list-item'>
            <div className='time__list-marker'></div>
            <div className='time__item-container paragraph'>
              <span className='time__category'>Cooking</span>:{' '}
              <span className='time__minutes'>5 minutes</span>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
}
