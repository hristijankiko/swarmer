import { ipcRenderer } from "electron";
import * as React from "react";
import injectSheets from "react-jss";
import IOpenTorrentEvent from "../../../../common/events/IOpenTorrentEvent";
import { OPEN_TORRENT } from "../../../../common/events/types";
import styles, { IStyles } from "../actionButtonStyles";

interface IAddButtonProps {
    classes: IStyles;
}

class Component extends React.Component<IAddButtonProps, {}> {
    private fileInputRef: React.RefObject<HTMLInputElement>;

    constructor(props: IAddButtonProps) {
        super(props);
        this.fileInputRef = React.createRef();
    }

    public render() {
        const { classes } = this.props;

        return (
            <div>
                <img onClick={this.onAddTorrent}
                    src="./assets/static/plus.svg"
                    className={classes.image}
                />

                <input type="file" onChange={this.onFileOpen}
                    accept="application/x-bittorrent"
                    className={classes.hidden} ref={this.fileInputRef} />
            </div>
        );
    }

    private onFileOpen = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files.length === 0) {
            console.error("Failed to read file");
            return;
        }

        const path = (files[0] as any).path;

        if (!path) {
            console.error("Failed to get file path");
            return;
        }

        ipcRenderer.send(OPEN_TORRENT, {
            path,
        } as IOpenTorrentEvent);
    }

    private onAddTorrent = () => {
        this.fileInputRef.current.click();
    }
}

const AddButton = injectSheets(styles)(Component);

export default AddButton;
