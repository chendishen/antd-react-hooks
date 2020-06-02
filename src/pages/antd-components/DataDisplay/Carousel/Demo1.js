import React, { useState, useEffect } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

function Carousel1() {
    const [data, setData] = useState(['1', '2', '3'])
    const [imgHeight, setImgHeight] = useState('176')

    useEffect(() => {
        setTimeout(() => {
            setData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
        }, 100);
    },[])

    return (
        <WingBlank>
            <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {
                    data.map((val) => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    setImgHeight('auto')
                                }}
                            />
                        </a>
                    ))
                }
            </Carousel>
        </WingBlank>
    );
}


export default Carousel1