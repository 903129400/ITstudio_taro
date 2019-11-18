import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.scss';

export default class Message extends Component {
	render() {
		return (
			<View className='tabsCard'>
				<View className='tabsCard-head'>
					<Image
  className='tabsCard-headImg'
  src='https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ224ib7XndicZOE7Q5RhoFOq2puULXnOL5U34P7vI9UOFBQmHibcWMIpb0LiclibM5ib6npfM3ichjeuFmg/132'
  alt=''
					/>
					<View className='tabsCard-user'>
						<View className='tabsCard-name'>帅山</View>
						<View className='tabsCard-time'>2019.11.18</View>
					</View>
				</View>
				<View className='tabsCard-body'>
					<View className='tabsCard-title'> 今天天气真好啊啊啊</View>
					<View className='tabsCard-content'> 是的是的龟龟</View>
				</View>
			</View>
		);
	}
}
