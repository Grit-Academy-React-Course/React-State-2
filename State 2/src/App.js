import React, { Fragment } from "react";
import Info from "./components/info/Info";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      users: [{
        firstName: "Joakim",
        lastName: "Kalthoum",
        score: -100
      },
      {
        firstName: "Shayaan",
        lastName: "Andersson",
        score: 200
      }],
      toggleInfoComponent: true
    }
  }



  // count = 0;
  increase = () => {
    /*     this.state.count = this.state.count + 1;
        console.log(this.state.count); */
    this.setState({ count: this.state.count + 1 })

    //  this.setState({})
    /*     this.count = this.count + 1
        console.log(this.count); */
  }

  decrease = () => {
    this.setState({ count: this.state.count - 1 })
  }

  displayUsers = () => {
    return (
      this.state.users.map((value, index) => {
        return (
          <div key={index}>
            <h1>Name: {value.firstName + " " + value.lastName}</h1>
            <h3>Score: {value.score}</h3>
          </div>
        )
      })
    )
  }
  addNewUser = () => {
    const mockUser = {
      firstName: "Alex",
      lastName: "Gate",
      score: 300
    }

    /* this.state.users.push(mockUser)
    console.log(this.state.users); */
    this.setState({ users: [mockUser, ...this.state.users] })

  }
  changeJoakimScore = () => {
    const tempUsers = this.state.users;
    for (let i = 0; i < tempUsers.length; i++) {
      const element = tempUsers[i];
      if (element.firstName === "Joakim") {
        element.score = -9999;
      }
    }
    /*   tempUsers.forEach((value) => {
        if (value.firstName === "Joakim") {
          value.score = -9999;
        }
      }) */
    this.setState({ users: tempUsers })
  }
  toggleInfoComponent = () => {
    this.setState({ toggleInfoComponent: !this.state.toggleInfoComponent })
    // console.log(this.state.toggleInfoComponent);
  }

  componentDidMount() {
    //The first time this component is loaded in the DOM, we bring our saved state from localstorage and use it
    if (localStorage.getItem("myState")) {
      this.setState(JSON.parse(localStorage.getItem("myState")))
    }
    //console.log("Mount");
  }

  componentDidUpdate() {
    //every time we update the state object, this method will be triggered. In the below example we saveour state in localstorage every time state changes
    localStorage.setItem("myState", JSON.stringify(this.state))
    //console.log("Update");
  }
  componentWillUnmount() {
    localStorage.removeItem("myState")
  }

  render() {
    return (
      <Fragment>
        <div>
          {this.state.toggleInfoComponent && <Info />/* We toggle components with help of state */}
          <button onClick={this.toggleInfoComponent}>Toggle Info Component</button>
          <br></br>
        </div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        {this.state.count}
        {this.state.users.length < 5 ? this.displayUsers() : null}
        <button onClick={this.addNewUser}>Add new user</button>
        <button onClick={this.changeJoakimScore}>Change Joakim Score</button>
      </Fragment>
    )
  }
}

export default App;