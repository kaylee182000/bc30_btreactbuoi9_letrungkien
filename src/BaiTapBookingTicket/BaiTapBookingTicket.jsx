import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBookingTicket.css";
import data from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return data.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="background">
        <div className="container">
          <h1 className="text-center text-white">BOOKING TICKET</h1>
          <div className="row">
            <div className="col-8">
              <div className="d-flex flex-column justify-content-center mt-1">
                <div className="screen"></div>
                {this.renderHangGhe()}
              </div>
            </div>
            <div className="col-4 pt-5">
              <div className="text-light">Danh Sach</div>
              <ThongTinDatGhe />
              <button className="btn btn-light">click</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapBookingTicket);
