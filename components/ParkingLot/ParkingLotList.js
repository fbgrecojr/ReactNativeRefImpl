import React from 'react-native';
import Style from '/style.js';
const {
	Component,
	ListView,
	View,
	PropTypes,
} = React;

import ParkingLotItem from './ParkingLotItem';

export default class ParkingLotList extends Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.lots),
    };
  }

  renderRow(lot) {
    return (
      <ParkingLotItem lot={lot} />
    );
  }

  render() {
    return (
      <View style={Style.parkingLotListContainer}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

ParkingLotList.propTypes = {
  lots: PropTypes.arrayOf(PropTypes.object).isRequired,
};
