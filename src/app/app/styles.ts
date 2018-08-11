import ITheme from "../themes/ITheme";

const styles = (theme: ITheme) => ({
    container: {
        padding: 40,
        background: theme.background3,
        textAlign: "left",
        color: "#FFF",
        height: "100%",
        boxSizing: "border-box",
        fontFamily: "Arial",
    },
});

export default styles;
