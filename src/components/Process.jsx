import React from 'react'
import manWithDairy from '../assets/img/png/man-dairy.png'
import girlWithLaptop from '../assets/img/png/girl-with-laptop.png'
import earthImg from '../assets/img/svg/earth-img.svg'
import dottedImg2 from '../assets/img/svg/dotted-img-2.svg'
import { Col, Container, Row } from 'react-bootstrap'

const Process = () => {
    return (
        <section className='my-5 py-5 position-relative overflow-hidden'>
            <div className='earth-img'>
                <img src={earthImg} alt="image" />
            </div>
            <div className="dotted-img-3"><img className='w-75' src={dottedImg2} alt="image" /></div>
            <div className="dotted-img-4"><img className='w-75' src={dottedImg2} alt="image" /></div>
            <div className='left-arrow'>
                <svg width="77" height="95" viewBox="0 0 77 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.05">
                        <path d="M57.224 30.7441C53.822 37.3939 50.4791 43.9005 46.6741 49.986C43.0346 56.0292 38.606 61.5605 33.5051 66.4336C28.4747 71.1773 22.4931 74.7969 15.957 77.0525C9.48254 79.2765 2.47683 79.433 -4.09054 77.5004C-10.8172 75.349 -16.8843 71.5181 -21.7187 66.3699C-26.7289 61.1141 -30.7045 54.9619 -33.4378 48.2348C-36.2023 41.3707 -38.1851 34.217 -39.3486 26.9091C-40.6233 19.5761 -41.3758 12.1269 -42.1089 4.6869C-41.8779 12.1594 -41.6306 19.6423 -40.8452 27.1185C-40.155 34.6597 -38.617 42.0992 -36.2605 49.296C-33.8292 56.6426 -30.0358 63.4656 -25.0787 69.408C-20.0092 75.5605 -13.452 80.3161 -6.02899 83.2236C-2.2031 84.6619 1.82856 85.4778 5.91263 85.6403C9.99982 85.7801 14.086 85.3341 18.0468 84.316C25.8655 82.2085 33.145 78.4581 39.3999 73.3151C45.4958 68.2501 50.8875 62.3932 55.4319 55.9C59.9934 49.5889 63.9365 43.0193 67.7879 36.602L57.224 30.7441Z" fill="#001D2A" />
                        <path d="M73.9766 45.2813L73.4424 13.9659L46.5875 30.0829L73.9766 45.2813Z" fill="#001D2A" />
                        <path d="M34.9086 81.5219C31.1092 83.8129 27.0889 85.7159 22.9085 87.2021C18.8138 88.6504 14.5434 89.5436 10.2115 89.8579C5.89657 90.2256 1.55071 89.9158 -2.66842 88.9398C-4.81522 88.4901 -6.92906 87.8953 -8.9954 87.1595C-10.0535 86.8277 -11.0879 86.4246 -12.0914 85.9529C-13.1231 85.5206 -14.1692 85.1069 -15.237 84.7009C-14.3399 85.377 -13.4252 86.0385 -12.4899 86.6902C-11.5773 87.3749 -10.6111 87.985 -9.60048 88.5145C-7.58852 89.6221 -5.4714 90.5269 -3.28037 91.2156C-1.08179 91.9473 1.18287 92.4631 3.4815 92.7555C4.63003 92.9225 5.79824 92.8797 6.95745 92.9513C7.53821 92.9631 8.12054 93.0198 8.69988 92.9905L10.4397 92.8677C15.0648 92.52 19.5887 91.3369 23.7919 89.3756C27.9619 87.4863 31.7345 84.821 34.9086 81.5219Z" fill="#001D2A" />
                        <path d="M47.7039 39.1015C43.6315 45.0131 39.2354 50.695 34.5359 56.1214C32.2014 58.7948 29.7262 61.3419 27.1207 63.7519C24.534 66.2146 21.7042 68.3607 18.8248 70.6626C22.3283 69.4814 25.6287 67.7667 28.6093 65.579C31.6094 63.4064 34.3561 60.904 36.798 58.1187C39.2297 55.3435 41.3944 52.3452 43.2634 49.1636C45.1597 46.0091 46.6516 42.6285 47.7039 39.1015Z" fill="#001D2A" />
                    </g>
                </svg>
            </div>
            <Container>
                <h5 className='heading text-center'>Increasing process efficiency by</h5>
                <div className="position-relative d-flex justify-content-center">
                    <p className='text-lightgreen fs-100 fw-bold ff-inter'>4x</p>
                    <svg className='green-arrow' width="130" height="103" viewBox="0 0 130 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.13">
                            <path d="M110.939 33.9641C106.855 41.3041 102.839 48.4861 98.3265 55.1771C93.9989 61.8266 88.8045 67.8698 82.8805 73.1471C77.0406 78.2822 70.1754 82.1167 62.7405 84.3961C55.3761 86.6414 47.496 86.5422 40.1905 84.1121C32.7132 81.4292 26.0434 76.884 20.8115 70.9061C15.3865 64.8022 11.1595 57.7314 8.35147 50.0631C5.51356 42.24 3.56565 34.1221 2.54449 25.8631C1.39949 17.5701 0.844484 9.16908 0.314484 0.778076C0.280484 9.18608 0.265492 17.6061 0.854492 26.0401C1.33251 34.5446 2.76755 42.9681 5.13248 51.1511C7.57876 59.5024 11.5761 67.3183 16.9155 74.1901C22.3719 81.3044 29.5554 86.9069 37.7845 90.4661C42.0279 92.2324 46.5269 93.3073 51.1105 93.6501C55.699 93.966 60.309 93.6235 64.8005 92.6331C73.6708 90.5729 81.9999 86.6452 89.2325 81.1121C96.2816 75.6595 102.571 69.2894 107.932 62.1711C113.307 55.2571 117.996 48.0281 122.576 40.9711L110.939 33.9641Z" fill="#55CBA9" />
                            <path d="M129.198 50.958L129.827 15.7401L99.0115 32.8001L129.198 50.958Z" fill="#55CBA9" />
                            <path d="M83.8645 90.1601C79.5043 92.5858 74.9112 94.5668 70.1545 96.0731C65.4957 97.5399 60.6613 98.376 55.7805 98.5591C50.9161 98.8032 46.0435 98.2846 41.3395 97.0221C38.9444 96.4324 36.5919 95.681 34.2985 94.7731C33.121 94.3584 31.973 93.8643 30.8625 93.2941C29.7225 92.7681 28.5625 92.2611 27.3795 91.7641C28.3615 92.5591 29.3635 93.3431 30.3885 94.1081C31.3867 94.9135 32.4481 95.6371 33.5625 96.2721C35.7812 97.5962 38.126 98.6962 40.5625 99.5561C43.0055 100.466 45.5315 101.136 48.1045 101.556C49.3885 101.789 50.7045 101.787 52.0045 101.911C52.6565 101.947 53.3045 102.033 53.9605 102.025L55.9205 101.955C61.1328 101.746 66.2641 100.594 71.0655 98.5551C75.8255 96.5936 80.169 93.7446 83.8645 90.1601Z" fill="#1B8567" />
                            <path d="M99.9125 42.9831C95.1033 49.4676 89.9394 55.6814 84.4445 61.5961C81.7157 64.5088 78.8336 67.2741 75.8105 69.8801C72.8105 72.5461 69.5425 74.8471 66.2105 77.3221C70.1957 76.1325 73.9735 74.335 77.4105 71.9931C80.8688 69.6693 84.0555 66.9647 86.9105 63.9301C89.7528 60.9065 92.3038 57.6216 94.5295 54.1191C96.7838 50.6476 98.5923 46.9062 99.9125 42.9831Z" fill="#1B8567" />
                        </g>
                    </svg>
                </div>

                <Row className='my-5 py-5 position-relative'>
                    <div>
                        <div className='dotted-blue-border d-flex justify-content-center align-items-center'>
                            <div className='d-flex align-items-center justify-content-center dotted-box'>
                                <p className='mb-0 fs-50 fw-bold ff-inter text-lightblue'>V</p>
                                <p className='mb-0 fs-50 fw-bold ff-inter text-lightblue mt-4'>S</p>
                            </div>
                        </div>
                    </div>
                    <Col lg={6} className=''>
                        <div className="bg-lightblue w-100 py-4 rounded-4 after-layer position-relative mb-5 mb-lg-0">
                            <p className='text-center fs-lg fw-bold ff-inter text-lightblue mb-0'>PRE-AUTOMATION</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="bg-orange w-100 py-4 rounded-4 after-layer-2 position-relative mt-5 mt-lg-0">
                            <p className='text-center fs-lg fw-bold ff-inter text-white mb-0'>POST-AUTOMATION</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <img className='girl-laptopimg-width' src={manWithDairy} alt="images" />
                        <p className='ff-inter fw-bold fs-xl text-orange mt-4 mt-md-5 text-center text-lg-start ps-lg-5'>With 100% manual process</p>
                    </Col>
                    <Col lg={6} className='mt-5 mt-lg-0'>
                        <img className='girl-laptopimg-width ps-lg-5' src={girlWithLaptop} alt="images" />
                        <p className='ff-inter fw-bold fs-xl mt-4 mt-md-5 ps-lg-5 text-center text-lg-start'>With just 70% implementation</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Process