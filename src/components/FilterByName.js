import React from 'react';
import '../stylesheets/layout/_filters.scss';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
    console.log(ev.target.value);
  };
  return (
    <>
      <div>
        <label htmlFor="name">Nombre : </label>
        <input
          type="text"
          name="name"
          id="name"
          className="InputName"
          value={props.name}
          onChange={handleChange}
        ></input>
        {/* value={props.name} para input controlado, vuelta atrás y que aparezca lo q la usuaria escribió */}
      </div>
    </>
  );
};

export default FilterByName;
