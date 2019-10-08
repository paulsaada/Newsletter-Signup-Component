import React, { Component } from "react";
import Subtitle from "../components/subtitle/Subtitle";
import Privacy from "../containers/privacy/Privacy";
import NameForm from "../containers/name-form/name-form";

class UserNameCollection extends Component {
    state = {};

    render() {
        return (
            <div>
                <Subtitle text="ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME" />
                <form onSubmit={this.handleSubmit}>
                    <NameForm />
                    <Privacy />
                </form>
            </div>
        );
    }
}

export default UserNameCollection;
