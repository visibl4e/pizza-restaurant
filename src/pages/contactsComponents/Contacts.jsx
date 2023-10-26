import { Link } from "react-router-dom";
import { GoogleMap } from "./GoogleMap";
import { FormGroup } from "./FormGroup";
import { useForm } from "react-hook-form";
export function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    alert("Succses");
  }

  return (
    <>
      <div className="containerContacts">
        <section className="contactsDataSection">
          <div className="contactUs">
            <h2>Contact Us</h2>
            <div className="address">
              <p>44 Canal Center Plaza #200,</p>
              <span> Alexandria, VA 22314, USA</span>
            </div>
            <br />
            <Link to="tel:1.555.836.6767">
              <span>TEL:</span>1.555.836.6767
            </Link>{" "}
            <br />
            <Link to="mailto:info@demolink.org" target="_blank">
              info@demolink.org
            </Link>
          </div>
          <div className="openingHours">
            <h2>Opening hours</h2>
            <div className="days">
              <p className="workWeekDays">Mo-Fr 11:00-00:00</p>
              <span className="weekendDays">Sa-Su 15:00-00:00</span>
            </div>
            <p>Call us at:</p>
            <Link to="tel:555.329.0632">555.329.0632</Link>
          </div>
        </section>
        <section className="contactGoogleMapSection">
          <div className="mapContainer">
            <GoogleMap />
          </div>
        </section>
        <section className="getInTouchSection">
          <div className="getInTouchContainer">
            <div className="textBlock">
              <h2>Get in touch</h2>

              <p>
                The Mia Pizza Restaurant is situated at the very historical
                heart of Alexandria, VA. Our address is well known to locals as
                the most home-like, and delicious place in the city!
              </p>
              <p>
                Please contact us using the form on the page in regards to any
                questions you might have, or to make a booking with us
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="formContact">
              <div className="personalData">
                <FormGroup
                  className="formGroup"
                  errorMessage={errors?.name?.message}
                >
                  <label className="labelForm " htmlFor="name">
                    Name
                    <input
                      className="inputForm "
                      type="name"
                      id="name"
                      {...register("name", {
                        // required: { value: true, message: "Required" },
                        validate: (value) => {
                          if (value.length == "") {
                            return "Enter your name";
                          }
                        },
                      })}
                    />
                  </label>
                </FormGroup>
                <FormGroup>
                  <label className="labelForm " htmlFor="phone">
                    Phone
                    <input className="inputForm " type="tel" id="phone" />
                  </label>
                </FormGroup>
                <FormGroup>
                  <label className="labelForm" htmlFor="email">
                    Email
                    <input className="inputForm " type="email" id="email" />
                  </label>
                </FormGroup>
              </div>
              <FormGroup>
                <textarea
                  className="yourMessage "
                  placeholder="Your message"
                ></textarea>
              </FormGroup>

              <button className="btnForm" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
