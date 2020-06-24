import React, { useState, useEffect } from 'react';
import '../../../styles/modal/modal.scss'

function Model() {
    const [modal, setModal] = useState(false)

    // 失败回调
    function makeCancelCallBack(){
        setModal(false)
    }

    // 成功回调
    function makeConfirmCallBack(){
        setModal(false)
    }

    return (
        <div>
            <div className='clickbtn' onClick={()=>{setModal(true)}} >点击弹出弹窗</div>

            {/* 用户信息弹窗 */}
            {modal &&
                <div className="tc-continue">
                    <div className="tc-dialog">
                        <div className="tc-content">
                            <div className="band-des">弹窗标题</div>
                            <img className="band-img" src="../../../../static/user/success.png"/>
                            <div className="band-des2">弹窗的描述</div>
                        </div>
                        <div className="tc-btn">
                            <div className="tc-btn-child" onClick={makeConfirmCallBack}>确定</div>
                            <div className="tc-btn-child" onClick={makeCancelCallBack}>取消</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Model