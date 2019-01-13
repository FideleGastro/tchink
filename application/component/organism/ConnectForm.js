import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});
const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
    height: 70vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;


class TextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Container>
                <StyledForm noValidate autoComplete="off">
                    <TextField
                        id="standard-full-widthfefe"
                        label="Label"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="standard-full-widthfefe"
                        label="Label"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="standard-full-widthfefe"
                        label="Label"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Envoyer
                    </Button>
                </StyledForm>
            </Container>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);