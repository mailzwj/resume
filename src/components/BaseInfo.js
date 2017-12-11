import React, { Component } from 'react';

import './baseinfo.less';
import qrcode from '../images/qrcode.jpg';

class BaseInfo extends Component {
    constructor() {
        super();
        this.state = {
            qrcode: false
        };
    }

    handleMouseOver = () => {
        this.setState({
            qrcode: true
        });
    }

    handleMouseOut = () => {
        this.setState({
            qrcode: false
        });
    }

    render() {
        return (
            <div className="abs-center base-info">
                <div className="my-info">
                    <section>
                        <h2 className="section-title">成长经历</h2>
                        <div className="content">
                            <p>1987年，出生于四川省宜宾县的一个边陲小镇。</p>
                            <p>2007年高中毕业，考入浙江科技学院-教育技术学专业。</p>
                            <p>2011年大学毕业。</p>
                        </div>
                    </section>
                    <section>
                        <h2 className="section-title">个人信息</h2>
                        <div className="content">
                            <p>身高：172cm，体重：60kg</p>
                            <p>年龄：30</p>
                            <p>微信：mailzwj<span className="qr-thumb" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.qrcode ? <img src={qrcode} /> : ''}</span></p>
                            <p>QQ：327417779（用得少了）</p>
                            <p>邮箱：<a href="mailto:mailzwj@126.com">mailzwj@126.com</a></p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default BaseInfo;