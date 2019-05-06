import Counter from './components/Counter'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ value: state.counter })

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: 'INCREMENT' }),
  onDecrement: () => dispatch({ type: 'DECREMENT' })
})

const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default App
