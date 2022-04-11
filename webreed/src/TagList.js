import React, { Component, useEffect } from 'react';

class TagList extends Component {
  render() {
    async function fetchUserData(id) {
          const response = await fetch("/" + id);
          setUser(await response.json());
        }

    useEffect(() => {
          fetchUserData();
        }, []);
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}

export { TagList }
