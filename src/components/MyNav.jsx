import React from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/img/svg/Logo.svg'

const MyNav = () => {
    return (
        <>
            <nav>
                <Container>
                    <div className="d-flex justify-content-between py-4">
                        <a href="#"><img className='logo-width' src={pageLogo} alt="logo" /></a>
                        <ul className='z-index-3 d-flex align-items-center p-0 m-0 gap-2 gap-sm-5'>
                            <li><a href="#" className='nav_links'>Home</a></li>
                            <li><a href="#" className='nav_links'>About us</a></li>
                            <li><a href="#" className='nav_links'>Services</a></li>
                            <li><a href="#" className='nav_links'>Premium</a></li>
                        </ul>
                    </div>
                    <div className='nav-earth-img'>
                        <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.07" d="M93.3466 47.8519C93.499 39.4313 91.3383 31.1304 87.0997 23.8528C87.0265 23.7067 86.9412 23.5671 86.8446 23.4353C82.8182 16.6467 77.1214 11.0015 70.2963 7.03703C63.4712 3.07261 55.7451 0.920916 47.8533 0.786756C39.9615 0.652596 32.1667 2.54044 25.2108 6.27058C18.255 10.0007 12.3695 15.449 8.11467 22.0969C8.00855 22.2324 7.9147 22.3771 7.83423 22.5293C3.4176 29.573 0.98476 37.6785 0.79258 45.9901C0.6004 54.3018 2.65601 62.5111 6.74237 69.7514C6.73267 69.8512 6.71015 69.9409 6.70845 70.0409C6.69922 70.635 6.87628 71.2171 7.21476 71.7054C7.55325 72.1938 8.03614 72.5639 8.5957 72.7637C12.7432 78.9874 18.3388 84.1119 24.9023 87.6975C31.4658 91.2831 38.8013 93.2226 46.2793 93.3498C53.7572 93.4769 61.1544 91.7878 67.836 88.4274C74.5176 85.067 80.2841 80.1356 84.6407 74.0565C85.2062 73.8751 85.7009 73.5214 86.0555 73.045C86.4101 72.5685 86.6069 71.9932 86.6184 71.3993C86.6201 71.2993 86.6017 71.206 86.5963 71.1119C90.8835 64.1006 93.2144 56.069 93.3466 47.8519ZM6.56398 49.2354L19.485 49.4551C19.5643 55.529 20.4004 61.5695 21.9741 67.4366L11.8991 67.2653C8.72419 61.76 6.89606 55.5819 6.56398 49.2354V49.2354ZM11.9708 26.7428L22.3598 26.9194C20.7882 32.4004 19.8564 38.0448 19.5831 43.7401L6.66114 43.5204C7.17309 37.6051 8.98586 31.876 11.9698 26.7428L11.9708 26.7428ZM87.5691 44.8958L74.6491 44.6762C74.569 38.975 73.8297 33.3022 72.4458 27.7709L82.8338 27.9475C85.6422 33.1784 87.2589 38.9658 87.5682 44.8948L87.5691 44.8958ZM68.9221 44.5788L49.9732 44.2567L50.2598 27.3937L66.4138 27.6683C67.9742 33.1734 68.8169 38.8569 68.9212 44.5778L68.9221 44.5788ZM50.358 21.6757L50.6089 6.92073C56.1607 8.43552 61.0524 14.0113 64.385 21.9132L50.358 21.6757ZM44.8929 6.82457L44.642 21.5786L30.611 21.34C34.2134 13.555 39.2917 8.14975 44.8919 6.82354L44.8929 6.82457ZM44.5448 27.2966L44.2582 44.1596L25.3091 43.8374C25.6096 38.1228 26.6471 32.4709 28.3958 27.022L44.5448 27.2966ZM25.213 49.5524L44.16 49.8745L43.8551 67.8085L28.0431 67.5397C26.2717 61.7038 25.3189 55.6503 25.212 49.5524L25.213 49.5524ZM43.759 73.5246L43.5264 87.2066C38.2324 85.7622 33.5354 80.6229 30.225 73.2945L43.759 73.5246ZM49.2423 87.3057L49.475 73.6217L63.0079 73.8518C59.4464 81.0623 54.5814 86.0401 49.2413 87.3057L49.2423 87.3057ZM49.5721 67.9057L49.877 49.9717L68.825 50.2938C68.5108 56.3846 67.3528 62.4022 65.3841 68.1745L49.5721 67.9057ZM74.552 50.3912L87.472 50.6108C86.9254 56.9425 84.8886 63.055 81.5281 68.449L71.4531 68.2777C73.2244 62.4673 74.265 56.4589 74.551 50.3912L74.552 50.3912ZM79.0661 22.1598L70.6661 22.017C69.2017 17.8851 67.1368 13.9915 64.5377 10.4615C70.2188 13.1882 75.1911 17.1936 79.065 22.1638L79.0661 22.1598ZM30.8487 9.88876C28.1312 13.3285 25.9351 17.1496 24.3311 21.2293L15.9311 21.0865C19.9725 16.2538 25.078 12.4225 30.8476 9.89275L30.8487 9.88876ZM15.951 73.0478L23.875 73.1825C25.2947 76.9206 27.2205 80.4462 29.5986 83.6608C24.3423 81.142 19.6879 77.5241 15.9499 73.0518L15.951 73.0478ZM63.2866 84.2335C65.7725 81.1016 67.817 77.6435 69.363 73.9558L77.287 74.0905C73.3996 78.4356 68.6249 81.8958 63.2855 84.2375L63.2866 84.2335Z" fill="#242993" />
                        </svg>
                    </div>
                    <div className='box-nav-img'>
                        <svg width="79" height="46" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.4 45.491L0 22.745L39.4 0L78.7941 22.746L39.4 45.491ZM2.151 22.745L39.4 44.251L76.646 22.751L39.399 1.245L2.151 22.745Z" fill="#EDEEF7" />
                        </svg>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default MyNav