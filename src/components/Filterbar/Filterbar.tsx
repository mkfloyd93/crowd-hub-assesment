import FilterIcon from '../../assets/Icon_Filters.svg';
import { Avatar, IconButton, makeStyles, Typography, } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: 'lightgray',
        overflow: 'auto'
    },
    icon: {
        float: 'right',
        zIndex: 3
    },
    avatar: {
        height: '24px',
        width: '24px'
    },
    options: {
        float: 'left',
        padding: '12px'
    }
});

interface FilterbarProps {
    showOverlay: boolean;
    setShowOverlay: (show: boolean) => void;
    selectedDate: Date | null;
}

const Filterbar: React.FC<FilterbarProps> = (props: FilterbarProps) => {
    const classes = useStyles();

    const toggleOverlay = () => {
        props.setShowOverlay(!props.showOverlay);
    };

    const getDisplayDate = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return props.selectedDate ? months[props.selectedDate.getMonth()] + " " + props.selectedDate.getDate(): ''
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.options}>
                {getDisplayDate()}
            </Typography>
            <IconButton className={classes.icon} onClick={() => {toggleOverlay()}}>
                <Avatar className={classes.avatar} src={FilterIcon}></Avatar>
            </IconButton>
        </div>
    )
}

export default Filterbar;