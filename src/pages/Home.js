import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DisplacementSphere />
        <LogoLink />
        <Content />
        <ThemeToggle />
        <SocialIcons/>
      </div>
    </>
  );
};
