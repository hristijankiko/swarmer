import { Event } from "electron";
import { ipcRenderer } from "electron";
import * as React from "react";
import injectSheets from "react-jss";
import IOpenTorrentSuccessEvent from "../../../common/events/IOpenTorrentSuccessEvent";
import { OPEN_TORRENT_SUCCESS } from "../../../common/events/types";
import styles, { IStyles } from "./styles";

interface ITorrentListProps {
    classes: IStyles;
}

interface ITorrentListState {
    torrents: ITorrentListItem[];
}

interface ITorrentListItem {
    name: string;
    size: string;
    status: string;
    progress: number;
    down: number;
    up: number;
    eta: string;
    seeds: number;
    peers: number;
}

class Component extends React.Component<ITorrentListProps, ITorrentListState> {
    constructor(props: ITorrentListProps) {
        super(props);

        this.state = {
            torrents: [],
        };
    }

    public componentWillMount() {
        ipcRenderer.on(OPEN_TORRENT_SUCCESS, this.onOpenTorrentSuccess);
    }

    public render() {
        const { classes } = this.props;
        const { torrents } = this.state;

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
                    {torrents.map((torrent, i) => (
                        <tr key={i}>
                            <td>{torrent.name}</td>
                            <td className={classes.alignRight}>{torrent.size}</td>
                            <td className={classes.alignCenter}>
                                {torrent.status} {torrent.progress.toFixed(1)}%
                            </td>
                            <td className={classes.alignCenter}>{torrent.down}</td>
                            <td className={classes.alignCenter}>{torrent.up}</td>
                            <td className={classes.alignCenter}>{torrent.eta}</td>
                            <td className={classes.alignCenter}>{torrent.seeds}/{torrent.peers}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    private onOpenTorrentSuccess = (event: Event, data: IOpenTorrentSuccessEvent) => {
        const { torrents } = this.state;

        this.setState({
            torrents: [...torrents, {
                name: data.name,
                size: `${(data.size / (1024 * 1024)).toFixed(2)} MB`,
                status: "Stopped",
                progress: 0,
                down: 0,
                up: 0,
                eta: "Never",
                seeds: 0,
                peers: 0,
            }],
        });
    }
}

const TorrentList = injectSheets(styles)(Component);

export default TorrentList;
