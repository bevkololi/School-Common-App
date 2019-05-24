import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';

class Event extends Component {
    render() {
        return (
            <>
                <div className="events">
                    <table>
                        <thead>
                            <tr>
                                <th scope="row">
                                    Visiting Day
                            </th>
                                <td colSpan="2">
                                    August 24th
                            </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <time dateTime="08:30:00">8:30 AM</time>
                                </th>
                                <td colSpan="2">
                                In this part of the series, you'll move further and write down the REST API required for interacting with the MongoDB bank end. You'll also create the Home component which will be displayed after the user has logged in successfully.
                            </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </>
        );
    }
}

export default Event;
