import { connect } from 'react-redux'
import { toggleMessageRead } from '../actions'

import Message from '../components/Message'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.message,
    read: state.messageRead
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleRead: () => {
      dispatch( toggleMessageRead() )
    }
  }
}

const MessageContainer =
  connect( mapStateToProps, mapDispatchToProps )( Message )

export default MessageContainer
