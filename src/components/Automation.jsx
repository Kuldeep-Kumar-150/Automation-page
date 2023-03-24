import React from 'react'
import downLoadImg from '../assets/img/svg/download-img.svg'
import messageImg from '../assets/img/svg/message-img.svg'
import mailImg from '../assets/img/svg/mail-img.svg'
import messageImg2 from '../assets/img/svg/message-img-2.svg'
import dottedImg2 from '../assets/img/svg/dotted-img-2.svg'
import { Col, Container, Row } from 'react-bootstrap'

const Automation = () => {
    return (
        <section className='position-relative py-5 mt-sm-5'>
            <div className="bg-lightblue-box d-none d-sm-flex"></div>
            <div className="dotted-img-2 d-none d-sm-flex"><img src={dottedImg2} alt="image" /></div>
            <Container className='pt-lg-5 mt-lg-5'>
                <div className="text-center">
                    <h2 className='heading'>Pre-Automation </h2>
                    <p className='ff-inter fw-normal fs-md text-dark'><span className='fw-bold'>Manually creating</span> and <span className='fw-bold'>distributing invoices</span> - labor-intensive and prone to errors.</p>
                </div>
                <Row className='py-lg-5 my-sm-5 justify-content-center'>
                    <Col sm={6} md={4} lg={3} className='mt-4'>
                        <div className='position-relative shadow d-flex flex-column align-items-center text-center bg-white rounded-2 h-100 px-3 py-4'>
                            <div className="icons-box d-flex align-items-center justify-content-center">
                                <img src={downLoadImg} alt="images" />
                            </div>
                            <p className='mb-0 pt-3 fs-xsm ff-inter fw-light text-grey'>Download invoices manually</p>
                            <div className="right-arrow">
                                <svg width="41" height="21" viewBox="0 0 41 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.353 6.6974H1.39451C1.11039 6.6974 0.83791 6.81225 0.637008 7.01667C0.436107 7.22109 0.323242 7.49835 0.323242 7.78745L0.323242 12.8747C0.323242 13.1638 0.436107 13.441 0.637008 13.6454C0.83791 13.8499 1.11039 13.9647 1.39451 13.9647H28.353V18.1491C28.3526 18.5806 28.4781 19.0025 28.7136 19.3614C28.949 19.7203 29.2839 20 29.6757 20.1651C30.0675 20.3303 30.4986 20.3733 30.9145 20.289C31.3304 20.2046 31.7124 19.9965 32.012 19.6911L39.6958 11.8725C40.0975 11.4637 40.3232 10.9092 40.3232 10.3311C40.3232 9.7529 40.0975 9.19842 39.6958 8.78958L32.012 0.971058C31.7124 0.665637 31.3304 0.457552 30.9145 0.373157C30.4986 0.288762 30.0675 0.331852 29.6757 0.496971C29.2839 0.662091 28.949 0.94181 28.7136 1.30071C28.4781 1.6596 28.3526 2.08153 28.353 2.51304V6.6974Z" fill="#F49E39" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className='mt-4'>
                        <div className='position-relative shadow d-flex flex-column align-items-center text-center bg-white rounded-2 h-100 px-3 py-4'>
                            <div className="icons-box d-flex align-items-center justify-content-center">
                                <img src={messageImg} alt="images" />
                            </div>
                            <p className='mb-0 pt-3 fs-xsm ff-inter fw-light text-grey'>Create an email for the tenant contact</p>
                            <div className="right-arrow-2">
                                <svg width="41" height="21" viewBox="0 0 41 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.353 6.6974H1.39451C1.11039 6.6974 0.83791 6.81225 0.637008 7.01667C0.436107 7.22109 0.323242 7.49835 0.323242 7.78745L0.323242 12.8747C0.323242 13.1638 0.436107 13.441 0.637008 13.6454C0.83791 13.8499 1.11039 13.9647 1.39451 13.9647H28.353V18.1491C28.3526 18.5806 28.4781 19.0025 28.7136 19.3614C28.949 19.7203 29.2839 20 29.6757 20.1651C30.0675 20.3303 30.4986 20.3733 30.9145 20.289C31.3304 20.2046 31.7124 19.9965 32.012 19.6911L39.6958 11.8725C40.0975 11.4637 40.3232 10.9092 40.3232 10.3311C40.3232 9.7529 40.0975 9.19842 39.6958 8.78958L32.012 0.971058C31.7124 0.665637 31.3304 0.457552 30.9145 0.373157C30.4986 0.288762 30.0675 0.331852 29.6757 0.496971C29.2839 0.662091 28.949 0.94181 28.7136 1.30071C28.4781 1.6596 28.3526 2.08153 28.353 2.51304V6.6974Z" fill="#F49E39" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className='mt-4'>
                        <div className='position-relative shadow d-flex flex-column align-items-center text-center bg-white rounded-2 h-100 px-3 py-4'>
                            <div className="icons-box d-flex align-items-center justify-content-center">
                                <img src={mailImg} alt="images" />
                            </div>
                            <p className='mb-0 pt-3 fs-xsm ff-inter fw-light text-grey'>Send the e-mailmanually</p>
                            <div className="right-arrow">
                                <svg width="41" height="21" viewBox="0 0 41 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.353 6.6974H1.39451C1.11039 6.6974 0.83791 6.81225 0.637008 7.01667C0.436107 7.22109 0.323242 7.49835 0.323242 7.78745L0.323242 12.8747C0.323242 13.1638 0.436107 13.441 0.637008 13.6454C0.83791 13.8499 1.11039 13.9647 1.39451 13.9647H28.353V18.1491C28.3526 18.5806 28.4781 19.0025 28.7136 19.3614C28.949 19.7203 29.2839 20 29.6757 20.1651C30.0675 20.3303 30.4986 20.3733 30.9145 20.289C31.3304 20.2046 31.7124 19.9965 32.012 19.6911L39.6958 11.8725C40.0975 11.4637 40.3232 10.9092 40.3232 10.3311C40.3232 9.7529 40.0975 9.19842 39.6958 8.78958L32.012 0.971058C31.7124 0.665637 31.3304 0.457552 30.9145 0.373157C30.4986 0.288762 30.0675 0.331852 29.6757 0.496971C29.2839 0.662091 28.949 0.94181 28.7136 1.30071C28.4781 1.6596 28.3526 2.08153 28.353 2.51304V6.6974Z" fill="#F49E39" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} className='mt-4'>
                        <div className='position-relative shadow d-flex flex-column align-items-center text-center bg-white rounded-2 h-100 px-3 py-4'>
                            <div className="icons-box d-flex align-items-center justify-content-center">
                                <img src={messageImg2} alt="images" />
                            </div>
                            <p className='mb-0 pt-3 fs-xsm ff-inter fw-light text-grey'>Maintain communication records manually</p>
                            <div className="right-arrow">
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Automation