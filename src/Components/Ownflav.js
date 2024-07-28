import React from 'react'

const Ownflav = () => {
  return (
    <div className="flavors">
          <section className="flavor-section create-your-own">
        <h2>Create Your Own Flavor</h2>
        <p>Unleash your creativity by designing your own custom gelato flavor. Choose your base and mix-ins to craft a unique treat:</p>
        <form className="create-your-own-form">
          <label>
            Base Flavor:
            <select>
              <option value="vanilla">Vanilla</option>
              <option value="chocolate">Chocolate</option>
              <option value="strawberry">Strawberry</option>
              <option value="pistachio">Pistachio</option>
            </select>
          </label>
          <label>
            Mix-Ins:
            <select multiple>
              <option value="nuts">Nuts</option>
              <option value="caramel">Caramel</option>
              <option value="fruit">Fruit</option>
              <option value="chocolate-chips">Chocolate Chips</option>
            </select>
          </label>
          <button type="submit">Create My Flavor</button>
        </form>
      </section>
    </div>
  )
}

export default Ownflav