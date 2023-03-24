import React from 'react'
import notesImg from '../assets/img/svg/notes-img.svg'
import contacts from '../assets/img/svg/contact-group.svg'
import bgArrowImg from '../assets/img/png/big-arrow-img.png'
import earthImg from '../assets/img/svg/earth-img.svg'
import { Col, Container, Row } from 'react-bootstrap'

const Duration = () => {
    return (
        <section className='bg-lightgrey py-5 position-relative'>
            <div className="small-line"></div>
            <div className="small-line-2"></div>
            <div className='bgArrowImg'>
                <img src={bgArrowImg} alt="image" />
            </div>
            <div className='earth-img-3'>
                <img src={earthImg} alt="image" />
            </div>
            <Container className='py-5'>
                <div className='bg-darkblue rounded-4 align-items-center d-flex flex-column justify-content-lg-around flex-lg-row py-3'>
                    <div className='position-relative'>
                        <div className="d-flex align-items-baseline">
                            <p className='fw-bold ff-inter fs-118 text-white mb-0'>8</p>
                            <div className='text-cuttingline'></div>
                            <p className='fs-3xl fw-bold ff-inter text-white z-index-3'>MONTHS</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center my-4 my-lg-0'>
                        <div className='me-3 me-sm-4'>
                            <svg className='me-3 me-sm-4' width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.62">
                                    <path d="M10.649 24.4431H24.8699L15.17 12.5361L24.8699 0.628115H10.649L0.948959 12.5361L10.649 24.4431Z" fill="#FDFDFD" />
                                    <path opacity="0.38" d="M28.7189 24.4431H33.3609L23.6609 12.5361L33.3609 0.628115H28.7189L19.019 12.5361L28.7189 24.4431Z" fill="#FDFDFD" />
                                    <path opacity="0.17" d="M37.11 24.4431H41.752L32.052 12.5361L41.752 0.628115H37.11L27.41 12.5361L37.11 24.4431Z" fill="#FDFDFD" />
                                </g>
                            </svg>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p className='mb-0 fs-2xl fw-bold ff-inter text-white'>Duration</p>
                            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.183 17.5356C34.183 20.6865 33.2486 23.7666 31.4981 26.3864C29.7476 29.0062 27.2595 31.0482 24.3485 32.2539C21.4375 33.4597 18.2343 33.7752 15.144 33.1605C12.0537 32.5458 9.21503 31.0285 6.98704 28.8005C4.75905 26.5725 3.24177 23.7339 2.62707 20.6436C2.01237 17.5533 2.32785 14.3501 3.53363 11.4391C4.73941 8.52807 6.78133 6.03999 9.40117 4.28947C12.021 2.53895 15.1011 1.60461 18.252 1.60461C20.344 1.60461 22.4156 2.01668 24.3485 2.81729C26.2813 3.6179 28.0375 4.79137 29.5169 6.2707C30.9962 7.75003 32.1697 9.50625 32.9703 11.4391C33.7709 13.3719 34.183 15.4435 34.183 17.5356Z" fill="white" stroke="#242993" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.252 7.97656V17.5356L24.624 20.7216" stroke="#242993" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='ms-2 ms-sm-4'>
                            <svg className='ms-2 ms-sm-4' width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.855 24.4432H17.634L27.334 12.5362L17.634 0.628174H31.855L41.555 12.5362L31.855 24.4432Z" fill="#AAACD4" />
                                <path d="M13.786 24.4432H9.14395L18.844 12.5362L9.14395 0.628174H13.786L23.486 12.5362L13.786 24.4432Z" fill="#AAACD4" />
                                <path opacity="0.74" d="M5.39395 24.4432H0.751953L10.452 12.5362L0.751953 0.628174H5.39395L15.094 12.5362L5.39395 24.4432Z" fill="#AAACD4" />
                            </svg>
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className="d-flex align-items-baseline">
                            <p className='fw-bold ff-inter fs-118 text-white mb-0'>4</p>
                            <div className='text-cuttingline-2'></div>
                            <p className='fs-3xl fw-bold ff-inter text-white z-index-3'>MONTHS <br /> REMAINING</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/*INVOICES*/}
            <Container>
                <div className="invoice-border align-items-center d-flex flex-column justify-content-lg-evenly flex-lg-row py-4">
                    <div>
                        <p className='text-darkblue ff-inter fw-bold fs-45'>42K</p>
                    </div>
                    <div className='d-flex align-items-center my-4 my-lg-5'>
                        <div className='me-3 me-sm-4'>
                            <svg className='me-3 me-sm-4' width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.44">
                                    <path d="M9.7 23.8523H23.921L14.221 11.9453L23.921 0.0372944H9.7L0 11.9453L9.7 23.8523Z" fill="#242993" />
                                    <path opacity="0.38" d="M27.77 23.8523H32.412L22.712 11.9453L32.412 0.0372944H27.77L18.07 11.9453L27.77 23.8523Z" fill="#242993" />
                                    <path opacity="0.17" d="M36.161 23.8523H40.803L31.103 11.9453L40.803 0.0372944H36.161L26.461 11.9453L36.161 23.8523Z" fill="#242993" />
                                </g>
                            </svg>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p className='mb-0 fs-2xl fw-bold ff-inter text-darkblue'>Duration</p>
                            <img src={notesImg} alt="image" />
                        </div>
                        <div className='ms-3 ms-sm-4'>
                            <svg className='ms-3 ms-sm-4' width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.855 24.4432H17.634L27.334 12.5362L17.634 0.628174H31.855L41.555 12.5362L31.855 24.4432Z" fill="#AAACD4" />
                                <path d="M13.786 24.4432H9.14395L18.844 12.5362L9.14395 0.628174H13.786L23.486 12.5362L13.786 24.4432Z" fill="#AAACD4" />
                                <path opacity="0.74" d="M5.39395 24.4432H0.751953L10.452 12.5362L0.751953 0.628174H5.39395L15.094 12.5362L5.39395 24.4432Z" fill="#AAACD4" />
                            </svg>
                        </div>
                    </div>
                    <div className='py-4'>
                        <p className='text-orange ff-inter fw-bold fs-45'>21K</p>
                    </div>
                </div>
            </Container>


            <Container className='pt-5 mb-5'>
                <div className="bg-darkblue rounded-4 align-items-center d-flex flex-column justify-content-lg-evenly flex-lg-row py-5">
                    <div>
                        <p className='text-white ff-inter fw-bold fs-60 mb-0'>42K</p>
                        <p className='fs-xsm fw-bold ff-inter text-white mb-0'>MAN DAYS</p>
                    </div>
                    <div className='d-flex align-items-center my-4 my-lg-0'>
                        <div className='me-4'>
                            <svg className='me-4' width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7 24.1707H23.921L14.221 12.2637L23.921 0.355654H9.7L0 12.2637L9.7 24.1707Z" fill="#AAACD4" />
                                <path opacity="0.38" d="M27.77 24.1707H32.412L22.712 12.2637L32.412 0.355654H27.77L18.07 12.2637L27.77 24.1707Z" fill="#AAACD4" />
                                <path opacity="0.17" d="M36.161 24.1707H40.803L31.103 12.2637L40.803 0.355654H36.161L26.461 12.2637L36.161 24.1707Z" fill="#AAACD4" />
                            </svg>

                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p className='mb-0 fs-2xl fw-bold ff-inter text-white'>Effort</p>
                            <img src={contacts} alt="image" />
                        </div>
                        <div className='ms-4'>
                            <svg className='ms-4' width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.855 24.4432H17.634L27.334 12.5362L17.634 0.628174H31.855L41.555 12.5362L31.855 24.4432Z" fill="#AAACD4" />
                                <path d="M13.786 24.4432H9.14395L18.844 12.5362L9.14395 0.628174H13.786L23.486 12.5362L13.786 24.4432Z" fill="#AAACD4" />
                                <path opacity="0.74" d="M5.39395 24.4432H0.751953L10.452 12.5362L0.751953 0.628174H5.39395L15.094 12.5362L5.39395 24.4432Z" fill="#AAACD4" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className='text-white ff-inter fw-bold fs-60 mb-0'>14.25</p>
                        <p className='fs-xsm fw-bold ff-inter text-white mb-0'>MAN DAYS</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Duration