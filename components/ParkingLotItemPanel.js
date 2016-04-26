import React from 'react-native';
import Style from '../style.js';

const {
	Component,
	Image,
	View,
} = React;

const testImage = 'http://facebook.github.io/react/img/logo_og.png';

export default class ParkingLotItemPanel extends Component {
  render() {
    return (
			<View style={[Style.panel, Style.row]}>
				<View style={Style.imagesContainer}>
          <Image
              resizeMode={Image.resizeMode.contain}
              source={{ uri: testImage }}
              style={Style.image}
          />
				</View>
				<View style={Style.imagesContainer}>
          <Image
              resizeMode={Image.resizeMode.contain}
              source={{ uri: testImage }}
              style={Style.image}
          />
				</View>
				<View style={Style.imagesContainer}>
          <Image
              resizeMode={Image.resizeMode.contain}
              source={{ uri: testImage }}
              style={Style.image}
          />
				</View>
				<View style={Style.imagesContainer}>
          <Image
              resizeMode={Image.resizeMode.contain}
              source={{ uri: testImage }}
              style={Style.image}
          />
				</View>
				<View style={Style.imagesContainer}>
          <Image
              resizeMode={Image.resizeMode.contain}
              source={{ uri: testImage }}
              style={Style.image}
          />
				</View>
			</View>
		);
  }
}
