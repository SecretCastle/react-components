import React from 'react';
class DateSelector extends React.Component {

    ulTouchStartFn = () => {
        console.log('run');
    }
    
    render() {
        return ( 
            <div className="rc_ds_wrap">
                <div className="rc_ds_top_shadow"></div>
                <div className="rc_ds_bottom_shadow"></div>
                <div className="rc_ds_selected_line"></div>
                <div className="rc_ds_container">
                    <ul className="move" onTouchStart={this.ulTouchStartFn}>
                        <li></li>
                        <li></li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul className="" onTouchStart={this.ulTouchStartFn}>
                        <li></li>
                        <li></li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DateSelector;