import * as React from "react";
import injectSheet from "react-jss";
import styles from "./styles";

class Component extends React.Component<{ classes: any }, {}> {
    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <h1>Swarmer</h1>
            </div>
        );
    }
}

const App = (injectSheet)(styles)(Component);

export default App;
