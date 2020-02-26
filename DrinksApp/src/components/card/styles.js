import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    height: 150,
    shadowColor: 'black',
    justifyContent: 'center',
    shadowRadius: 6,
    elevation: 9,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    padding: 20,
    overflow: 'hidden',
    margin: 6,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 0.2,
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    maxWidth: '60%',
  },
});

export default styles;
