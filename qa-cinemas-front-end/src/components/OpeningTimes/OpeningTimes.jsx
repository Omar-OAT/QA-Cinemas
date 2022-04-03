import { Table } from "reactstrap";

const OpeningTimes = () => {
  return (
    <div className="text-white">
      <h1 className="text-white text-center display-1" align="center">
        Opening Times
      </h1>
      <br />
      <br />
      <br />
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
  );
};

export default OpeningTimes;
