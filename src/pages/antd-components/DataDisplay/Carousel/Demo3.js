import React, { useState, useEffect } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '../../../../styles/antd-components/Carousel/demo3.scss'

function Carousel3() {
    const [data, setData] = useState(['1', '2', '3'])
    const [imgHeight, setImgHeight] = useState(176)
    const [slideIndex, setSlideIndex] = useState()

    useEffect(() => {
        setTimeout(() => {
            setData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
        }, 100);
    },[])

    return (
      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => setSlideIndex(index)}
        >
          {data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: slideIndex === index ? -10 : 0,
                height: imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
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
          ))}
        </Carousel>
      </WingBlank>
    );
  
}

export default Carousel3