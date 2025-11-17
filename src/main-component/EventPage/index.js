import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import EventSection from '../../components/event'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import BlogFullwidth from '../../components/BlogFullwidth2';


const EventPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Nos associations'} pagesub={'Association'}/> 
            <BlogFullwidth/>
            {/* <EventSection/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;
