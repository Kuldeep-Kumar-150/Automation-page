import React from 'react'
import boxImage1 from '../assets/img/png/1st-box.png'
import boxImage2 from '../assets/img/png/2nd-box.png'
import boxImage3 from '../assets/img/png/3rd-box.png'
import boxImage4 from '../assets/img/png/4th-box.png'
import boxImage5 from '../assets/img/png/5th-box.png'
import imageIcon1 from '../assets/img/svg/image-icon-1.svg'
import imageIcon2 from '../assets/img/svg/image-icon-2.svg'
import imageIcon3 from '../assets/img/svg/image-icon-3.svg'
import imageIcon4 from '../assets/img/svg/image-icon-4.svg'
import imageIcon5 from '../assets/img/svg/image-icon-5.svg'
import linearImg from '../assets/img/svg/linear-line-blue.svg'
import rightArrow3 from '../assets/img/svg/2nd-right-arrow.svg'
import earthImg from '../assets/img/svg/earth-img.svg'
import { Col, Container, Row } from 'react-bootstrap'

const PostAutomation = () => {
    return (
        <section className='position-relative overflow-hidden'>
            <div className="rect-box d-none d-lg-flex"></div>
            <div className="rect-box-2 d-none d-lg-flex"></div>
            <div className='at-the-rate-img'>
                <svg width="71" height="82" viewBox="0 0 71 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.4752 6.49676C49.7492 0.688764 39.6952 -0.872225 30.4022 1.97677C19.8832 5.20177 11.1293 13.7378 5.08327 26.6628C2.09998 33.2494 0.542538 40.3921 0.5132 47.6228C0.5062 56.0528 2.72022 63.4848 6.91322 69.1148C13.9132 78.5148 24.9492 81.1848 35.2352 81.1848C38.6544 81.1708 42.068 80.9054 45.4483 80.3908C46.106 80.2929 46.6979 79.9378 47.0938 79.4035C47.4897 78.8692 47.6571 78.1995 47.5592 77.5418C47.4614 76.884 47.1062 76.2921 46.5719 75.8962C46.0376 75.5004 45.368 75.3329 44.7102 75.4308C28.9032 77.7758 17.2242 74.5558 10.9352 66.1168C3.3652 55.9578 4.54621 39.6468 9.62721 28.7868C15.0552 17.1798 22.7482 9.56777 31.8722 6.76977C39.7722 4.34777 48.4302 5.74177 56.9032 10.7988C74.4932 21.3048 59.9582 53.4348 59.8092 53.7588C59.7654 53.8565 59.7274 53.9567 59.6952 54.0588C58.6282 57.4518 54.9032 60.3168 51.5582 60.3168C49.8312 60.3168 48.6242 59.9548 48.1582 59.2958C47.7336 58.3197 47.7128 57.2152 48.1002 56.2238C48.1132 56.1858 48.1273 56.1468 48.1393 56.1098L50.3102 49.4148C50.4172 49.1208 50.5202 48.8228 50.6102 48.5238L54.7512 36.0108C54.8512 35.6988 54.9362 35.3898 55.0163 35.0778L58.1632 25.4928C58.3663 24.8935 58.3347 24.2396 58.0746 23.6628C57.8145 23.086 57.3454 22.6293 56.7619 22.3847C56.1783 22.1401 55.5238 22.1259 54.9302 22.3449C54.3366 22.5639 53.8481 22.9998 53.5632 23.5648C53.3842 23.2728 53.1973 22.9868 52.9933 22.7098C51.6507 20.9453 49.9032 19.5298 47.8986 18.5826C45.8939 17.6355 43.6908 17.1845 41.4752 17.2678C31.7162 17.2678 21.8943 24.6878 19.1153 34.1588L15.3402 47.0288C13.9162 51.8818 14.5903 56.6558 17.1873 60.1288C18.5115 61.8239 20.2197 63.1799 22.171 64.0851C24.1224 64.9902 26.2609 65.4186 28.4103 65.3348C33.7766 65.1807 38.9235 63.1709 42.9743 59.6478C43.1548 60.5399 43.5122 61.3869 44.0253 62.1388C45.4913 64.2598 48.0253 65.3388 51.5553 65.3388C57.0283 65.3388 62.6463 61.1278 64.4253 55.7238C67.0948 49.5882 68.9765 43.1392 70.0253 36.5308C72.1463 22.2688 68.4962 11.8838 59.4752 6.49676ZM28.4122 60.3158C27.0432 60.3891 25.6762 60.1374 24.4231 59.5812C23.17 59.025 22.0664 58.1802 21.2023 57.1158C19.5373 54.8908 19.1642 51.8068 20.1532 48.4358L23.9303 35.5668C26.0783 28.2388 33.9502 22.2778 41.4762 22.2778C42.9036 22.2053 44.3275 22.4762 45.6286 23.0678C46.9296 23.6594 48.0697 24.5544 48.9533 25.6778C49.7482 26.8664 50.2676 28.2176 50.4735 29.6327C50.6794 31.0477 50.5665 32.4909 50.1432 33.8568L45.7433 47.2568C43.3603 54.3618 35.4963 60.3158 28.4122 60.3158Z" fill="#F6F6FB" />
                </svg>
            </div>
            <div className='earth-img'>
                <img src={earthImg} alt="image" />
            </div>
            <Container className='pb-5 pt-5 pt-lg-0'>
                <div className="text-center">
                    <h2 className='heading'>Post-Automation</h2>
                    <p className='ff-inter fw-normal fs-md text-dark mt-4'><span className='fw-bold'>End-to-end automation</span> on the Yardi platform</p>
                </div>
                <Row className='justify-content-center mt-lg-5'>
                    <Col sm={6} lg={4} className='pt-5 pt-lg-0 mt-lg-0'>
                        <div className='position-relative h-100 px-4'>
                            <img className='w-25 z-index-3' src={boxImage1} alt="image" />
                            <div className='ps-4 pt-4'>
                                <img src={imageIcon1} alt="icons" />
                                <p className='fs-sm fw-normal ff-inter'>System picks up invoices <span className='text-orange'>automatically</span></p>
                            </div>
                            <img className='light-blue-img' src={linearImg} alt="image" />
                            <div className="right-arrow-3rd">
                                <img src={rightArrow3} alt="image" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} className='mt-5 mt-sm-0 pt-5 pt-lg-0 mt-lg-0'>
                        <div className='position-relative h-100 px-4'>
                            <img className='w-25 z-index-3' src={boxImage2} alt="image" />
                            <div className='ps-4 pt-4'>
                                <img src={imageIcon2} alt="icons" />
                                <p className='fs-sm fw-normal ff-inter'>Validating businessrules,
                                    <span className='text-orange'>coding</span>, and <span className='text-orange'>handling exceptions</span></p>
                            </div>
                            <img className='light-blue-img' src={linearImg} alt="image" />
                            <div className="right-arrow-3rd">
                                <img src={rightArrow3} alt="image" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} className='mt-5 pt-5 pt-lg-0 mt-lg-0'>
                        <div className='position-relative h-100 px-4 mt-sm-5 mt-lg-0'>
                            <img className='w-25 z-index-3' src={boxImage3} alt="image" />
                            <div className='ps-4 pt-4'>
                                <img src={imageIcon3} alt="icons" />
                                <p className='fs-sm fw-normal ff-inter'><span className='text-orange'>Invoice distributionby</span> gathering contact details</p>
                            </div>
                            <img className='light-blue-img' src={linearImg} alt="image" />
                        </div>
                    </Col>
                    <Col sm={6} lg={4} className='mt-5 pt-sm-5'>
                        <div className='position-relative h-100 px-4 mt-5'>
                            <img className='w-25 z-index-3' src={boxImage4} alt="image" />
                            <div className='ps-4 pt-4'>
                                <img src={imageIcon4} alt="icons" />
                                <p className='fs-sm fw-normal ff-inter'>Validating businessrules,
                                    <span className='text-orange'>coding</span>, and <span className='text-orange'>handling exceptions</span></p>
                            </div>
                            <img className='light-blue-img' src={linearImg} alt="image" />
                            <div className="right-arrow-3rd">
                                <img src={rightArrow3} alt="image" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} className='mt-5 pt-5'>
                        <div className='position-relative h-100 px-4 mt-5'>
                            <img className='w-25 z-index-3' src={boxImage5} alt="image" />
                            <div className='ps-4 pt-4'>
                                <img src={imageIcon5} alt="icons" />
                                <p className='fs-sm fw-normal ff-inter'><span className='text-orange'>Invoice distributionby</span> gathering contact details</p>
                            </div>
                            <img className='light-blue-img' src={linearImg} alt="image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PostAutomation