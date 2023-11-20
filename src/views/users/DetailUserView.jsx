/* eslint-disable react/prop-types */
// import { Component } from "react";
import { useEffect } from "react";
import BackComponent from "../../components/BackComponent";
import { Container, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getUserById } from "../../actions/userAction";
import JumbotronComponent from "../../components/JumbotronComponent";

// export default class DetailUserView extends Component {
//   render() {
//     const { id } = useNavigation()
//     // console.log("isi id", id);
//     return (
//       <div>
//         <Container>
//           {" "}
//           <BackComponent />
//           <h1>DetailUserView </h1>
//         </Container>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    getUserById: state.users.getUserById,
    errorUserById: state.users.errorUserById,
  };
};

const DetailUserView = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    console.log("Use Effect",id)
    dispatch(getUserById(id));
  });
  //   componentDidMount() {
  //   this.props.dispatch(getUsersList());
  // }
  return (
    <div>
      <Container>
        <JumbotronComponent title="Detail User" />
        <br />
        <BackComponent />
        <br />
        <br />
        <Table striped>
          <tbody>
            <tr>
              <td width="200">Nama</td>
              <td width="10">:</td>
              <td>{props.getUserById.nama}</td>
            </tr>
            <tr>
              <td width="200">Alamat</td>
              <td width="10">:</td>
              <td>{props.getUserById.alamat}</td>
            </tr>
            <tr>
              <td width="200">Umur</td>
              <td width="10">:</td>
              <td>{props.getUserById.umur}</td>
            </tr>
            <tr>
              <td width="200">No HP</td>
              <td width="10">:</td>
              <td>{props.getUserById.nohp}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailUserView);
