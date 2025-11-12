import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import s1 from '../../images/shape.png';
import './style.scss';

const SignUpPageMAG = (props) => {
    const [value, setValue] = useState({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage',
        messages: {
            required: 'Ce champ est obligatoire',
            email: 'Adresse e-mail invalide',
            alpha: 'Veuillez saisir uniquement des lettres',
            in: 'Les mots de passe ne correspondent pas'
        }
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                full_name: '',
                email: '',
                password: '',
                confirm_password: '',
            });
            validator.hideMessages();

            toast.success('Inscription réussie ! Bienvenue à la Maison des Associations de Guédiawaye.');
            props.history.push('/login');
        } else {
            validator.showMessages();
            toast.error('Veuillez remplir correctement tous les champs.');
        }
    };

    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Créer un compte</h2>
                <p>Rejoignez la communauté associative de Guédiawaye</p>

                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Nom complet"
                                value={value.full_name}
                                variant="outlined"
                                name="full_name"
                                label="Nom complet"
                                InputLabelProps={{ shrink: true }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('nom complet', value.full_name, 'required|alpha_space')}
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Adresse e-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="Adresse e-mail"
                                InputLabelProps={{ shrink: true }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Mot de passe"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label="Mot de passe"
                                type="password"
                                InputLabelProps={{ shrink: true }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('mot de passe', value.password, 'required|min:6')}
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirmer le mot de passe"
                                value={value.confirm_password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirmer le mot de passe"
                                type="password"
                                InputLabelProps={{ shrink: true }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('confirmation du mot de passe', value.confirm_password, `required|in:${value.password}`)}
                        </Grid>

                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">
                                    S'inscrire
                                </Button>
                            </Grid>

                            <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid>

                            <p className="noteHelp">
                                Vous avez déjà un compte ?{' '}
                                <Link to="/login">Se connecter</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>

                <div className="shape-img">
                    <img src={s1} alt="Décoration Maison des Associations" />
                </div>
            </Grid>
        </Grid>
    );
};

export default withRouter(SignUpPageMAG);
