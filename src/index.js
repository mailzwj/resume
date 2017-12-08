import React, { Component } from 'react';
import { render } from 'react-dom';

import BaseInfo from './components/BaseInfo';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Interests from './components/Interests';

import less from './index.less';

class App extends Component {
    constructor() {
        super();
        this.state = {
            current: 'baseinfo',
            categories: [
                {
                    title: '基本信息',
                    key: 'baseinfo',
                    alias: 'baseinfo',
                    detail: BaseInfo
                },
                {
                    title: '工作经历',
                    key: 'experience',
                    alias: 'experience',
                    detail: Experience
                },
                {
                    title: '职业技能',
                    key: 'skill',
                    alias: 'skill',
                    detail: Skill
                },
                {
                    title: '兴趣爱好',
                    key: 'interests',
                    alias: 'interests',
                    detail: Interests
                }
            ]
        };
    }

    changeTab = (idx) => {
        const cs = this.state.categories;
        const cAlias = cs[idx].alias;
        this.setState({
            current: cAlias
        });
    }

    render() {

        const state = this.state;
        const panHeight = 100 / state.categories.length + '%';

        let tabs = [];
        let pans = [];
        let idx = 0;

        state.categories.forEach((c, i) => {

            if (c.alias === state.current) {
                idx = i;
            }

            tabs.push(
                <div className={'r-tab-item' + (c.alias === state.current ? ' active' : '')} key={'tab-' + c.key} onClick={() => this.changeTab(i)}>
                    {c.title}
                </div>
            );

            pans.push(
                <div className="r-pan-item" key={'pan-' + c.key} style={{height: panHeight}}>
                    <c.detail />
                </div>
            );
        });

        const scrollerStyle = {
            top: (-idx * 100) + '%',
            height: state.categories.length * 100 + '%'
        };

        console.log(scrollerStyle);

        return (
            <div className="r-wrapper">
                <div className="r-tab-wrapper">
                    {tabs}
                </div>
                <div className="r-pan-wrapper">
                    <div className="r-pan-scroller" style={scrollerStyle}>
                        {pans}
                    </div>
                </div>
            </div>
        );
    }
}

let root = document.getElementById('root');

if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
}

render(<App />, root);