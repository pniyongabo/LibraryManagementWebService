import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import Sidebar from "./sidebar";
import Header from "./header";
import "./checkoutList.css";

export default class CheckoutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.getAllUsers()
      .then((res1) => {
        this.load_data(res1.data).then((res3) => {
          this.setState({
            users: res3,
            isLoading: true,
          });
        });
      })
      .catch((err) => console.log(err));
  };

  getAllUsers = async () => {
    const response = await fetch("api/checkoutlist", {
      method: "GET",
    });
    const body = response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  load_data = async (rawData) => {
    const dataRows = rawData.map((item, i) => {
      var currentRow = {};
      currentRow["id"] = item._id;
      currentRow["name"] = item.name;
      currentRow["email"] = item.email;
      currentRow["checkout"] = item.checkout_date;
      currentRow["isbn"] = item.isbn;
      currentRow["newsletter"] = item.newsletter;
      return currentRow;
    });

    const dataColumns = [
      {
        label: "ID",
        field: "id",
        sort: "asc",
      },
      {
        label: "User Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
      },
      {
        label: "Checkout Date",
        field: "checkout",
        sort: "asc",
      },
      {
        label: "ISBN",
        field: "isbn",
        sort: "asc",
      },
      {
        label: "Newsletter",
        field: "newsletter",
        sort: "asc",
      },
    ];

    const authorsData = {
      columns: dataColumns,
      rows: dataRows,
    };

    return authorsData;
  };
  render() {
    const { users, isLoading } = this.state;

    return (
      <div className="align-center">
        <Header />
        <h1>Checkout List Page</h1>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around">
            <MDBDataTable
              striped
              bordered
              responsive
              data={this.state.users}
              className="your-custom-styles"
            />
          </div>
        </div>
      </div>
    );
  }
}
