import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import EventSection from '../../components/event'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import BlogFullwidth from '../../components/BlogFullwidth2';


const EventPage2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Nos evenements'} pagesub={'Evenements'}/> 
           
            <EventSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage2;
