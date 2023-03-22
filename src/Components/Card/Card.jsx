import { React, useState } from "react";
import Button from "../UI/Button";
import RateNumber from "../UI/RateNumber";
import "./Card.scss";
import "../UI/WrapperCard";
import WrapperCard from "../UI/WrapperCard";

const rateNumberArr = [1, 2, 3, 4, 5];

const Card = function () {
  const [clickedNumber, setClickedNumber] = useState();
  const [changeCardUI, setChangeCardUI] = useState(true);

  const clickedNumberHandler = function (e) {
    setClickedNumber(e.target.innerText);
  };

  const changeCardUIHandler = function () {
    clickedNumber && setChangeCardUI(false);
  };
  return (
    <WrapperCard>
      {changeCardUI ? (
        <div className="rate-card">
          <img
            className="rate-card__img"
            src="../image/logo.svg"
            alt="rate-card__logo"
          ></img>
          <h1 className="rate-card__header">How did we do?</h1>
          <p className="rate-card__paragraph">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="rate-card__number-container">
            {rateNumberArr.map((element) => (
              <RateNumber
                className={element == clickedNumber && "background-active"}
                numbers={element}
                key={Math.random()}
                onClick={clickedNumberHandler}
              />
            ))}
          </ul>
          <Button type="submit" onClick={changeCardUIHandler}>
            Submit
          </Button>
        </div>
      ) : (
        <div className="rated-card">
          <img
            src="../image/onlinePayment.svg"
            className="rated-card__img"
            alt="online-payment"
          ></img>
          <p className="rated-card__info">
            you selected {clickedNumber} out of {rateNumberArr.length}
          </p>
          <h1 className="rated-card__header">Thank you!</h1>
          <p className="rated-card__paragraph">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </WrapperCard>
  );
};

export default Card;
