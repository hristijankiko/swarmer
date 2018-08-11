import ITheme from "../../themes/ITheme";

export interface IStyles {
    image: any;
}

const styles = (theme: ITheme): IStyles => ({
    image: {
        // background: theme.background7,
        height: "50px",
        width: "50px",
        margin: "0 5px",
        fill: "#FFF",
        cursor: "pointer",
    },
});

export default styles;
