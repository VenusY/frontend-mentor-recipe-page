import '../styles/scss/Nutrition.scss';

export default function Nutrition() {
  return (
    <section className='nutrition card__section'>
      <h2 className='card__heading heading'>Nutrition</h2>
      <p className='nutrition__description paragraph'>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <table className='nutrition-table'>
        <tbody className='nutrition-table__body'>
          <tr className='nutrition-table__row'>
            <th className='nutrition-table__category paragraph' scope='row'>
              Calories
            </th>
            <td className='nutrition-table__value'>277kcal</td>
          </tr>
          <tr className='nutrition-table__row'>
            <th className='nutrition-table__category paragraph' scope='row'>
              Carbs
            </th>
            <td className='nutrition-table__value'>0g</td>
          </tr>
          <tr className='nutrition-table__row'>
            <th className='nutrition-table__category paragraph' scope='row'>
              Protein
            </th>
            <td className='nutrition-table__value'>20g</td>
          </tr>
          <tr className='nutrition-table__row'>
            <th className='nutrition-table__category paragraph' scope='row'>
              Fat
            </th>
            <td className='nutrition-table__value'>22g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
