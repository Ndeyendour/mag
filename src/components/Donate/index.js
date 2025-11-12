import React from 'react'
import './style.css'

const PartnershipForm = () => {

    const SubmitHandler = (e) => {
        e.preventDefault()
        alert("Merci pour votre intérêt ! Votre demande de partenariat a bien été envoyée.")
    }

    return (
        <div className="tp-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        
                        {/* TITRE PRINCIPAL */}
                        <div className="tp-donate-header text-center mb-4">
                            <h2>Devenir Partenaire</h2>
                            <p>
                                Rejoignez la <strong>Maison des Associations de Guédiawaye</strong> en tant que partenaire institutionnel,
                                associatif ou privé. Ensemble, construisons des synergies fortes pour le développement de notre territoire.
                            </p>
                        </div>

                        {/* FORMULAIRE */}
                        <form onSubmit={SubmitHandler} className="partner-form">
                            <div className="tp-donations-details">
                                <h3>Informations sur votre organisation</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="organisation" 
                                            placeholder="Nom de l’organisation / entreprise" 
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <select className="form-control" name="type" required>
                                            <option value="">Type de structure</option>
                                            <option value="association">Association</option>
                                            <option value="entreprise">Entreprise</option>
                                            <option value="institution">Institution publique</option>
                                            <option value="ONG">ONG / Fondation</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="responsable" 
                                            placeholder="Nom du responsable / représentant" 
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="tp-donations-details mt-4">
                                <h3>Coordonnées de contact</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name="email" 
                                            placeholder="Adresse email" 
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input 
                                            type="tel" 
                                            className="form-control" 
                                            name="telephone" 
                                            placeholder="Numéro de téléphone" 
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="adresse" 
                                            placeholder="Adresse complète" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="tp-donations-details mt-4">
                                <h3>Votre motivation</h3>
                                <div className="row">
                                    <div className="col-lg-12 form-group">
                                        <textarea 
                                            className="form-control" 
                                            name="motivation" 
                                            rows="5" 
                                            placeholder="Pourquoi souhaitez-vous devenir partenaire ?"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <textarea 
                                            className="form-control" 
                                            name="proposition" 
                                            rows="4" 
                                            placeholder="Quels types de partenariats ou d’appuis proposez-vous ?"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="tp-donations-details mt-4">
                                <h3>Documents complémentaires (facultatif)</h3>
                                <div className="row">
                                    <div className="col-lg-12 form-group">
                                        <input 
                                            type="file" 
                                            className="form-control" 
                                            name="document" 
                                            accept=".pdf,.doc,.docx,.png,.jpg" 
                                        />
                                        <small>Ajoutez un document de présentation ou une proposition de partenariat.</small>
                                    </div>
                                </div>
                            </div>

                            <div className="submit-area text-center mt-5">
                                <button type="submit" className="theme-btn submit-btn">
                                    Envoyer ma demande
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnershipForm;
