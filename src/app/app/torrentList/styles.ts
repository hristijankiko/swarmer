import ITheme from "../../themes/ITheme";

export interface IStyles {
    table: any;
    alignRight: any;
    alignLeft: any;
    alignCenter: any;
}

const styles = (theme: ITheme): IStyles => ({
    table: {
        color: theme.color,
        width: "100%",
    },
    alignRight: {
        textAlign: "right",
    },
    alignLeft: {
        textAlign: "left",
    },
    alignCenter: {
        textAlign: "center",
    },
});

export default styles;
