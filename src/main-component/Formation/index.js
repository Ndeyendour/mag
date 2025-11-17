import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Causes from '../../components/Causes'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Formations from '../../components/formations';


const FormationsPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Formations'} pagesub={'Formations'}/> 
            <Formations/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default FormationsPage;
