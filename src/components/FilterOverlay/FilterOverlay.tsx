import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 200,
    },
});

interface FilterOverlayProps {
    showOverlay: boolean;
    setShowOverlay: (show: boolean) => void;
    setSelectedDate: (date: Date | null) => void;
}

const FilterOverlay: React.FC<FilterOverlayProps> = (props: FilterOverlayProps) => {
    const classes = useStyles();

    const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(null);

    const handleTimeChange = (updatedDate: string) => {
        setTempSelectedDate(new Date(updatedDate));
    };

    const handleClose = () => {
        props.setShowOverlay(false);
        props.setSelectedDate(null);
    };

    const handleSave = () => {
        props.setShowOverlay(false);
        props.setSelectedDate(tempSelectedDate);
    };
    return (
        <div>
            <Dialog open={props.showOverlay}>
                <DialogTitle>Filter Options</DialogTitle>
                <DialogContent>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Event Date"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => handleTimeChange(event.target.value)}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FilterOverlay;