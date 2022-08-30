import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBookingTicket.css"
import data from "../Data/danhSachGhe.json"
class BaiTapBookingTicket extends Component {
  render() {
    return <div>BaiTapBookingTicket</div>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapBookingTicket);
