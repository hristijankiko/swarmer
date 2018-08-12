import * as React from "react";
import injectSheets from "react-jss";
import AddButton from "./addButton";
import StartButton from "./startButton";
import StopButton from "./stopButton";
import styles, { IStyles } from "./styles";

class Component extends React.Component<{ classes: IStyles }, {}> {
    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <AddButton />
                <StartButton />
                <StopButton />
            </div>
        );
    }
}

const ActionBar = injectSheets(styles)(Component);

export default ActionBar;
