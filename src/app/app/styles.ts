import ITheme from "../themes/ITheme";

export interface IStyles {
    container: any;
}

const styles = (theme: ITheme): IStyles => ({
    container: {
        background: theme.background4,
        textAlign: "left",
        color: theme.color,
        height: "100%",
        boxSizing: "border-box",
        fontFamily: "Arial",
    },
});

export default styles;
