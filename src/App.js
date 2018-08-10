import React from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withWidth from '@material-ui/core/withWidth';
import {withStyles,createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import compose from 'recompose/compose';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./login/Login";

const theme = createMuiTheme({
    props: {
        MuiWithWidth:{
            initialWidth: 'lg',
        }
    },
});

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex'
    },
    paper: {
        padding: theme.spacing.unit * 2
    }
});

// function App() {
//     return (
//         <MuiThemeProvider theme={theme}>
//             <Button variant="contained" color="primary">
//                 Hello,world
//             </Button>
//             <Typography variant="display4" gutterBottom>测试</Typography>
//         </MuiThemeProvider>
//     );
// }

function App() {
    return (
        <Router>
            <Route path="/" component={Login}/>
        </Router>
    );
}

export default compose(
    withStyles(styles),
    withWidth(),
    )(App);
