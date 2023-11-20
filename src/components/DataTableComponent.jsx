/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faEdit,
  faInfo,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Spinner } from "react-bootstrap";

import { connect } from "react-redux";
import Swal from "sweetalert2";
import { deleteUser, getUsers } from "../actions/userAction";
import Styles from "../Styles";
const handleClickDelete = (dispatch, id) => {
  Swal.fire({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      Swal("Data User Sukses dihapus", {
        icon: "success",
      });
      dispatch(getUsers());
    } else {
      Swal("Data gagal dihapus");
    }
  });
};

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
const DataTableComponent = (props) => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
      width: "20%",
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Alamat",
      selector: (row) => row.alamat,
      sortable: true,
    },
    {
      name: "Umur",
      selector: (row) => row.umur,
      sortable: true,
      width: "10%",
    },
    {
      name: "No HP",
      selector: (row) => row.nohp,
      sortable: true,
    },
    {
      name: "Action",
      // selector: (row) => row.year,
      // sortable: true,
      width: "30%",
      cell: (row) => (
        <>
          <Button
            href={"detail/" + row._id}
            variant="info"
            className="mr-2 radius"
          >
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>

          <Button
            href={"edit/" + row._id}
            variant="warning"
            className="mr-2 radius"
          >
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>

          <Button
            onClick={() => handleClickDelete(props.dispatch, row._id)}
            variant="danger"
            className="mr-2 radius"
          >
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      {/* <Styles> */}
      <Container>
        {props.getUsersList ? (
          <div>
            <Row>
              <Button href={"create"} variant="primary" className="mr-2 radius">
                <FontAwesomeIcon icon={faAdd} /> Create
              </Button>
            </Row>
            <br />
            <Styles>
              <DataTable
                striped
                highlightOnHover
                columns={columns}
                data={props.getUsersList}
                pagination
              />
            </Styles>
          </div>
        ) : (
          <div className="text-center">
            {props.errorUsersList ? (
              <h1>{props.errorUsersList}</h1>
            ) : (
              <Spinner color="dark"></Spinner>
            )}
          </div>
        )}
      </Container>
      {/* </Styles> */}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, null)(DataTableComponent);
