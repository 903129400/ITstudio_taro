import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtButton } from 'taro-ui';
import { add, minus, asyncAdd, changePage } from '../../actions/counter';

import './index.scss';

@connect(
	({ counter }) => ({
		counter
	}),
	(dispatch) => ({
		add() {
			dispatch(add());
		},
		dec() {
			dispatch(minus());
		},
		asyncAdd() {
			dispatch(asyncAdd());
		},
		changePage(value) {
			dispatch(changePage(value));
		}
	})
)
class Index extends Component {
	constructor() {
		super(...arguments);
	}

	config = {
		navigationBarTitleText: '我的'
	};

	componentWillReceiveProps(nextProps) {
		console.log(this.props, nextProps);
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className='index'>
				<Button className='add_btn' onClick={this.props.add}>
					+
				</Button>
				<Button className='dec_btn' onClick={this.props.dec}>
					-
				</Button>
				<Button className='dec_btn' onClick={this.props.asyncAdd}>
					async
				</Button>
				<AtButton type='primary'>按钮文案</AtButton>
				<View>
					<Text>{this.props.counter.num}</Text>
				</View>
				<View>
					<Text>Hello, World</Text>
				</View>
			</View>
		);
	}
}

export default Index;
