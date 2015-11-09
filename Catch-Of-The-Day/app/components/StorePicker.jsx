import React from 'react';
import { History } from 'react-router';

class StorePicker extends React.Component {

  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required/>
        <input type="Submit" />
      </form>
    )
  }
}

export default StorePicker;