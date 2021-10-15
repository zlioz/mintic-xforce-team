import React, { Component } from "react";

import "../App.css";
import "../styles/products.css";
import "bootstrap/dist/css/bootstrap.min.css";

import swal from "sweetalert";
import Header from "../components/Header";
import ProductsForm from './ProductsForm';
import ProductsList from "./ProductsList";
import Footer from "../components/Footer";

const data = [];

class Products extends Component {
  state = {
    data: data,
    
    form: {
      id: "",
      description: "",
      price: "",
      state: "",
    },

    modalinsert: false,
    modalEdit: false,
    alert: false,
  };

  showModalInsert = () => {
    this.setState({ modalinsert: true });
  };

  hideModalInsert = () => {
    this.setState({ modalinsert: false });
  };

  showModalEdit = (register) => {
    this.setState({ modalEdit: true, form: register });
  };

  hideModalEdit = () => {
    this.setState({ modalEdit: false });
  };    

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  insert = () => {
    if (
      this.state.form.description === "" ||
      this.state.form.price === "" ||
      this.state.form.state === ""
    ) {
      this.setState({ alert: true, modalinsert: false });
    } 
    else {
      var newValue = { ...this.state.form };
      newValue.id = this.state.data.length + 1;
      var list = this.state.data;
      list.push(newValue);
      this.setState({ data: list, alert: false, modalinsert: false });
      swal(
        "Successful Operation.",
        newValue.description + ", added successfully.",
        "success"
      );
      let form = { ...this.state.form };
      form.description = ''; form.price = ''; form.state = ''; 
      this.setState({ form });
    }
  }

  modify = (dato) => {
    var cont = 0;
    var list = this.state.data;
    console.log(list);
    list.map((register) => {
      if (dato.id === register.id) {
        list[cont].description = dato.description;
        list[cont].price = dato.price;
        list[cont].state = dato.state;
      }
      cont++;
    });
    this.setState({ data: list, modalEdit: false });
    swal(
      "Successful Operation.",
      "The register with id: " + dato.id + ", was successfully modified.",
      "success"
    );
  };

  render() {
    return (
      <>
        <Header />

        <ProductsList
          data = {this.state.data}
          showME = {this.showModalEdit}
          showMI = {this.showModalInsert}
          form = {this.state.form}
          alert = {this.state.alert}
        />

        <ProductsForm
          insert = {this.insert}
          modify = {this.modify}
          hideMI = {this.hideModalInsert}
          hideME = {this.hideModalEdit}
          handleChange = {this.handleChange}
          form = {this.state.form}
          data = {this.state.data}
          modalInsert = {this.state.modalinsert}
          modalEdit = {this.state.modalEdit}
          cancel = {this.cancel}
        />

        <Footer />
      </>
    );
  }
}
export default Products;