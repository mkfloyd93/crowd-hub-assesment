import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton, Typography, Badge, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        marginTop: '10px',
    },
    icons: {
        float: 'left',
        zIndex: 3
    },
    title: {
        paddingTop: '12px',
        width: '100%',
        position: 'fixed'
    }
});


interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.icons}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <IconButton>
                    <ArrowBackIosIcon />
                </IconButton>
            </div>
            <div className={classes.title}>
                <Typography>{props.title}</Typography>
            </div>
            <Badge badgeContent={0}></Badge>
        </div>
    )
}

export default Header;