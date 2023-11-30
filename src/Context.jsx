import React from "react";


export const TaskContext = React.createContext();

//React Hooks could go here. useState?
export class TaskProvider extends React.Component {

    state = {
        test: "Hello",
        style: { width: "70%" },
        isLightTheme: false
    }

    render() {

        return (
            <TaskContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </TaskContext.Provider>
        );
    }
}


