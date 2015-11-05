import React from 'react';

class StorePicker extends React.Component {
  render() {
    let name = "Wes";

    return (
      <form className="store-selector">
        <h2>Please Enter A Store {name}</h2>
        <input type="text" ref="storeId" />
        <input type="Submit" />
      </form>
    )
  }
}

export default StorePicker