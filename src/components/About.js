import React from 'react';
import UserClass from './UserClass';

class About extends React.Component{
   constructor(){
    super();
   }

   componentDidMount() {
   }

  render() {
    return (
      <div>
          <h1>About Class Component</h1>
          <UserClass name={" "} location={""} />
      </div>
    );
  }
}

export default About;