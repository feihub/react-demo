import React from "react";
import { Link } from "react-router-dom";

export default class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: "Zhang san", id: "3357", messages: 2 },
        { name: "Li Si", id: "3358", messages: 2 },
        { name: "Wang Er", id: "3359", messages: 3 },
        { name: "Lisa ya", id: "3340", messages: 2 },
        { name: "Ma Ye", id: "3341", messages: 6 },
        { name: "Akash Ba", id: "3342", messages: 2 },
        { name: "Do Sth", id: "3343", messages: 2 }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <h5>These are my friends.</h5>
        <div>
          <ul className="list-group">
            {this.state.friends.map(item => {
              return (
                <li className="list-group-item" key={item.id}>
                  <Link to={`/message/${item.id}/${item.messages}`}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
