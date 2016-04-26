let React = require('react-native');
const {
  Component,
} = React;
import ParkingLotList from './ParkingLotList';

export default class ParkingLotPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lots: [
        {
          name: 'lot 1',
          available: 36,
        },
        {
          name: 'lot 1',
          available: 34,
        },
        {
          name: 'lot 1',
          available: 34,
        },
        {
          name: 'lot 1',
          available: 34,
        },
        {
          name: 'lot 1',
          available: 34,
        },
        {
          name: 'lot 1',
          available: 34,
        },
        {
          name: 'lot 1',
          available: 34,
        },
        {
          name: 'lot 1',
          available: 34,
        },
        {
          name: 'lot 1',
          available: 34,
        },
      ],
    };
  }

  render() {
    return (
      <ParkingLotList lots={this.state.lots} />
    );
  }
}
