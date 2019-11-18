import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtTabs, AtTabsPane } from 'taro-ui';
import { add, minus, asyncAdd } from '../../actions/counter';
import Message from './message';
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
		}
	})
)
class Index extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			current: 0,
			info: {}
		};
		let a = {};
		Taro.getUserInfo({
			success: function(res) {
				a.userInfo = res.userInfo;
			}
		});
		this.setState({ info: a });
		console.log('a=>', a);
	}
	handleClick(value) {
		this.setState({
			current: value
		});
	}
	config = {
		navigationBarTitleText: '首页'
	};

	componentWillReceiveProps(nextProps) {
		console.log(this.props, nextProps);
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		const tabList = [ { title: '闲聊吐槽' }, { title: '失物招领' }, { title: '二手易物' }, { title: '学识互动' } ];
		return (
			<View className='index'>
				<View>
					<Swiper
  indicatorColor='#999'
  indicatorActiveColor='#333'
  circular
  indicatorDots
  autoplay
  className='banner-background'
					>
						<SwiperItem className='banner-swiperItem'>
							<View className='banner'>
								<Image
  className='banner-img'
  src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574064901317&di=5c9364f8032490997e52a65014f6b26d&imgtype=jpg&src=http%3A%2F%2Fphotos.tuchong.com%2F62203%2Ff%2F1744750.jpg'
								/>
							</View>
						</SwiperItem>
						<SwiperItem className='banner-swiperItem'>
							<View className='banner'>
								<Image
  className='banner-img'
  src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574659900&di=504abf115bd0ef7f3b8bf7232bb95b1c&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.foooooot.com%2Ffootprint%2F2017%2F11%2F01%2F144153_HO3UD.jpg-.gallery'
								/>
							</View>
						</SwiperItem>
						<SwiperItem className='banner-swiperItem'>
							<View className='banner'>
								<Image
  className='banner-img'
  src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574065213275&di=769d98e1a1400c9164d3c4cf55167204&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Ffd%2Ftuangou%2Fg1%2FM0A%2F3D%2F24%2FCghzflSJF8-AV5hlAAJi1z9JIjY824_720_480_s.jpg'
								/>
							</View>
						</SwiperItem>
					</Swiper>
				</View>
				<AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
					<AtTabsPane current={this.state.current} index={0}>
						<View style='font-size:18px;text-align:center;min-height:600px;background: #f8f8f8;'>
							<Message content={this.state.info} />
							<Message />
							<Message />
						</View>
					</AtTabsPane>
					<AtTabsPane current={this.state.current} index={1} />
					<AtTabsPane current={this.state.current} index={2} />
					<AtTabsPane current={this.state.current} index={3} />
				</AtTabs>
			</View>
		);
	}
}

export default Index;
