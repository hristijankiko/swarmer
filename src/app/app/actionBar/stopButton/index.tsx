import * as React from "react";
import injectSheets from "react-jss";
import styles, { IStyles } from "../actionButtonStyles";

class Component extends React.Component<{ classes: IStyles }, {}> {
    public render() {
        const { classes } = this.props;

        return (
            <img src="./assets/static/stop.svg" className={classes.image} />
        );
    }
}

const StopButton = injectSheets(styles)(Component);

export default StopButton;
