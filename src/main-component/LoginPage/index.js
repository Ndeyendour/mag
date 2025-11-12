import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, withRouter } from "react-router-dom";
import s1 from '../../images/shape.png';

import './style.scss';

const LoginPageMAG = (props) => {
    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({ ...value, remember: !value.remember });
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage',
        messages: {
            required: 'Ce champ est obligatoire',
            email: 'Adresse e-mail invalide'
        }
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

            // Vérification fictive — à remplacer par une vraie API
            if (value.email === "admin@mag.sn" && value.password === "mag2025") {
                toast.success('Bienvenue à la Maison des Associations de Guédiawaye !');
                props.history.push('/dashboard');
            } else {
                toast.error('Identifiants incorrects. Veuillez réessayer.');
            }
        } else {
            validator.showMessages();
            toast.error('Veuillez remplir tous les champs correctement.');
        }
    };

    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Connexion à la MAG</h2>
                <p>Accédez à votre espace associatif</p>

                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Adresse e-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="Adresse e-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
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
                                type="password"
                                label="Mot de passe"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction">
                                <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler} />}
                                    label="Se souvenir de moi"
                                />
                                <Link to="/mot-de-passe-oublie">Mot de passe oublié ?</Link>
                            </Grid>

                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">
                                    Se connecter
                                </Button>
                            </Grid>

                            <Grid className="loginWithSocial">
                                <Button className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </Button>
                                <Button className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </Button>
                                <Button className="linkedin">
                                    <i className="fa fa-linkedin"></i>
                                </Button>
                            </Grid>

                            <p className="noteHelp">
                                Pas encore de compte ?{' '}
                                <Link to="/inscription">Créer un compte association</Link>
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

export default withRouter(LoginPageMAG);
