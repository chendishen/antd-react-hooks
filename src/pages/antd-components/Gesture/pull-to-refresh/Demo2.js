// ListView 下拉刷新
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

function PullToRefresh2() {

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
            img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            title: 'Meet hotel',
            des: '不是所有的兼职汪都需要风吹日晒',
        },
        {
            img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            title: 'McDonald\'s invites you',
            des: '不是所有的兼职汪都需要风吹日晒',
        },
        {
            img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
            title: 'Eat the week',
            des: '不是所有的兼职汪都需要风吹日晒',
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
        const hei = height - ReactDOM.findDOMNode(ref.current).offsetTop;

        setTimeout(() => {
            setRData(genData())
            setDataSource(dataSource.cloneWithRows(genData()))
            setHeight(hei)
            setRefreshing(false)
            setIsLoading(false)
        }, 1500);
    }, [])

    useEffect(() => {
        if (useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }, [useBodyScroll])

    const onRefresh = () => {
        setRefreshing(true)
        setIsLoading(true)
        // simulate initial Ajax
        setTimeout(() => {
            setRData(genData())
            setDataSource(dataSource.cloneWithRows(rData))
            setRefreshing(false)
            setIsLoading(false)
        }, 600);
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
            setRData([...rData, ...genData(++pageIndex)])
            setDataSource(dataSource.cloneWithRows(rData))
            setIsLoading(false)
        }, 1000);
    };

    const separator = (sectionID, rowID) => (
        <div
            key={`${sectionID}-${rowID}`}
            style={{
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
            }}
        />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
        if (index < 0) {
            index = data.length - 1;
        }
        const obj = data[index--];
        return (
            <div key={rowID}
                style={{
                    padding: '0 15px',
                    backgroundColor: 'white',
                }}
            >
                <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
                    {obj.title}
                </div>
                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
                    <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
                    <div style={{ display: 'inline-block' }}>
                        <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}-{rowData}</div>
                        <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
                    </div>
                </div>
            </div>
        );
    };
    return (<div>
        <Button
            style={{ margin: '30px 15px' }}
            inline
            onClick={() => setUseBodyScroll(!useBodyScroll)}
        >
            {useBodyScroll ? 'useBodyScroll' : 'partial scroll'}
        </Button>
        <ListView
            key={useBodyScroll ? '0' : '1'}
            ref={ref}
            dataSource={dataSource}
            renderHeader={() => <span>Pull to refresh</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            renderSeparator={separator}
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
    </div>);

}

export default PullToRefresh2