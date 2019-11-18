import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import 'taro-ui/dist/style/index.scss'; // 引入组件样式 - 方式一
import './custom-variables.scss'; //使用自定义样式
import Index from './pages/index';

import configStore from './store';

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
	config = {
		pages: [ 'pages/index/index', 'pages/test/index', 'pages/mine/index' ],
		window: {
			backgroundTextStyle: 'light',
			navigationBarBackgroundColor: '#78a4f4',
			navigationBarTitleText: 'WeChat',
			navigationBarTextStyle: 'black'
		},
		tabBar: {
			custom: true,
			list: [
				{
					pagePath: 'pages/index/index',
					text: 'IT一点通工作室'
				},
				{
					pagePath: 'pages/test/index',
					text: 'test'
				},
				{
					pagePath: 'pages/mine/index',
					text: 'mine'
				}
			]
		}
	};

	componentDidMount() {}

	componentDidShow() {}

	componentDidHide() {}

	componentDidCatchError() {}

	// 在 App 类中的 render() 函数没有实际作用
	// 请勿修改此函数
	render() {
		return (
			<Provider store={store}>
				<Index />
			</Provider>
		);
	}
}

Taro.render(<App />, document.getElementById('app'));
