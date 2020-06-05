import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd-mobile';
import '../../../styles/order/OrderDetail.scss'
import Zmage from 'react-zmage'

function OrderDetail(props) {
    // 接收到的userid
    const [PropsUserId, setPropsUserId] = useState(props.location.userid)
    const [data, setData] = useState(['1', '2', '3'])
    // const [imgHeight, setImgHeight] = useState(176)
    const [slideIndex, setSlideIndex] = useState('0')
    const [dataService, setDataService] = useState([
        {
            serviceName: '李逍遥',
            serviceImg: '/demo/order/sendLove-demo1.jpeg'
        },
        {
            serviceName: '小十里',
            serviceImg: '/demo/order/sendLove-demo2.jpeg'
        },
        {
            serviceName: '孙策',
            serviceImg: '/demo/order/sendLove-demo3.jpeg'
        },
        {
            serviceName: '周鱼',
            serviceImg: '/demo/order/sendLove-demo4.jpeg'
        },
        {
            serviceName: '李逍遥',
            serviceImg: '/demo/order/sendLove-demo1.jpeg'
        },
    ])

    const [dataEvaluate, setDataEvaluate] = useState([
        {
            evaluateImg: 'http://pic1.win4000.com/mobile/2020-05-20/5ec4d1a5085bf_250_350.jpg'
        },
        {
            evaluateImg: 'http://pic1.win4000.com/mobile/2020-05-25/5ecb313205428_250_350.jpg'
        },
        {
            evaluateImg: 'http://pic1.win4000.com/mobile/2020-05-07/5eb3a6d11b079_250_350.jpg'
        },
        {
            evaluateImg: 'http://pic1.win4000.com/mobile/2020-04-26/5ea528fda2e16_250_350.jpg'
        },
        {
            evaluateImg: 'http://pic1.win4000.com/mobile/2020-04-10/5e9035df63e03_250_350.jpg'
        },
    ])
    const [imageList, setImageList] = useState([])

    const [serviceDetail, setServiceDetail] = useState([
        {
            serviceTime: '2019-02-01 至 2019-02-01',
            serviceInfectTime: '2019-02-16 13:50:02 至 2019-02-16 13:50:02'
        },
        {
            serviceTime: '2019-02-02 至 2019-02-02',
            serviceInfectTime: '2019-02-16 13:50:02 至 2019-02-16 13:50:02'
        },
        {
            serviceTime: '2019-02-03 至 2019-02-03',
            serviceInfectTime: '2019-02-16 13:50:02 至 2019-02-16 13:50:02'
        },
        {
            serviceTime: '2019-02-04 至 2019-02-04',
            serviceInfectTime: '2019-02-16 13:50:02 至 2019-02-16 13:50:02'
        },
        {
            serviceTime: '2019-02-05 至 2019-02-05',
            serviceInfectTime: '2019-02-16 13:50:02 至 2019-02-16 13:50:02'
        },
    ])

    useEffect(() => {
        const testsetImageList = (dataEvaluate.map((item) => {
            return { src: item.evaluateImg }
        }))
        console.log(testsetImageList)
        setImageList(testsetImageList)

        setTimeout(() => {
            setData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
        }, 100);
    }, [])

    function afterSlide(index) {
        setSlideIndex(index)
    }


    return (
        <div className='base'>
            <Carousel className="content"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.5}
                autoplay={false}
                dots={false}
                infinite={false}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => afterSlide(index)}
            >
                {dataService.map((val, index) => (
                    <a className='scroll_prod'
                        key={val}
                        style={{
                            display: 'block',
                            position: 'relative',
                            // top: slideIndex === index ? -10 : 0,
                            // height: imgHeight,
                            // boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={process.env.PUBLIC_URL + val.serviceImg}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                // setImgHeight('auto')
                            }}
                        />
                        <div className='slide-row'>{val.serviceName}</div>
                    </a>
                ))}
            </Carousel>
            <div className='service-detail'>
                <div className='three-peace'></div>
                <div className='service-detail-index'>
                    <div className='detail-index-1'>订单详情</div>
                </div>
            </div>
            <div className='order-detail'>
                <div className='order-detail-tit'>
                    感情历程
                    <div className="order-detail-status">相遇</div>
                </div>
                <div className='order-detail-content'>
                    <ul>
                        <li>仙灵仙岛藏仙踪，</li>
                        <li>翩翩少年把仙求。</li>
                        <li>仙宫仙女不相识，</li>
                        <li>错把牛郎当情郎。</li>
                    </ul>
                </div>
            </div>
            <div className='order-evaluate'>
                <div className='order-evaluate-tit'>
                    爱情结晶
                </div>
                <div className='order-evaluate-content'>
                    <p>爱情的小船很稳，说飘就飘</p>
                    <ul style={{ width: `${30 * dataEvaluate.length}vw` }}>
                        {
                            dataEvaluate.map((item, index) => {
                                return (
                                    <li
                                        key={index + item}
                                    >
                                        <Zmage
                                            preset={"mobile"}
                                            hotKey={{
                                                // 关闭（ESC）
                                                close: true,
                                                // 缩放（空格）
                                                zoom: true,
                                                // 翻页（左右）
                                                flip: true,
                                            }}
                                            controller={{
                                                // 关闭按钮
                                                close: true,
                                                // 旋转按钮
                                                rotate: true,
                                                // 翻页按钮
                                                flip: true,
                                                // 多页指示
                                                pagination: true,
                                            }}
                                            src={item.evaluateImg}
                                            defaultPage={index}
                                            key={item.src}
                                            set={imageList}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default OrderDetail