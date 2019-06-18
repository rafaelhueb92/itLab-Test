import React, { Component } from "react";
import "./carnaval.css";
import api from "../services/api";

class New extends Component {
  state = {
    anoCarnaval: ""
  };
  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.anoCarnaval === "" || this.state.anoCarnaval < 1581)
      alert("Digite um ano válido");
    else {
      api
        .calcularCarnaval(this.state.anoCarnaval)
        .then(result =>
          alert(`Ano: ${result.ano} Carnaval: ${result.dtCarnaval}`)
        );
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form id="form-carnaval" onSubmit={this.handleSubmit}>
        <input
          type="number"
          name="anoCarnaval"
          placeholder="Digite o Ano do Carnaval"
          onChange={this.handleChange}
          value={this.state.anoCarnaval}
        />
        <button type="submit">Calcular</button>
      </form>
    );
  }
}

export default New;
