import React from 'react'
import { Button } from 'reactstrap'

const Message = ({ message, read, toggleRead }) => (
  <div>
    <div>
      A message: { message }
    </div>

    <div>
      <Button onClick={ toggleRead } size='sm'> toggle status </Button>

      message status: { read ? 'read' : 'unread' }
    </div>
  </div>
)

export default Message
