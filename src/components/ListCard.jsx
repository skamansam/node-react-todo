import React from 'react';
import { Link } from 'react-router';
export default class ListCard extends React.Component {
  render() {
    return (
      <span className="card">
        <Link to={`/lists/${this.props.id}`}>
          <h2>{this.props.title}</h2>
        </Link>
        <img className="icon" title={this.props.icon} src={`/img/${this.props.icon}`} />
        {this.props.body && <span className="body"> {this.props.body}</span>}
      </span>
    );
  }
}