import ITheme from "../../themes/ITheme";

export interface IStyles {
    container: any;
}

const styles = (theme: ITheme): IStyles => ({
    container: {
        background: theme.background3,
        height: "75px",
        display: "flex",
        alignItems: "center",
    },
});

export default styles;
