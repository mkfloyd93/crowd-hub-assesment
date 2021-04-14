import { Page } from '../../models/Pages';
import { IconButton, Avatar, Container } from '@material-ui/core';
import HomeIcon from '../../assets/NavigationIcon_Home.png';
import HomeIconColor from '../../assets/NavigationIcon_Home_Color.png';
import StoriesIcon from '../../assets/NavigationIcon_Stories.png';
import StoriesIconColor from '../../assets/NavigationIcon_Stories_Color.png';
import VolunteeringIcon from '../../assets/NavigationIcon_Volunteer.png';
import VolunteeringIconColor from '../../assets/NavigationIcon_Volunteer_Color.png';

interface FooterProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    setHeaderTitle: (title: string) => void;
}

function onNavigationClick(newPage: Page, headerTitle: string, props: FooterProps): void{
    if(newPage !== props.currentPage){
        props.setCurrentPage(newPage);
        props.setHeaderTitle(headerTitle);
    }
}


const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    const homeIcon = props.currentPage === 'Home' ? HomeIconColor : HomeIcon; 
    const storiesIcon = props.currentPage === 'Stories' ? StoriesIconColor : StoriesIcon;
    const volunteeringIcon = props.currentPage === 'Volunteering' ? VolunteeringIconColor : VolunteeringIcon;
    return (
        <Container>
            <IconButton onClick={():void => { onNavigationClick('Home', 'Home', props) }}>
                <Avatar src={homeIcon}></Avatar>
            </IconButton>
            <IconButton onClick={():void => { onNavigationClick('Stories', 'Stories', props) }}>
                <Avatar src={storiesIcon}></Avatar>
            </IconButton>
            <IconButton onClick={():void => { onNavigationClick('Volunteering', 'Find a Volunteering Event', props) }}>
               <Avatar src={volunteeringIcon}></Avatar>
            </IconButton>
        </Container>
    );
}

export default Footer;