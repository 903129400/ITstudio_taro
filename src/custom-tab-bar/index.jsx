import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { AtTabBar } from 'taro-ui';
import { changePage } from '../actions/counter';

@connect(
	({ counter }) => ({
		counter
	}),
	(dispatch) => ({
		changePage(value) {
			dispatch(changePage(value));
			switch (value) {
				case 0:
					Taro.switchTab({ url: '../index/index' });
					break;
				case 1:
					Taro.switchTab({ url: '../test/index' });
					break;
				case 2:
					Taro.switchTab({ url: '../mine/index' });
					break;
			}
		}
	})
)
class Index extends Component {
	render() {
		return (
			<AtTabBar
  fixed
  tabList={[
					{ title: '活动列表', iconType: 'bullet-list', text: 'new' },
					{ title: '日历', iconType: 'calendar' },
					{ title: '我的', iconType: 'user', text: '100', max: '99' }
				]}
  onClick={this.props.changePage}
  current={this.props.counter.tabBar}
			/>
		);
	}
}

export default Index;
