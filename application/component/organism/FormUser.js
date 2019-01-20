import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import axios from 'axios';

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
  width: 100%;
`;

const Container = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class TextFields extends React.Component {
    state = {
    };

    onSubmit = (form, id) => {
        axios.post('/profile/update/' + id, { ...form }).then(response => {
            console.log('res =>', response.data)
            //return response.data
        })
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes, user } = this.props;
        console.log('props USER =>', user)
        return (
            <Container>
                {console.log('state =>', this.state)}
                <StyledForm noValidate autoComplete="off" method="post" >
                    <TextField
                        id="inscription-nom-prenom"
                        label="Nom / Prenom"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="email"
                        value={this.state.name || user.name}
                        onChange={this.handleChange('name')}
                    />
                    <TextField
                        id="inscription-email"
                        label="Email"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="email"
                        value={this.state.email || user.email}
                        onChange={this.handleChange('email')}
                    />
                    <TextField
                        id="inscription-date"
                        label="Date de naissance"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="date"
                        value={this.state.age || user.age.split('T')[0]}
                        onChange={this.handleChange('age')}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        id="inscription-password"
                        label="Mot de passe"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="password"
                        value={this.state.password || user.password}
                        onChange={this.handleChange('password')}
                    />
                    <TextField
                        id="inscription-tel"
                        label="Téléphone"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="number"
                        value={this.state.phone || user.phone}
                        onChange={this.handleChange('phone')}
                    />
                    <Button onClick={() => this.onSubmit(this.state, user.id)} variant="contained" color="primary" className={classes.button}>
                        MODIFIFER SES INFOS
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