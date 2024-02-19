import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { ping } from '@containers/App/actions'; // Import ping action
import image from '../../assets/TW.png';
import classes from './style.module.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  const dispatch = useDispatch();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting = '';
    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = 'Good Afternoon!';
    } else {
      newGreeting = 'Good Night!';
    }
    setGreeting(newGreeting);
  }, []);

  return (
    <>
    <div className={classes.container}>
      <div className={classes.textWrapper}>
        <div className={classes.text}>
          <div>{greeting}</div>
           <FormattedMessage id='app_greeting'/>
           <p><FormattedMessage id= 'app_content'/></p>
        </div>
      </div>
     <div className={classes.footer}>
      <footer >
      <p> <FormattedMessage id="app_title_header"/> </p>
      <div className={classes.Btn}>
            <Stack spacing={2} direction="row">
              <a href="https://www.linkedin.com/in/lalu-faishal-aswin-62a66720b/" target="_blank" rel="noopener noreferrer">
                <Button sx={{backgroundColor:"#F5EEC8"}} variant="contained"><LinkedInIcon/></Button>
              </a>
              <a href="https://www.instagram.com/faishalaswin/?next=%2F" target="_blank" rel="noopener noreferrer">
                <Button sx={{backgroundColor:"#F5EEC8"}} variant="contained"><InstagramIcon/></Button>
              </a>
              <a href="https://github.com/lalufaishalaswin/" target="_blank" rel="noopener noreferrer">
                <Button sx={{backgroundColor:"#F5EEC8"}} variant="contained"><GitHubIcon/></Button>
              </a>
            </Stack>
          </div>
    </footer>
    </div>
    </div>
    
     
    </>
  );
};

export default Home;
