import React, { Component } from 'react';
import { Table, Form,  Button, Alert } from 'react-bootstrap';
import './usertable.css';

export default class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, address: "Rajkot", name: "Charmi", points: 50, percent: 90 },
        { id: 2, address: "Ahmedabad", name: "Aneri", points: 45, percent: 80 },
        { id: 3, address: "Rajkot", name: "Kruti", points: 40, percent: 70 },
        { id: 4, address: "Jamnagar", name: "Dhara", points: 35, percent: 60 },
        { id: 5, address: "Morbi", name: "Jinkal", points: 30, percent: 50 }
      ],
      selected: [{ name: "" }],
      errorMessage: "",
      isError: false
    };
    this.handleChangeTextEdit = this.handleChangeTextEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeTextEdit(e) {
    let selected = Object.assign({}, this.state.selected);
    console.log("Line ---- 22", selected);
    selected[e.target.name] = e.target.value;
    this.setState({ selected });
  }
  handleRowClick(details) {
    console.log("Line ---- 28 NEW", details);
    console.log("Line ---- 28 OLD", this.state.selected);
    if (details.id === this.state.selected.id) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
    console.log("Line ---- 18", details);
    const { show } = this.state;
    console.log(show);
    this.setState({ selected: details });
  }
  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item);
    const itemRows = [
      <tr onClick={clickCallback} key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.points}</td>
      <td>{item.percent}</td>
    </tr>
    ];
    return itemRows;
  }
  handleValidation() {
    let data = this.state.selected;

    //points validation
    var pointsVaule = parseInt(data["points"]);
    if (30 > pointsVaule && pointsVaule < 120) {
      this.setState({
        ErrorMessage: "Please enter a value between 30 and 120.",
        isError: true
      });
    }

    //address validation
    var addressVaule = data["address"];
    console.log("Line ---- 70", addressVaule);
    if (addressVaule === "Ahmedabad") {
      this.setState({
        ErrorMessage: "Please enter other city.",
        isError: true
      });
      return false;
    } else {
      return true;
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.handleValidation();
    const { selected } =this.state;
    const data = this.state.data.slice(0);
    const foundIndex = data.findIndex(detail => detail.id === selected.id);
    if(foundIndex > -1){
      data[foundIndex] = selected;
      console.log('Line ---- 49',data[foundIndex]);
      this.setState({ data });
    }
  }
  render() {
    let allRows = [];
    this.state.data.forEach(item => {
      const dataRows = this.renderItem(item);
      allRows = allRows.concat(dataRows);
    });
    return (
        <div className="container userdata">
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>Percent</th>
              </tr>
            </thead>
            <tbody>{allRows}</tbody>
          </Table>

          {this.state.show && (
          <div className="userform">
            <h2 className="text-center">User-detail Form</h2>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  label="ID"
                  value={this.state.selected.id}
                  name="id" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  label="Name"
                  value={this.state.selected.name}
                  name="name"
                  onChange={e => this.handleChangeTextEdit(e)} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                   error
                   label="Address"
                   value={this.state.selected.address}
                   name="address"
                   onChange={e => this.handleChangeTextEdit(e)} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  error
                  label="Points"
                  name="points"
                  value={this.state.selected.points}
                  onChange={e => this.handleChangeTextEdit(e)}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                   type="number"
                   label="Percent"
                   name="percent"
                   value={this.state.selected.percent}
                   onChange={e => this.handleChangeTextEdit(e)}/>
              </Form.Group>
              <Button type="submit">Submit</Button>
              {!!this.state.isError && (
                [
                  'danger',
                ].map((variant, idx) => (
                  <Alert key={idx} variant={variant}>
                    {this.state.ErrorMessage}{" "}
                  </Alert>
                ))
              )}
            </Form>
          </div>
          )}
        </div>
      )
    }
  }