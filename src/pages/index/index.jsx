import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton ,AtTabBar} from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <AtButton type='primary'>按钮文案</AtButton>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>

        <AtTabBar
  fixed
  tabList={[
    { title: '活动列表', iconType: 'bullet-list', text: 'new' },
    { title: '日历', iconType: 'calendar' },
    { title: '我的', iconType: 'user', text: '100', max: '99' }
  ]}
  onClick={this.handleClick.bind(this)}
  current={this.state.current}
/>
      </View>
    )
  }
}

export default Index
