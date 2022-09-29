import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FirstName } from "../../utils/getName";
import { Today } from "./Today"

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                {`${FirstName}`}
            </Typography>
                <Today />
        </Container>
    );
};
