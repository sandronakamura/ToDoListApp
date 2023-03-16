import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  title: { 
    fontSize: 25,
    textAlign: 'center',
    color: "#000000",
  },
  addButton: {
    width: 30,
    height: 30,
  },
  deleteButton: {
    width: 30,
    height: 30,
  },
  homeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#CCCCCC',
    padding: 15,
  },
  itens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.3,
    backgroundColor: '#99c9ff',
    color: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 18,
  },
  itensText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export {styles};
