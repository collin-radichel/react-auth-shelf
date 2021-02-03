import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {

  const shelf = useSelector(state => state.shelf);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    description: '',
    image_url: ''
  });

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
  }, []);


  const handleChange = (event) => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newItem);
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setNewItem({
      description: '',
      image_url: ''
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            rows="5"
            cols="30"
            name="description"
            value={newItem.description}
            placeholder="description of item"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="image_url"
            value={newItem.image_url}
            placeholder="image url"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <div>
        <h2>Shelf</h2>
      </div>
      <div>
        <ul>
          {shelf.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.image_url} />
                <br />
                <p>{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShelfPage;
