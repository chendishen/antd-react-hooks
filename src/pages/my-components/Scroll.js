// better-scroll 滚动插件
import React, { useState, useEffect } from 'react';
import BScroll from 'better-scroll'
import '../../styles/my-components/Scroll.scss'

function OrderDetail() {


    const [Bscroll, setBscroll] = useState('')
    const [serviceInfo, setServiceInfo] = useState([
        {
            serviceImg: '/scroll/work-demo1.png',
            serviceName: '薛大娘',
        },
        {
            serviceImg: '/scroll/work-demo2.png',
            serviceName: '薛二娘',
        },
        {
            serviceImg: '/scroll/work-demo1.png',
            serviceName: '薛三娘',
        },
        {
            serviceImg: '/scroll/work-demo1.png',
            serviceName: '薛四娘',
        },
        {
            serviceImg: '/scroll/work-demo1.png',
            serviceName: '薛五娘',
        },
    ])

    useEffect(() => {
        const wrapper = document.querySelector('.wrapper')
        const scroll = new BScroll(wrapper, {
            scrollX: true,
            click: true,
            scrollY: false,
        })
        setBscroll(scroll)
    }, [])

    return (
        <>
            <div className="wrapper">
                <ul className="content" style={{ width: `${30 * serviceInfo.length}vw` }}>
                    {
                        serviceInfo.map((v, i) => {
                            return (
                                <li className="scroll_prod" key={i}>
                                    <img src={process.env.PUBLIC_URL + v.serviceImg} />
                                    <div>{v.serviceName}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )

}

export default OrderDetail