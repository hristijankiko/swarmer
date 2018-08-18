import * as bencode from "bencode";
import { Event, ipcMain } from "electron";
import * as fs from "fs";
import { basename } from "path";
import { promisify } from "util";
import IOpenTorrentEvent from "../common/events/IOpenTorrentEvent";
import IOpenTorrentSuccessEvent from "../common/events/IOpenTorrentSuccessEvent";
import {
    OPEN_TORRENT,
    OPEN_TORRENT_FAIL,
    OPEN_TORRENT_SUCCESS,
} from "../common/events/types";

const readFile = promisify(fs.readFile);

ipcMain.on(OPEN_TORRENT, async (event: Event, payload: IOpenTorrentEvent) => {
    const path = payload.path;

    try {
        const torrentName = basename(path).substring(0, basename(path).indexOf(".torrent"));
        const data = await readFile(path);
        const torrent = parseTorrent(data);

        console.log(torrent);
        event.sender.send(OPEN_TORRENT_SUCCESS, {
            name: torrentName,
            size: torrent.info.length,
        } as IOpenTorrentSuccessEvent);
    } catch (ex) {
        console.error(ex);
        event.sender.send(OPEN_TORRENT_FAIL);
        return;
    }
});

function parseTorrent(data: Buffer): any {
    const torrent = bencode.decode(data);

    // Convert fields to utf8
    torrent.announce = torrent.announce.toString("utf8");
    torrent.comment = torrent.comment.toString("utf8");

    if (Array.isArray(torrent.httpseeds)) {
        torrent.httpseeds = torrent.httpseeds.map((seedurl) => (
            seedurl.toString("utf8")
        ));
    }

    torrent.info.name = torrent.info.name.toString("utf8");

    return torrent;
}
