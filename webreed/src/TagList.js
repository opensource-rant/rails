import React, { Component } from 'react';

class TagList extends Component {
  render() {
    const items = [{ 'id': 1, name: 'engineer' }, { 'id': 2, 'name': 'manager'}];
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
