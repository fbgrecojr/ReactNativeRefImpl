const React = require('react-native');

const {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  parkingLotItemContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 100,
    borderColor: '#FFbd00',
    borderWidth: 3,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 5,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  parkingLotListContainer: {
    paddingTop: 40,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
  },
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  panel: {
    padding: 5,
    alignItems: 'center',
  },
  name: {
    padding: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#bbb',
    borderRightWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
  },
  spaces: {
    padding: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '300',
  },
  imagesContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 20,
    height: 20,
  },

});
