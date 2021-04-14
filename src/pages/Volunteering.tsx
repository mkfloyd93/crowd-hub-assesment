import React, { ReactElement, useEffect, useState } from "react";
import { Content } from "../models/Content";
import { makeStyles, Container } from "@material-ui/core";
import VolenteerCard from "../components/Card/VolenteerCard";
import Filterbar from '../components/Filterbar/Filterbar';
import FilterOverlay from '../components/FilterOverlay/FilterOverlay';

const apiUrl = "http://hardingdevelopment.nexisit.net/harding_api/api_event_search.php?page_num=0&per_page=20&buckets=Volunteering&timezone=25200&app_server_version=3.2&app_version=2&app_build=1&user_id=2&token=70aedda35dca9c192ef551c9f7b570e0&salt=309a9bea4d2695656e83f4fe7b340ee0&app=1&version=3.2";

interface ErrorResponse {
    message: string;
}

const useStyles = makeStyles({
    root: {
        height: 'calc(100% - 72px)',
        overflow: 'auto',
        padding: '0px 20px 20px 20px',
        backgroundColor: 'darkgray'
    },
    fullPage: {
        overflow: 'hidden',
        position: 'relative' as const,
    }
})

function Volunteering(): ReactElement {
    const classes = useStyles();

    const [error, setError] = useState<ErrorResponse | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [contentList, setContentList] = useState<Content[]>([]);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    //https://reactjs.org/docs/faq-ajax.html
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setContentList(result.content);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div className={classes.root}>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className={classes.root}>Loading...</div>;
    } else {
        return (
            
            <div className={classes.fullPage}>
                <Filterbar showOverlay={showOverlay} setShowOverlay={setShowOverlay} selectedDate={selectedDate}></Filterbar>
                <FilterOverlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} setSelectedDate={setSelectedDate}></FilterOverlay>
                <div className={classes.root}>
                    <Container>
                        {contentList.filter(content => {
                            if(selectedDate){
                                const startDate = new Date(content.content_date_start);
                                const endDate = new Date(content.content_date_end);
                                return new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - 1) < selectedDate 
                                    && selectedDate < new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() + 1);
                            }
                            else{
                                return true;
                            }
                        }).map(content => (
                            <VolenteerCard content={content} key={content.content_id} />
                        ))}
                        </Container>
                </div>
            </div>
        )
    }
}

export default Volunteering;