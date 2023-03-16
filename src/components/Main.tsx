import React from 'react'
import Card from './Card'
import ImgStar from '../assets/icon-star.svg'
import ImgColton from '../assets/image-colton.jpg'
import ImgIrene from '../assets/image-irene.jpg'
import ImgAnne from '../assets/image-anne.jpg'
import './Main.css'

function Main() {
  return (
    <Card>
        <header>
            <div className="header">
                <div className="top-left">
                    <h1>10,000+ of our users love our products.</h1>
                    <p className='top-left-content'>We only provide great products combined with excellent customer service.
                    See what our satisfied customers are saying about our services.</p>
                </div>

                <div className="top-right">
                    <div className="rate">
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <p>Rated 5 Stars in Reviews</p>
                    </div>
                    <div className="rate">
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <p>Rated 5 Stars in Report Guru</p>
                    </div>
                    <div className="rate">
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <img src={ImgStar} alt="" />
                        <p>Rated 5 Stars in BestTech</p>
                    </div>
                </div>
            </div>
        </header>
        <footer>
            <div className="footer">
                <div className="comment">
                    <div className="comment-topic">
                        <img src={ImgColton} alt="" />
                        <div className="comment-name">
                            <h3>Colton Smith</h3>
                            <h3>Verified Buyer</h3>
                        </div>
                    </div>
                        <p className='comment-content'>"We needed the same printed design as the one we had ordered a week prior.
                        Not only did they find the original order, but we also received it in time.
                        Excellent!"</p>
                </div>

                <div className="comment">
                    <div className="comment-topic">
                        <img src={ImgIrene} alt="" />
                        <div className="comment-name">
                            <h3>Irene Roberts</h3>
                            <h3>Verified Buyer</h3>
                        </div>
                    </div>
                        <p className='comment-content'>"Customer service is always excellent and very quick turn around. Completely
                        delighted with the simplicity of the purchase and the speed of delivery."</p>
                </div>

                <div className="comment">
                    <div className="comment-topic">
                        <img src={ImgAnne} alt="" />
                        <div className="comment-name">
                            <h3>Anne Wallace</h3>
                            <h3>Verified Buyer</h3>
                        </div>
                    </div>
                        <p className='comment-content'>"Put an order with this company and can only praise them for the very high
                        standard. Will definitely use them again and recommend them to everyone!"</p>
                </div>
            </div>
        </footer>
    </Card>
  )
}

export default Main