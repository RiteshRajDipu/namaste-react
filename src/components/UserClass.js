import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          userInfo: {
            name: 'Name dummy',
            location: "Kuch bhi",
            login: "@asjkd",
            avatar_url: "haha"
          },
        };
    }

  async componentDidMount() {
     const data = await fetch("https://api.github.com/users/akshaymarch7")
     const json = await data.json()
     console.log(json);
     
     this.setState({
        userInfo: json
     });
   }

   componentDidUpdate() {
    console.log("Updated")
   }

   componentWillUnmount() {
    console.log("Unmounting..")
   }

  render() {
    const { name, location, avatar_url, login } = this.state.userInfo;  
    
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshay008</h4>
        <img src={avatar_url} />
        <h5>Email: {login}@gmail.com</h5>
      </div>
    );
  }
}

export default UserClass;
