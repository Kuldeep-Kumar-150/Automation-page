import React from 'react'
import lapLopImage from '../assets/img/png/laptop-image.png'
import dottedImage from '../assets/img/png/dotted-img.png'
import bgImage from '../assets/img/png/bg-image.png'
import { Col, Container, Row } from 'react-bootstrap'

const MyHeader = () => {
    return (
        <>
            <header className='py-5 d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                <Container>
                    <Row className='flex-column-reverse flex-lg-row'>
                        <Col lg={6} className="z-index-3">
                            <p className='text-darkblue ff-inter fw-light fs-45 text-center text-lg-start mt-4 mb-1 mt-lg-0'>Increased Efficiency</p>
                            <h1 className='text-darkblue ff-inter fw-bold fs-88 text-center text-lg-start'>Through Automation</h1>
                            <p className='ff-inter fw-normal fs-md text-dark text-center text-lg-start'>We have <span className='fw-bold'>automated invoice distribution</span> from as our automation initiatives.</p>
                        </Col>
                        <Col className='z-index-3' lg={6}>
                                <img className='w-100' src={lapLopImage} alt="laptop-image" />
                        </Col>
                    </Row>
                    <svg className='athe-rate-image' width="44" height="82" viewBox="0 0 44 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.14" d="M59.671 6.43207C49.945 0.624066 39.891 -0.936922 30.598 1.91208C20.079 5.13708 11.3251 13.6731 5.27907 26.5981C2.29578 33.1847 0.738339 40.3274 0.709001 47.5581C0.702001 55.9881 2.91603 63.4201 7.10903 69.0501C14.109 78.4501 25.145 81.1201 35.431 81.1201C38.8502 81.1061 42.2638 80.8407 45.6441 80.3261C46.3018 80.2282 46.8937 79.8731 47.2896 79.3388C47.6855 78.8045 47.8529 78.1348 47.755 77.4771C47.6572 76.8193 47.302 76.2274 46.7677 75.8315C46.2334 75.4357 45.5638 75.2682 44.906 75.3661C29.099 77.7111 17.42 74.4911 11.131 66.0521C3.561 55.8931 4.74201 39.5821 9.82301 28.7221C15.251 17.1151 22.944 9.50308 32.068 6.70508C39.968 4.28308 48.626 5.67707 57.099 10.7341C74.689 21.2401 60.154 53.3701 60.005 53.6941C59.9612 53.7918 59.9232 53.892 59.891 53.9941C58.824 57.3871 55.099 60.2521 51.754 60.2521C50.027 60.2521 48.82 59.8901 48.354 59.2311C47.9294 58.255 47.9086 57.1505 48.296 56.1591C48.309 56.1211 48.3231 56.0821 48.3351 56.0451L50.506 49.3501C50.613 49.0561 50.716 48.7581 50.806 48.4591L54.947 35.9461C55.047 35.6341 55.1321 35.3251 55.2121 35.0131L58.359 25.4281C58.5621 24.8288 58.5305 24.1749 58.2704 23.5981C58.0103 23.0213 57.5412 22.5646 56.9577 22.32C56.3741 22.0754 55.7196 22.0612 55.126 22.2802C54.5324 22.4992 54.0439 22.9351 53.759 23.5001C53.58 23.2081 53.3931 22.9221 53.1891 22.6451C51.8465 20.8806 50.099 19.4651 48.0944 18.5179C46.0897 17.5708 43.8866 17.1198 41.671 17.2031C31.912 17.2031 22.0901 24.6231 19.3111 34.0941L15.536 46.9641C14.112 51.8171 14.7861 56.5911 17.3831 60.0641C18.7073 61.7592 20.4155 63.1152 22.3668 64.0204C24.3182 64.9255 26.4567 65.3539 28.6061 65.2701C33.9724 65.116 39.1193 63.1062 43.1701 59.5831C43.3506 60.4752 43.708 61.3222 44.2211 62.0741C45.6871 64.1951 48.2211 65.2741 51.7511 65.2741C57.2241 65.2741 62.8421 61.0631 64.6211 55.6591C67.2907 49.5235 69.1723 43.0745 70.2211 36.4661C72.3421 22.2041 68.692 11.8191 59.671 6.43207ZM28.608 60.2511C27.239 60.3244 25.872 60.0727 24.6189 59.5165C23.3658 58.9603 22.2622 58.1155 21.3981 57.0511C19.7331 54.8261 19.36 51.7421 20.349 48.3711L24.1261 35.5021C26.2741 28.1741 34.146 22.2131 41.672 22.2131C43.0994 22.1406 44.5234 22.4115 45.8244 23.0031C47.1254 23.5947 48.2655 24.4897 49.1491 25.6131C49.944 26.8017 50.4634 28.1529 50.6693 29.568C50.8752 30.983 50.7623 32.4262 50.339 33.7921L45.9391 47.1921C43.5561 54.2971 35.692 60.2511 28.608 60.2511V60.2511Z" fill="#F49E39" />
                    </svg>
                    <span className='nav-earth-img2'>
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.14" d="M36.7121 18.2559C36.7155 14.9339 35.8076 11.6747 34.0871 8.83289C34.0586 8.77607 34.0252 8.72188 33.9872 8.6709C32.3538 6.02073 30.0693 3.8327 27.3512 2.31506C24.6331 0.797424 21.5717 0.000732422 18.4586 0.000732422C15.3455 0.000732422 12.2843 0.797424 9.56614 2.31506C6.84802 3.8327 4.56355 6.02073 2.93015 8.6709C2.88875 8.7243 2.85255 8.78159 2.82212 8.84192C1.12757 11.6493 0.222555 14.8621 0.20249 18.1412C0.182424 21.4203 1.04804 24.644 2.7081 27.4719C2.7081 27.5119 2.69712 27.5469 2.69712 27.5859C2.69729 27.8206 2.77081 28.0493 2.90745 28.2401C3.04408 28.4309 3.23696 28.5742 3.45908 28.6499C5.13657 31.0766 7.37784 33.0601 9.99045 34.4302C12.6031 35.8002 15.509 36.516 18.4591 36.516C21.4091 36.516 24.3152 35.8002 26.9278 34.4302C29.5404 33.0601 31.7816 31.0766 33.4591 28.6499C33.6814 28.5744 33.8745 28.4312 34.0113 28.2404C34.1482 28.0496 34.2219 27.8207 34.2221 27.5859C34.2221 27.5489 34.2142 27.5119 34.2112 27.4739C35.8531 24.6797 36.7166 21.4967 36.7121 18.2559ZM2.49717 19.3839H7.59714C7.66887 21.7791 8.03836 24.1559 8.69712 26.4598H4.72312C3.4336 24.3097 2.6709 21.8851 2.49717 19.3839ZM4.47812 10.4769H8.5781C7.99564 12.649 7.66618 14.8812 7.59617 17.1289H2.49619C2.65852 14.7926 3.33527 12.5211 4.47812 10.4769ZM34.4132 17.1289H29.3131C29.2436 14.8811 28.9141 12.6489 28.3312 10.4769H32.4311C33.5744 12.521 34.2516 14.7925 34.4142 17.1289H34.4132ZM27.0571 17.1289H19.5821V10.4769H25.9521C26.606 12.6373 26.9781 14.8732 27.0592 17.1289H27.0571ZM19.5821 8.22095V2.40088C21.7821 2.96188 23.7491 5.12595 25.1151 8.22095H19.5821ZM17.3271 2.40088V8.22095H11.7932C13.1592 5.12595 15.1291 2.96188 17.3281 2.40088H17.3271ZM17.3271 10.4769V17.1289H9.85215C9.93133 14.8735 10.301 12.6378 10.9521 10.4769H17.3271ZM9.85215 19.3839H17.3271V26.4598H11.0902C10.3529 24.1697 9.93651 21.7884 9.85312 19.3839H9.85215ZM17.3271 28.7139V34.1139C15.2271 33.5779 13.3441 31.5829 11.9881 28.7139H17.3271ZM19.5821 34.1139V28.7139H24.9211C23.5661 31.5799 21.6801 33.5748 19.5831 34.1108L19.5821 34.1139ZM19.5821 26.4629V19.3868H27.0571C26.9737 21.7913 26.5575 24.1727 25.8202 26.4629H19.5821ZM29.3161 19.3868H34.4161C34.2427 21.8879 33.4803 24.3126 32.1911 26.4629H28.2171C28.8761 24.158 29.2453 21.7801 29.3161 19.3839V19.3868ZM30.9071 8.22388H27.5952C26.9902 6.60482 26.1498 5.08376 25.1012 3.70984C27.359 4.74474 29.3463 6.28891 30.9071 8.22095V8.22388ZM11.8071 3.70984C10.7583 5.08367 9.91791 6.60475 9.31309 8.22388H6.0001C7.56157 6.28935 9.55037 4.74323 11.8102 3.70691L11.8071 3.70984ZM6.35508 28.7179H9.48118C10.0653 30.182 10.8479 31.559 11.8071 32.8099C9.71907 31.8499 7.86127 30.4531 6.35911 28.7139L6.35508 28.7179ZM25.0971 32.8099C26.056 31.5588 26.8386 30.1819 27.4231 28.7179H30.5492C29.0459 30.454 27.1883 31.8479 25.1012 32.8059L25.0971 32.8099Z" fill="#F49E39" />
                        </svg>
                    </span>
                    <span className='cross-img'>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6958 14.415C12.5338 14.4158 12.3731 14.3845 12.2231 14.3231C12.0731 14.2617 11.9368 14.1713 11.8218 14.057L0.469816 2.70298C0.247636 2.46835 0.125842 2.15622 0.130339 1.83311C0.134835 1.51 0.265271 1.20149 0.493895 0.973124C0.722518 0.744761 1.03126 0.614581 1.35437 0.610453C1.67748 0.606325 1.98943 0.728581 2.22381 0.951029L13.5758 12.298C13.7504 12.4711 13.8694 12.6922 13.9178 12.9332C13.9662 13.1742 13.9418 13.4242 13.8476 13.6512C13.7534 13.8783 13.5938 14.0722 13.389 14.2082C13.1843 14.3442 12.9436 14.4163 12.6978 14.415H12.6958Z" fill="#EDEEF6" />
                            <path d="M1.3438 14.4151C1.09807 14.4161 0.857589 14.344 0.652977 14.2079C0.448365 14.0718 0.288896 13.8779 0.194847 13.6509C0.100798 13.4239 0.0764367 13.1739 0.12487 12.933C0.173304 12.6921 0.292342 12.4711 0.46682 12.298L11.8198 0.951087C11.9342 0.833105 12.0709 0.738999 12.222 0.674354C12.3731 0.609708 12.5355 0.575774 12.6998 0.5745C12.8641 0.573226 13.027 0.604612 13.1791 0.666907C13.3312 0.729203 13.4693 0.82122 13.5855 0.937415C13.7017 1.05361 13.7936 1.19173 13.8559 1.34379C13.9182 1.49585 13.9496 1.65872 13.9484 1.82304C13.9471 1.98735 13.9131 2.14987 13.8485 2.30094C13.7839 2.45202 13.6898 2.58866 13.5718 2.70304L2.21981 14.0561C2.10458 14.1706 1.96791 14.2612 1.81759 14.3228C1.66727 14.3844 1.50625 14.4158 1.3438 14.4151Z" fill="#EDEEF6" />
                        </svg>
                    </span>
                    <span className='cross-img-2'>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6958 14.415C12.5338 14.4158 12.3731 14.3845 12.2231 14.3231C12.0731 14.2617 11.9368 14.1713 11.8218 14.057L0.469816 2.70298C0.247636 2.46835 0.125842 2.15622 0.130339 1.83311C0.134835 1.51 0.265271 1.20149 0.493895 0.973124C0.722518 0.744761 1.03126 0.614581 1.35437 0.610453C1.67748 0.606325 1.98943 0.728581 2.22381 0.951029L13.5758 12.298C13.7504 12.4711 13.8694 12.6922 13.9178 12.9332C13.9662 13.1742 13.9418 13.4242 13.8476 13.6512C13.7534 13.8783 13.5938 14.0722 13.389 14.2082C13.1843 14.3442 12.9436 14.4163 12.6978 14.415H12.6958Z" fill="#EDEEF6" />
                            <path d="M1.3438 14.4151C1.09807 14.4161 0.857589 14.344 0.652977 14.2079C0.448365 14.0718 0.288896 13.8779 0.194847 13.6509C0.100798 13.4239 0.0764367 13.1739 0.12487 12.933C0.173304 12.6921 0.292342 12.4711 0.46682 12.298L11.8198 0.951087C11.9342 0.833105 12.0709 0.738999 12.222 0.674354C12.3731 0.609708 12.5355 0.575774 12.6998 0.5745C12.8641 0.573226 13.027 0.604612 13.1791 0.666907C13.3312 0.729203 13.4693 0.82122 13.5855 0.937415C13.7017 1.05361 13.7936 1.19173 13.8559 1.34379C13.9182 1.49585 13.9496 1.65872 13.9484 1.82304C13.9471 1.98735 13.9131 2.14987 13.8485 2.30094C13.7839 2.45202 13.6898 2.58866 13.5718 2.70304L2.21981 14.0561C2.10458 14.1706 1.96791 14.2612 1.81759 14.3228C1.66727 14.3844 1.50625 14.4158 1.3438 14.4151Z" fill="#EDEEF6" />
                        </svg>
                    </span>
                    <img className='dotted-img' src={dottedImage} alt="dottedImage" />
                    <div className='bg-image'>
                        <img className='w-100' src={bgImage} alt="image" />
                    </div>
                </Container>
            </header>
        </>
    )
}

export default MyHeader