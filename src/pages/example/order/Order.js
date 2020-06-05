import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, PullToRefresh, ListView, Button } from 'antd-mobile';
import '../../../styles/order/Order.scss'


function Order(props) {

  // 列表内容

  const ref = React.useRef();
  const NUM_ROWS = 20;
  let pageIndex = 0;
  const dataSourceInit = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  });

  const [dataSource, setDataSource] = useState(dataSourceInit)
  const [refreshing, setRefreshing] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [height, setHeight] = useState(document.documentElement.clientHeight)
  const [useBodyScroll, setUseBodyScroll] = useState(false)
  const [data, setData] = useState([
    {
      time: '2020-02-22 22:22:22',
      type: '初中',
      orderType: '相识',
      receiveLoveName: '赵灵儿',
      receiveLoveImg: '/demo/order/receiveLove-demo1.jpeg',
      sendLoveUserId: '0000000000',
      sendLoveName: '李逍遥',
      sendLoveImg: '/demo/order/sendLove-demo1.jpeg'
    },
    {
      time: '2020-02-22 22:22:22',
      type: '高中',
      orderType: '暧昧',
      receiveLoveName: '小桃花',
      receiveLoveImg: '/demo/order/receiveLove-demo2.jpeg',
      sendLoveUserId: '11111111111',
      sendLoveName: '小十里',
      sendLoveImg: '/demo/order/sendLove-demo2.jpeg'
    },
    {
      time: '2020-02-22 22:22:22',
      type: '大学',
      orderType: '相识',
      receiveLoveName: '公孙离',
      receiveLoveImg: '/demo/order/receiveLove-demo3.jpeg',
      sendLoveUserId: '22222222222',
      sendLoveName: '孙策',
      sendLoveImg: '/demo/order/sendLove-demo3.jpeg'
    },
  ])
  const [data2, setData2] = useState([
    {
      time: '2020-02-22 22:22:22',
      type: '初中',
      orderType: '相遇',
      receiveLoveName: '赵灵儿',
      receiveLoveImg: '/demo/order/receiveLove-demo1.jpeg',
      sendLoveUserId: '0000000000',
      sendLoveName: '李逍遥',
      sendLoveImg: '/demo/order/sendLove-demo1.jpeg'
    },
    {
      time: '2020-02-22 22:22:22',
      type: '高中',
      orderType: '相遇',
      receiveLoveName: '小桃花',
      receiveLoveImg: '/demo/order/receiveLove-demo2.jpeg',
      sendLoveUserId: '11111111111',
      sendLoveName: '小十里',
      sendLoveImg: '/demo/order/sendLove-demo2.jpeg'
    },
    {
      time: '2020-02-22 22:22:22',
      type: '大学',
      orderType: '相遇',
      receiveLoveName: '公孙离',
      receiveLoveImg: '/demo/order/receiveLove-demo3.jpeg',
      sendLoveUserId: '22222222222',
      sendLoveName: '孙策',
      sendLoveImg: '/demo/order/sendLove-demo3.jpeg'
    },
  ])
  const [rData, setRData] = useState('')

  function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  useEffect(() => {
    // const hei = height - ReactDOM.findDOMNode(ref.current).offsetTop;
    const hei =  height - 50
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setRData(genData())
      setDataSource(dataSource.cloneWithRows(genData()))
      setHeight(hei)
      setRefreshing(false)
      setIsLoading(false)
    }, 500);
  }, [])

  // useEffect(() => {
  //   if (useBodyScroll) {
  //     document.body.style.overflow = 'auto';
  //   } else {
  //     document.body.style.overflow = 'hidden';
  //   }
  // }, [useBodyScroll])

  const onRefresh = () => {
    setRefreshing(true)
    setIsLoading(true)
    // simulate initial Ajax
    setTimeout(() => {
      setRData(genData())
      setDataSource(dataSource.cloneWithRows(rData))
      setRefreshing(false)
      setIsLoading(false)
    }, 1500);
  };

  const onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    // if (isLoading && !hasMore) {
    //     return;
    // }
    console.log('reach end', event);
    setIsLoading(true)
    setTimeout(() => {
      let newRData = [...rData, ...genData(++pageIndex)]
      setRData(newRData)
      setDataSource(dataSource.cloneWithRows(newRData))
      setIsLoading(false)
    }, 1000);
  };

  function toDetail(e,userid){
    props.history.push({ pathname: "/OrderDetail", userid:  userid  });
  }

  // const separator = (sectionID, rowID) => (
  //   <div
  //     key={`${sectionID}-${rowID}`}
  //     style={{
  //       backgroundColor: '#E8EFFB',
  //       height: 10,
  //       borderTop: '1px solid #E8EFFB',
  //       borderBottom: '1px solid #E8EFFB',
  //     }}
  //   />
  // );

  // let index = data.length - 1;
  // const row = (rowData, sectionID, rowID) => {
  //   if (index < 0) {
  //     index = data.length - 1;
  //   }
  //   const obj = data[index--];
  //   return (
  //     <div key={rowID}
  //       style={{
  //         padding: '0 15px',
  //         backgroundColor: 'white',
  //       }}
  //     >
  //       <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
  //         {obj.title}
  //       </div>
  //       <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
  //         <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
  //         <div style={{ display: 'inline-block' }}>
  //           <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}-{rowData}</div>
  //           <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  let index = data.length - 1;
  const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = data.length - 1;
    }
    const obj = data[index--];
    return (
      <div key={rowID}
        className='order-row'
        onClick={()=>toDetail(rowID,obj.sendLoveUserId)}
      >
        <div className='row-left'>
          <div className='row-left-top'>
            <div className='type'>{obj.type}</div>
            <div className='time'>{obj.time}</div>
          </div>
          <div className='service-list'>
            <div className='worker-des'>
              <img src={process.env.PUBLIC_URL + obj.sendLoveImg} alt="" />
              <div className='row-right-receiveLoveName'>{obj.sendLoveName}</div>
            </div>
          </div>
        </div>
        <div className='row-right'>
          <div className='row-right-orderType'>{obj.orderType}</div>
          <img src={process.env.PUBLIC_URL + obj.receiveLoveImg} alt="" />
          <div className='row-right-receiveLoveName'>{obj.receiveLoveName}</div>
        </div>
      </div>
    );
  };
  
  let index2 = data.length - 1;
  const row2 = (rowData, sectionID, rowID) => {
    if (index2 < 0) {
      index2 = data2.length - 1;
    }
    const obj = data2[index2--];
    return (
      <div key={rowID}
        className='order-row'
      >
        <div className='row-left'>
          <div className='row-left-top'>
            <div className='type'>{obj.type}</div>
            <div className='time'>{obj.time}</div>
          </div>
          <div className='service-list'>
            <div className='worker-des'>
              <img src={process.env.PUBLIC_URL + obj.sendLoveImg} alt="" />
              <div className='row-right-receiveLoveName'>{obj.sendLoveName}</div>
            </div>
          </div>
        </div>
        <div className='row-right'>
          <div className='row-right-orderType'>{obj.orderType}</div>
          <img src={process.env.PUBLIC_URL + obj.receiveLoveImg} alt="" />
          <div className='row-right-receiveLoveName'>{obj.receiveLoveName}</div>
        </div>
      </div>
    );
  };


  // tab栏内容

  function changeTabs(tab, index) {
    if (index === 0) {
      document.getElementsByClassName('am-tabs-default-bar-underline')[0].style.left = '5%';
    }
    document.getElementsByClassName('am-tabs-default-bar-underline')[0].style.left = 20 * index + 5 + '%';
  }

  const tabs = [
    { title: '全部' },
    { title: '相遇' },
    { title: '相识' },
    { title: '暧昧' },
    { title: '恋爱' }
  ];

  return (
    <div>
      <div className='my-order-tab'>
        <Tabs onChange={(tab, index) => { changeTabs(tab, index); }} tabs={tabs} tabBarUnderlineStyle={{ borderBottomWidth: 0.7, borderBottomColor: '#004CDF', width: '10%', textAlign: 'center', left: '5%' }} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
          <ListView
            key={useBodyScroll ? '0' : '1'}
            ref={ref}
            dataSource={dataSource}
            // renderHeader={() => <span>Pull to refresh</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            // renderSeparator={separator}
            useBodyScroll={useBodyScroll}
            style={useBodyScroll ? {} : {
              height: height,
              border: '1px solid #ddd',
              margin: '5px 0',
            }}
            pullToRefresh={<PullToRefresh
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
            onEndReached={onEndReached}
            pageSize={5}
          />
          <ListView
            key={useBodyScroll ? '0' : '1'}
            dataSource={dataSource}
            // renderHeader={() => <span>Pull to refresh</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row2}
            // renderSeparator={separator}
            useBodyScroll={useBodyScroll}
            style={useBodyScroll ? {} : {
              height: height,
              border: '1px solid #ddd',
              margin: '5px 0',
            }}
            pullToRefresh={<PullToRefresh
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
            onEndReached={onEndReached}
            pageSize={5}
          />
          <ListView
            key={useBodyScroll ? '0' : '1'}
            dataSource={dataSource}
            // renderHeader={() => <span>Pull to refresh</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            // renderSeparator={separator}
            useBodyScroll={useBodyScroll}
            style={useBodyScroll ? {} : {
              height: height,
              border: '1px solid #ddd',
              margin: '5px 0',
            }}
            pullToRefresh={<PullToRefresh
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
            onEndReached={onEndReached}
            pageSize={5}
          />
          <ListView
            key={useBodyScroll ? '0' : '1'}
            dataSource={dataSource}
            // renderHeader={() => <span>Pull to refresh</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            // renderSeparator={separator}
            useBodyScroll={useBodyScroll}
            style={useBodyScroll ? {} : {
              height: height,
              border: '1px solid #ddd',
              margin: '5px 0',
            }}
            pullToRefresh={<PullToRefresh
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
            onEndReached={onEndReached}
            pageSize={5}
          />
          <ListView
            key={useBodyScroll ? '0' : '1'}
            dataSource={dataSource}
            // renderHeader={() => <span>Pull to refresh</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            // renderSeparator={separator}
            useBodyScroll={useBodyScroll}
            style={useBodyScroll ? {} : {
              height: height,
              border: '1px solid #ddd',
              margin: '5px 0',
            }}
            pullToRefresh={<PullToRefresh
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
            onEndReached={onEndReached}
            pageSize={5}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default Order