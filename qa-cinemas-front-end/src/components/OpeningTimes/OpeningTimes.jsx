import { Table } from "reactstrap";
import './OpeningTimesStyle.css'

const OpeningTimes = () => {
  return (
    <div>
      <div  className="opening-bg">
      <h3>QA Cinemas</h3>      
      <h1 className="text-white" align="center">
        OPENING TIMES
      </h1>
      <div className="line">
                    <div />
                    <div />
                    <div />
                  </div>
      </div>
      <div className="opentable">
      <Table dark hover align="center">
        <thead align="center">
          <tr>
            <th>Day Of The Week</th>
            <th>Opening Times</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr>
            <td>Monday</td>
            <td>10:00AM - 22:00PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>10:00AM - 22:00PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>10:00AM - 22:00PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>10:00AM - 22:00PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>10:00AM - 22:00PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10:00AM - 22:00PM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>10:00AM - 22:00PM</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default OpeningTimes;
