import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, makeStyles } from '@material-ui/core';
import { Content, Tag } from '../../models/Content';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    action: {
        marginLeft: 'auto'
    }
});

interface VolenteerCardProps{
    content: Content
}

const VolenteerCard: React.FC<VolenteerCardProps> = (props: VolenteerCardProps) => {
    const classes = useStyles();
    return (
        <Card raised={true} className={classes.root} key={`${props.content.content_id}-volenteer-card`}>
            <CardHeader align="left" title={props.content.content_name} subheader={props.content.tags.reduce((prevVal: string, currVal: Tag, i) => {
                return i === 0 ? currVal.tag_name : prevVal + ", " + currVal.tag_name;
            }, '')}></CardHeader>
            <CardMedia 
                className={classes.media}
                image={`https://crowdhubharding.s3-us-west-2.amazonaws.com/${props.content.content_image}`}>
            </CardMedia>
            <CardContent>
                <Typography variant="body2" align='left'>
                    {props.content.content_social_description}
                </Typography>
                <Typography variant="subtitle2" align='left' style={{ fontWeight: 600, marginTop: '10px' }}>
                    {props.content.content_date_literal_range}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.action} size="small">Learn More</Button>
            </CardActions> 
        </Card>
    );
};

export default VolenteerCard;