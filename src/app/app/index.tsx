import * as React from "react";
import injectSheet from "react-jss";
import ActionBar from "./actionBar";
import styles, { IStyles } from "./styles";
import TorrentList from "./torrentList";

class Component extends React.Component<{ classes: IStyles }, {}> {
    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <ActionBar />
                <TorrentList />
            </div>
        );
    }
}

const App = (injectSheet)(styles)(Component);

export default App;
