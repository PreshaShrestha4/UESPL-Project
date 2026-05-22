import "./BankSlider.css";
//
import bank1 from "../../assets/banks/bank1.png";
import bank2 from "../../assets/banks/bank2.png";
import bank3 from "../../assets/banks/bank3.png";
import bank4 from "../../assets/banks/bank4.png";
import bank5 from "../../assets/banks/bank5.png";
import bank6 from "../../assets/banks/bank6.png";
import bank7 from "../../assets/banks/bank7.png";
import bank8 from "../../assets/banks/bank8.png";
import bank9 from "../../assets/banks/bank9.png";
import bank10 from "../../assets/banks/bank10.png";
import bank11 from "../../assets/banks/bank11.png";
import bank12 from "../../assets/banks/bank12.png";
import bank13 from "../../assets/banks/bank13.png";
import bank14 from "../../assets/banks/bank14.png";
import bank15 from "../../assets/banks/bank15.png";
import bank16 from "../../assets/banks/bank16.png";
import bank17 from "../../assets/banks/bank17.png";
import bank18 from "../../assets/banks/bank18.png";
import bank19 from "../../assets/banks/bank19.png";
import bank20 from "../../assets/banks/bank20.png";
import bank21 from "../../assets/banks/bank21.png";
import bank22 from "../../assets/banks/bank22.png";
import bank23 from "../../assets/banks/bank23.png";
import bank24 from "../../assets/banks/bank24.png";
import bank25 from "../../assets/banks/bank25.png";

const banks = [
  bank1,
  bank2,
  bank3,
  bank4,
  bank5,
  bank6,
  bank7,
  bank8,
  bank9,
  bank10,
  bank11,
  bank12,
  bank13,
  bank14,
  bank15,
  bank16,
  bank17,
  bank18,
  bank19,
  bank20,
  bank21,
  bank22,
  bank23,
  bank24,
  bank25,
];

const BankSlider = () => {
  return (
    <section className="bank-section">
      <div className="bank-title">
        <span className="line"></span>

        <h2>AUTHORIZED VALUATORS OF</h2>

        <span className="line"></span>
      </div>

      <div className="slider-container">
        <div className="slider-track">
          {[...banks, ...banks].map((bank, index) => (
            <div className="bank-logo-box" key={index}>
              <img src={bank} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankSlider;
