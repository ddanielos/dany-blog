import { Container } from "react-bootstrap";
import Head from 'next/head'
import Navbar from './Navbar';
import Footer from "./Footer";

const PageLayout = ({children, className}) => {
  return(
    <>
      {/*
      */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Navbar />
        <div className={`page-wraper ${className}`}>
          {children}
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default PageLayout;