import React from 'react'
import Header from '../Header/Header'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import Footer from '../Footer/Footer';
import { ButtonGroup } from '@mui/material';

function Home() {
  return (
    <>
      <Header/>
      <div className='home mt-5'>
      <Carousel>
      <Carousel.Item>
        <img src="https://www.kotak.com/content/dam/Kotak/product_card_images/how-credit-cards-enhance-your-shopping-experience.jpg" alt="no image" />
        <Carousel.Caption>
          <Row>
            <Col md={6} className='p-5'>
                <p className='fw-5 fs-5 mb-5'>SUMMER 2020</p>
                <h1 className='mb-5'>NEW COLLECTION</h1>
                <p className='mb-4'>We know how large object will act, <br />
                but things on a small scale</p>
                <button className='btn btn-success mb-5'>SHOP NOW</button>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png" alt="no image" />
        <Carousel.Caption>
        <Row>
            <Col md={6} className='p-5'>
                <p className='fw-5 fs-5 mb-5'>SUMMER 2020</p>
                <h1 className='mb-5'>NEW COLLECTION</h1>
                <p className='mb-4'>We know how large object will act, <br />
                but things on a small scale</p>
                <button className='btn btn-success mb-5'>SHOP NOW</button>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.kotak.com/content/dam/Kotak/article-images/shopping-for-new-year-why-use-your-credit-card-d.jpg" alt="no image" />
        <Carousel.Caption>
        <Row>
            <Col md={6} className='p-5'>
                <p className='fw-5 fs-5 mb-5'>SUMMER 2020</p>
                <h1 className='mb-5'>NEW COLLECTION</h1>
                <p className='mb-4'>We know how large object will act, <br />
                but things on a small scale</p>
                <button className='btn btn-success mb-5'>SHOP NOW</button>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>

      <div className='div2 text-center mt-5'>
            <Container>
                <h1>EDITOR'S PICK</h1>
                <p>Problems trying to solve the conflict between</p>
                <Row>
                    <Col md={4}>
                        <img className='mt-2' src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?cs=srgb&dl=pexels-harsh-kushwaha-1689731.jpg&fm=jpg" alt="no image" />
                        
                    </Col>
                    <Col md={4}>
                        <img className='mt-2' src="https://5.imimg.com/data5/ANDROID/Default/2021/7/UX/AW/BK/39958304/132230746-425358982178250-7374844770133219684-n-jpg-500x500.jpg" alt="no image" />
                    </Col>
                    <Col md={4} className='image'>
                        <img className='mb-3 mt-2' src="https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=" alt="no image" />

                        <img  src="https://www.stylecraze.com/wp-content/uploads/2018/03/Top-10-Instagram-Models-You-Need-To-Follow-267x300.jpg" alt="no image" />
                    </Col>
                </Row>
            </Container>
      </div>

      <div className='div3 text-center mt-5'>
        <h6>Featured Product's</h6>
        <h1>BESTSELLER PRODUCTS</h1>
        <p>Problems trying to solve the conflict between</p>
        <Container>
            <Row>
                <Col md={3}>
                    <img className='mb-4 mt-4' src="https://t3.ftcdn.net/jpg/06/46/00/00/360_F_646000029_JTtTlIY4MgOhl6U36hjDFsRjzMkRw9d1.jpg" alt="no image" />
                    <h5>Graphic Design</h5>
                    <p>English Department</p>
                    <p>$16.87 <span className='text-success'>$16.45</span></p>
                   <button className='btn1'></button>
                   <button className='btn2 ms-1'></button>
                   <button className='btn3 ms-1'></button>
                   <button className='btn4 ms-1'></button>

                </Col>
                <Col md={3}>
                <img className='mb-4 mt-4' src="https://imagescdn.planetfashion.in/img/app/product/8/817204-9766171.jpg?auto=format&w=494.40000000000003" alt="no image" />
                    <h5>Graphic Design</h5>
                    <p>English Department</p>
                    <p>$16.87 <span className='text-success'>$16.45</span></p>
                    <button className='btn1'></button>
                   <button className='btn2 ms-1'></button>
                   <button className='btn3 ms-1'></button>
                   <button className='btn4 ms-1'></button>
                </Col>
                <Col md={3}>
                <img className='mb-4 mt-4' src="https://assets.ajio.com/medias/sys_master/root/20210615/DnnR/60c8c1beaeb269a9e3e958b5/-288Wx360H-460899526-pink-MODEL.jpg" alt="no image" />
                    <h5>Graphic Design</h5>
                    <p>English Department</p>
                    <p>$16.87 <span className='text-success'>$16.45</span></p>
                    <button className='btn1'></button>
                   <button className='btn2 ms-1'></button>
                   <button className='btn3 ms-1'></button>
                   <button className='btn4 ms-1'></button>
                </Col>
                <Col md={3}>
                <img className='mb-4 mt-4' src="https://assets.ajio.com/medias/sys_master/root/20220601/EFRw/62968219f997dd03e252cc05/-473Wx593H-464414915-black-MODEL.jpg" alt="no image" />
                    <h5>Graphic Design</h5>
                    <p>English Department</p>
                    <p>$16.87 <span className='text-success'>$16.45</span></p>
                    <button className='btn1'></button>
                   <button className='btn2 ms-1'></button>
                   <button className='btn3 ms-1'></button>
                   <button className='btn4 ms-1'></button>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={3}>
                    <img className='mb-4 mt-' src="https://imagescdn.planetfashion.in/img/app/product/8/806982-9588630.jpg?auto=format&w=494.40000000000003" alt="no image" />
                    <h5>Graphic Design</h5>
                    <p>English Department</p>
                    <p>$16.87 <span className='text-success'>$16.45</span></p>
                    <button className='btn1'></button>
                   <button className='btn2 ms-1'></button>
                   <button className='btn3 ms-1'></button>
                   <button className='btn4 ms-1'></button>
                </Col>
                <Col md={3}>
                <img className='mb-4 mt-4' src="https://www.fashionnova.com/cdn/shop/products/09-02-21Studio2_RM_KP_11-10-08_17_FD40100_Black_1171_EH_468x.jpg?v=1630688319" alt="no image" />
                    <h5>Graphic Design</h5>
                    <p>English Department</p>
                    <p>$16.87 <span className='text-success'>$16.45</span></p>
                    <button className='btn1'></button>
                   <button className='btn2 ms-1'></button>
                   <button className='btn3 ms-1'></button>
                   <button className='btn4 ms-1'></button>
                </Col>
                <Col md={3}>
                <img className='mb-4 mt-4' src="https://www.fashionnova.com/cdn/shop/products/12-02-21Studio2_SN_TB_11-35-50_29_1694MD_Black_1509_MH.jpg?v=1638810504" alt="no image" />
                    <h5>Graphic Design</h5>
                    <p>English Department</p>
                    <p>$16.87 <span className='text-success'>$16.45</span></p>
                    <button className='btn1'></button>
                   <button className='btn2 ms-1'></button>
                   <button className='btn3 ms-1'></button>
                   <button className='btn4 ms-1'></button>
                </Col>
                <Col md={3}>
                <img className='mb-4 mt-4' src="https://media.boohoo.com/i/boohoo/fzz47724_black_xl?$product_image_main_mobile$&fmt=webp" alt="no image" />
                    <h5>Graphic Design</h5>
                    <p>English Department</p>
                    <p>$16.87 <span className='text-success'>$16.45</span></p>
                    <button className='btn1'></button>
                   <button className='btn2 ms-1'></button>
                   <button className='btn3 ms-1'></button>
                   <button className='btn4 ms-1'></button>
                </Col>
            </Row>
        </Container>
      </div>

      <div className='home mt-5'>
      <Carousel>
      <Carousel.Item>
        <img style={{width:'100%',height:'80vh'}} src="https://st4.depositphotos.com/13193658/30137/i/450/depositphotos_301375510-stock-illustration-young-woman-holding-credit-card.jpg" alt="no image" />
        <Carousel.Caption>
          <Row>
            <Col md={6} className='p-5'>
            <p className='fw-5 fs-5 mb-5'>SUMMER 2020</p>
                <h1 className='mb-5'>Vitta Classic <br /> Products</h1>
                <p className='mb-4'>We know how large object will act, <br />
                but things on a small scale</p>
               <div className='d-flex'>
                    <h1 className='ms-5 me-5 mb-5'>$6.45</h1>
                    <button className='btn btn-success mb-5'>Add to cart</button>
               </div>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>

      <div>
        <Container>
            <Row>
                <Col md={6}>
                    <img style={{width:'100%'}} src="https://media.istockphoto.com/id/489803256/photo/below-view-of-young-cheerful-family-in-shopping.jpg?s=612x612&w=0&k=20&c=KcmaBiURs_ChPFCdvNKhmTD5AVEiUxM4MmANitqioz4=" alt="no image" />
                </Col>
                <Col md={6} className='mt-5 '>
                    <h4 className='mt-5'>SUMMER 2020</h4>
                    <h3 className='mt-5'>Part of Neural Universe</h3>
                    <p className='mt-4'>We know how large object will act, <br />
                but things on a small scale</p>
                <Button variant="contained" className='btn btn-success'>BUY NOW</Button>
                <Button className='ms-3' variant="outlined">READ MORE</Button>
                </Col>
            </Row>
        </Container>
      </div>

      <div className='mt-5'>
        <h4 className='text-info text-center'>Practice Advice</h4>
        <h1 className='text-center'>Features Posts</h1>
        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Container>
            <Row className='images mt-5 mb-5'>
                <Col md={4} className='Card shadow'>
                    <img src="https://img.freepik.com/premium-photo/empty-road-floor-surface-with-modern-city_1112-4175.jpg" alt="no image" />
                    <div className='d-flex ms-2 mt-4'>
                        <p className='text-info'>Google</p>
                        <p className='ms-2'>Trending</p>
                        <p className='ms-2'>New</p>
                    </div>
                    <h4  className='text-center'>We provide better experience</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo natus ad repellendus! Enim ea repellend</p>
                    <div className='d-flex'>
                        <p className='ms-4'><i class="fa-solid fa-clock"></i>  22 April 2023</p>
                       <p className='ms-5'> <i class="fa-solid fa-image"></i> 10 comments</p>
                    </div>
                    <p className='me-5'>Learn More <i class="fa-solid fa-greater-than ms-3 text-success"></i></p>
                </Col>
                <Col md={4} className='Card shadow'>
                <img src="https://st2.depositphotos.com/2018581/5789/i/950/depositphotos_57896199-stock-photo-many-umbrellas-hang-on-trees.jpg" alt="no image" />
                    <div className='d-flex ms-2 mt-4'>
                        <p className='text-info'>Google</p>
                        <p className='ms-3'>Trending</p>
                        <p className='ms-3'>New</p>
                    </div>
                    <h4  className='text-center'>We provide better experience</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo natus ad repellendus! Enim ea repellend</p>
                    <div className='d-flex'>
                        <p className='ms-4'><i class="fa-solid fa-clock"></i>  22 April 2023</p>
                       <p className='ms-5'> <i class="fa-solid fa-image"></i> 10 comments</p>
                    </div>
                    <p className='me-5'>Learn More <i class="fa-solid fa-greater-than ms-3 text-success"></i></p>
                </Col>
                <Col md={4} className='Card shadow'>
                <img src="https://www.umbrellaworkshop.com/wp-content/uploads/2020/01/5-unusual-ways-to-use-an-umbrella.jpg" alt="no image" />
                    <div className='d-flex mt-4'>
                        <p className='text-info'>Google</p>
                        <p className='ms-3'>Trending</p>
                        <p className='ms-3'>New</p>
                    </div>
                    <h4  className='text-center'>We provide better experience</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo natus ad repellendus! Enim ea repellend</p>
                    <div className='d-flex'>
                        <p className='ms-4'><i class="fa-solid fa-clock"></i>  22 April 2023</p>
                       <p className='ms-5'> <i class="fa-solid fa-image"></i> 10 comments</p>
                    </div>
                    <p className='me-5'>Learn More <i class="fa-solid fa-greater-than ms-3 text-success"></i></p>
                </Col>
            </Row>
        </Container>
      </div>

      <div className='d-flex'>
            <h3 className='me-auto ms-5'>Bandege</h3>
            <i class="fa-brands fa-facebook fa-2x me-3 text-info"></i>
            <i class="fa-brands fa-instagram fa-2x me-3 text-info"></i>
            <i class="fa-brands fa-twitter fa-2x me-5 text-info"></i>
      </div>
      <Footer/>
    </>
  )
}

export default Home
