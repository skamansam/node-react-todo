import React from 'react';
import ListCard from './ListCard';
import lists from '../../data/lists';

export default class Lists extends React.Component {
  render() {
    return (
      <div className="lists">
        <div className="list-selector">
          {lists.map(list => <ListCard key={list.id} {...list} />)}
        </div>
      </div>
    );
  }
}