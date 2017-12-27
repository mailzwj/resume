import React, { Component } from 'react';

import './experience.less';

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            timeline: [
                {
                    timezone: '2014.06-至今',
                    job: '高级前端开发工程师',
                    work: 'JSHOP、智能通讯部...'
                },
                {
                    timezone: '2011.04-2014.04',
                    job: '前端开发工程师',
                    work: '淘宝前端开发工程师...'
                },
                {
                    timezone: '2007.09-2011.06',
                    job: '学生',
                    work: '路漫漫其修远兮，吾将上下而求索...'
                }
            ]
        };
    }

    handleClick = (index) => {
        this.setState({
            activeIndex: index
        });
    }

    render() {
        const state = this.state;
        const sliderWidth = state.timeline.length * 100 + '%';
        let position = state.activeIndex * -100 + '%';
        const fullWidth = 100 / state.timeline.length + '%';
        return (
            <div className="abs-center experience">
                <div className="timeline">
                    {
                        do {
                            state.timeline.map((t, idx) => {
                                return (
                                    <a className={"time" + (state.activeIndex === idx ? ' active' : '')} key={'time-' + idx} onClick={() => this.handleClick(idx)}>{t.timezone}</a>
                                );
                            });
                        }
                    }
                </div>
                <div className="job-info">
                    <div className="job-slider" style={{width: sliderWidth, left: position}}>
                        {
                            do {
                                state.timeline.map((t, idx) => {
                                    return (
                                        <div className="part-of-job" key={'work-' + idx} style={{width: fullWidth}}>
                                            <div className="job-content">
                                                {t.work}
                                            </div>
                                        </div>
                                    );
                                });
                            }
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;