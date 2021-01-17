import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from "react-router-dom";

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    console.log("hi")
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={'/events/${event.id}'}>
            {event.titile}
          </Link>
          </td>
        <td>{event.body}</td>
      </tr>


    ))
  }

  render() {
    return (
      <React.Fragment>
      <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
        <ContentAdd />
      </FloatingActionButton>

      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Body</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          {this.renderEvents()}
        </TableBody>
      </Table>
      <Link to="/events/new">New Event</Link>
    </React.Fragment>

    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)