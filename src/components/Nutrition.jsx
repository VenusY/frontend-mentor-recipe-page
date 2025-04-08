export default function Nutrition() {
  return (
    <section className='nutrition'>
      <h2 className='card__heading'>Nutrition</h2>
      <p className='nutrition__description'>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <table className='nutrition-table'>
        <tbody className='nutrition-table__body'>
          <tr className='nutrition-table__row'>
            <th className='nutrition-table__category'>Calories</th>
            <td className='nutrition-table__value'>277kcal</td>
          </tr>
          <tr className='nutrition-table__row'>
            <th className='nutrition-table__category'>Carbs</th>
            <td className='nutrition-table__value'>0g</td>
          </tr>
          <tr className='nutrition-table__row'>
            <th className='nutrition-table__category'>Protein</th>
            <td className='nutrition-table__value'>20g</td>
          </tr>
          <tr className='nutrition-table__row'>
            <th className='nutrition-table__category'>Fat</th>
            <td className='nutrition-table__value'>22g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
