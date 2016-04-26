import React from 'react-native';
import Style from '/style.js';
const {
	Component,
	Text,
	PropTypes,
	View,
} = React;

import ParkingLotItemPanel from './ParkingLotItemPanel';

export default class ParkingLotItem extends Component {
  render() {
    return (
			<View style={Style.parkingLotItemContainer}>
				<View style={[Style.row, { flex: 1.5 }]}>
					<View style={[Style.column, Style.name, { flex: 2 }]}>
						<Text style={Style.text}>{this.props.lot.name}</Text>
					</View>
					<View style={[Style.column, Style.spaces]}>
						<Text style={Style.text}>{this.props.lot.available}</Text>
					</View>
				</View>
				<ParkingLotItemPanel />
			</View>
		);
  }
}

ParkingLotItem.propTypes = {
  lot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    available: PropTypes.number.isRequired,
  }).isRequired,
};
