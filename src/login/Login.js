import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import {propTypes,reduxForm,Field} from 'redux-form';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/LockOutlined';
import compose from 'recompose/compose';

import {login} from './loginAction';
import * as selectors from '../selectors';

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        minWidth: 300,
        marginTop: '6em',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: theme.palette.secondary.main,
    },
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.grey[500],
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    actions: {
        padding: '0 1em 1em 1em',
    },
});

const renderInput=({
    meta: {touched,error}={},
    input: {...inputProps},
    ...props
})=>(
    <TextField
        error={!!(touched && error)}
        helperText={touched && error}
        {...inputProps}
        {...props}
        fullWidth
    />
);
class Login extends Component{

    login = auth =>
        this.props.userLogin(
            auth,
            this.props.location.state
                ? this.props.location.state.nextPathname
                : '/'
        );

    render(){
        const { classes, handleSubmit, isLoading, translate } = this.props;
        return (
            <div className={classes.main}>
                <Card className={classes.card}>
                    <div className={classes.avatar}>
                        <Avatar className={classes.icon}>
                            <LockIcon />
                        </Avatar>
                    </div>
                    <form onSubmit={handleSubmit(this.login)}>
                        <div className={classes.hint}>Hint: demo / demo</div>
                        <div className={classes.form}>
                            <div className={classes.input}>
                                <Field
                                    name="username"
                                    component={renderInput}
                                    label="用户名"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className={classes.input}>
                                <Field
                                    name="password"
                                    component={renderInput}
                                    label="密 码"
                                    type="password"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <CardActions className={classes.actions}>
                            <Button
                                variant="raised"
                                type="submit"
                                color="primary"
                                disabled={isLoading}
                                className={classes.button}
                                fullWidth
                            >
                                {isLoading && (
                                    <CircularProgress size={25} thickness={2} />
                                )}
                                {"登 录"}
                            </Button>
                        </CardActions>
                    </form>
                </Card>
            </div>
        );
    }
}

Login.propTypes = {

    ...propTypes,
    authProvider: PropTypes.func,
    classes: PropTypes.object,
    previousRoute: PropTypes.string,
    userLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ isLoading: selectors.getIsLogin(state) });

const enhance = compose(
    reduxForm({
        form: 'signIn',
        validate: (values) => {
            const errors = {};
            if (!values.username) {
                errors.username = "用户名是必填项";
            }
            if (!values.password) {
                errors.password = "密码是必填项";
            }
            return errors;
        },
    }),
    connect(
        mapStateToProps,
        login
    ),
    withStyles(styles)
);

export default enhance(Login);