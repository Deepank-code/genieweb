import Card from "./Card";

const ContainerItem = () => {
  return (
    <div class="row mx-4 my4">
      <div class="col-lg-3 col-md-6 ">
        <Card
          date="24/03/2022"
          img={
            <img
              src="https://lucdn.letsupgrade.net/js_e2c2c89220.webp"
              width="70"
              alt="profile"
              srcset=""
            ></img>
          }
          contentname="Javascript essential zero to hero programme"
          price="Worth 2000"
          enroll="94500 students enrolled here"
        />
      </div>
      <div class="col-lg-3 col-md-6">
        <Card
          date="24/03/2022"
          namingClass="heading "
          bgcolorClass="bgcolor"
          textColor="txt"
          img={
            <img
              src="https://lucdn.letsupgrade.net/full_web_dev_pro_4a9715d649.webp"
              width="70"
              alt="profile"
              srcset=""
            ></img>
          }
          btnColor="darkcolor"
          contentname="FullStack development programme"
          price="EMI starting @2300/month"
          enroll="5600 students enrolled here"
        />
      </div>
      <div class="col-lg-3 col-md-6">
        <Card
          date="24/03/2022"
          namingClass="heading"
          textColor="txt"
          bgcolorClass="bgcolor"
          img={
            <img
              src="https://lucdn.letsupgrade.net/full_data_science_pro_4f589d8671.webp"
              width="70"
              alt="profile"
              srcset=""
            ></img>
          }
          btnColor="darkcolor"
          contentname="full stack and Data science Programme"
          price="EMI starting @2300/month"
          enroll="600 students enrolled here"
        />
      </div>
      <div class="col-lg-3 col-md-6">
        <Card
          date="24/03/2022"
          img={
            <img
              src="https://lucdn.letsupgrade.net/full_ai_ml_59c5d9ee66.webp"
              width="70"
              alt="profile"
              srcset=""
            ></img>
          }
          contentname="Machine Learning essential Zero to hero"
          price="Worth 2000"
          enroll="340+ students enrolled here"
        />
      </div>
      <div class="col-lg-3 col-md-6">
        <Card
          date="24/03/2022"
          img={
            <img
              src="https://lucdn.letsupgrade.net/jhava_bl_f14e8cfa4b.png"
              width="70"
              alt="profile"
              srcset=""
            ></img>
          }
          contentname="Java Programming zero to hero programme"
          price="Worth 2000"
          enroll="840+ students enrolled here"
        />
      </div>
      <div class="col-lg-3 col-md-6">
        <Card
          date="24/03/2022"
          namingClass="heading "
          bgcolorClass="bgcolor"
          textColor="txt"
          img={
            <img
              src="https://lucdn.letsupgrade.net/paython_dijango_9bb71b0240.webp"
              width="70"
              alt="profile"
              srcset=""
            ></img>
          }
          btnColor="darkcolor"
          contentname="Full Stack python and django programme"
          price="EMI starting @ 2300/month"
          enroll="8540+ students enrolled here"
        />
      </div>
      <div class="col-lg-3 col-md-6">
        <Card
          date="24/03/2022"
          namingClass="heading "
          bgcolorClass="bgcolor"
          textColor="txt"
          img={
            <img
              src="https://lucdn.letsupgrade.net/full_web_dev_pro_4a9715d649.webp"
              width="70"
              alt="profile"
              srcset=""
            ></img>
          }
          btnColor="darkcolor"
          contentname="Fullstack AI,ML programme"
          price="EMI starting @ 2300/month"
          enroll="740+ students enrolled here"
        />
      </div>
      <div class="col-lg-3 col-md-6 ">
        <Card
          date="24/03/2022"
          img={
            <img
              src="https://lucdn.letsupgrade.net/ml_E_Zero_to_hero_a285f19ec9.webp"
              width="70"
              alt="profile"
              srcset=""
            ></img>
          }
          contentname="HTML and CSS essentials "
          price="Worth 2000"
          enroll="940+ students enrolled here"
        />
      </div>
    </div>
  );
};
export default ContainerItem;
