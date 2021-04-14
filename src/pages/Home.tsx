import { makeStyles } from "@material-ui/core";
import { ReactElement } from "react";

const useStyles = makeStyles({
    root: {
        height: '100%',
    },
})

function Home(): ReactElement{
    const classes = useStyles();
    return (
        <div className={classes.root}>
        </div>
    )
}

export default Home;