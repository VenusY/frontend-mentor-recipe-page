import '../styles/scss/Instructions.scss';

export default function Instructions() {
  return (
    <section className='instructions card__section'>
      <h2 className='card__heading heading'>Instructions</h2>

      <ol className='instructions__list'>
        <li className='instructions__list-item paragraph'>
          <div className='instructions__text'>
            <span className='instructions__instruction'>Beat the eggs</span>:{' '}
            <span className='instructions__details'>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </span>
          </div>
        </li>

        <li className='instructions__list-item paragraph'>
          <div className='instructions__text'>
            <span className='instructions__instruction'>Heat the pan</span>:{' '}
            <span className='instructions__details'>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </span>
          </div>
        </li>

        <li className='instructions__list-item paragraph'>
          <div className='instructions__text'>
            <span className='instructions__instruction'>Cook the omelette</span>
            :{' '}
            <span className='instructions__details'>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </span>
          </div>
        </li>

        <li className='instructions__list-item paragraph'>
          <div className='instructions__text'>
            <span className='instructions__instruction'>
              Add fillings &#40;optional&#41;
            </span>
            :{' '}
            <span className='instructions__details'>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </span>
          </div>
        </li>

        <li className='instructions__list-item paragraph'>
          <div className='instructions__text'>
            <span className='instructions__instruction'>Fold and serve</span>:{' '}
            <span className='instructions__details'>
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </span>
          </div>
        </li>

        <li className='instructions__list-item paragraph'>
          <div className='instructions__text'>
            <span className='instructions__instruction'>Enjoy</span>:{' '}
            <span className='instructions__details'>
              Serve hot, with additional salt and pepper if needed.
            </span>
          </div>
        </li>
      </ol>
    </section>
  );
}
