import React from "react";

export default class Info extends React.Component {
    componentDidMount() {
        console.log("Mount");
    }

    componentDidUpdate() {
        console.log("Update");
    }
    componentWillUnmount() {
        console.log("Unmount");
    }

    render() {
        return (
            <h1>I'm info component</h1>
        )
    }
}