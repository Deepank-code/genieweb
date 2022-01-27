const Card = (props) => {
  return (
    <div class="card text-center">
      <div class={`card-header  ${props.namingClass} `}>{props.date}</div>
      <div class={`card-body ${props.bgcolorClass}`}>
        <h5 class="card-title my-4">{props.img}</h5>
        <a href="#" className=" essential mx-2 my-2">
          Essential
        </a>
        <a href="#" className="beginner mx-2 my-2">
          beginner
        </a>
        <p class={`card-text my-4 ${props.textColor}`}>{props.contentname}</p>
        <div style={{ marginBottom: "20px" }}>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <p style={{ color: "grey" }}>{props.enroll}</p>
        </div>
        <a href="#" className={`btn  enrollbtn ${props.btnColor}`}>
          Enroll now
        </a>

        <div className="discountag ">
          <a style={{ textDecoration: "none" }}>{props.price}</a>
        </div>
      </div>
    </div>
  );
};
export default Card;
