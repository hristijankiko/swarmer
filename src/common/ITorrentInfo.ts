export default interface ITorrentInfo {
    announce: Buffer | string;
    comment: Buffer | string;
    "creation date": number;
    httpseeds?: Buffer[] | string[];
    info: {
        length: number;
        name: Buffer | string;
        "piece length": number;
        pieces: Buffer;
    };
}
