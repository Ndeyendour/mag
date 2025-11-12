import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Actualites'} pagesub={'Actualites'}/> 
            <BlogList/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;

