import * as React from "react";
import injectSheets from "react-jss";
import styles, { IStyles } from "./styles";

interface ITorrentListProps {
    classes: IStyles;
}

class Component extends React.Component<ITorrentListProps, {}> {
    public render() {
        const { classes } = this.props;

        return (
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.alignLeft}>Name</th>
                        <th className={classes.alignRight}>Size</th>
                        <th>Status</th>
                        <th>Down</th>
                        <th>Up</th>
                        <th>ETA</th>
                        <th>Seeds/Peers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Debian</td>
                        <td className={classes.alignRight}>1.2 GB</td>
                        <td className={classes.alignCenter}>Stopped 0.0%</td>
                        <td className={classes.alignCenter}>0</td>
                        <td className={classes.alignCenter}>0</td>
                        <td></td>
                        <td className={classes.alignCenter}>0/0</td>
                    </tr>
                    <tr>
                        <td>Ubuntu</td>
                        <td className={classes.alignRight}>800 MB</td>
                        <td className={classes.alignCenter}>Stopped 0.0%</td>
                        <td className={classes.alignCenter}>0</td>
                        <td className={classes.alignCenter}>0</td>
                        <td></td>
                        <td className={classes.alignCenter}>0/0</td>
                    </tr>
                    <tr>
                        <td>Fedora</td>
                        <td className={classes.alignRight}>1.5 GB</td>
                        <td className={classes.alignCenter}>Stopped 0.0%</td>
                        <td className={classes.alignCenter}>0</td>
                        <td className={classes.alignCenter}>0</td>
                        <td></td>
                        <td className={classes.alignCenter}>0/0</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const TorrentList = injectSheets(styles)(Component);

export default TorrentList;
