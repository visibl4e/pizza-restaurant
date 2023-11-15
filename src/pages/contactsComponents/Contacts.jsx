import { Link } from "react-router-dom";
import { GoogleMap } from "./GoogleMap";
import { FormGroup } from "./FormGroup";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ModalOfSubmit } from "./modalOfSubmit";
import { useState } from "react";

export function Contacts() {
  const [modalActive, setModalActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    emailjs
      .send("service_dqihycp", "template_oa65rui", data, "7LismB5TQWhx6cctq")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    reset();
    setModalActive((modalActive) => !modalActive);
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
                      name="name"
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
                <FormGroup errorMessage={errors?.phone?.message}>
                  <label className="labelForm " htmlFor="phone">
                    Phone
                    <input
                      className="inputForm "
                      name="phone"
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        minLength: {
                          value: 7,
                          message: "Must be at least 7 figures",
                        },
                        validate: {
                          isNotEmpty: (value) => {
                            if (value.length === 0) {
                              return "Enter your phone number";
                            }
                          },
                          isNumber: (value) => {
                            if (!value.match(/[0-9]/)) {
                              return "The field should contain only numbers";
                            }
                          },
                        },
                      })}
                    />
                  </label>
                </FormGroup>
                <FormGroup errorMessage={errors?.email?.message}>
                  <label className="labelForm" htmlFor="email">
                    Email
                    <input
                      className="inputForm "
                      type="email"
                      id="email"
                      name="email"
                      {...register("email", {
                        validate: {
                          isNotEmpty: (value) => {
                            if (value.length == "") {
                              return "Enter your email";
                            }
                          },
                          validEmail: (value) => {
                            if (!value.match("@")) {
                              return "Please enter a valid email";
                            }
                          },
                        },
                      })}
                    />
                  </label>
                </FormGroup>
              </div>
              <FormGroup errorMessage={errors?.comment?.message}>
                <textarea
                  className="yourComment "
                  name="comment"
                  placeholder="Your message"
                  {...register("comment", {
                    validate: {
                      isNotEmpty: (value) => {
                        if (value.length == "") {
                          return "Message is required!";
                        }
                      },
                    },
                  })}
                ></textarea>
              </FormGroup>
              <button className="btnForm" type="submit">
                Submit
              </button>

              <ModalOfSubmit active={modalActive} setActive={setModalActive} />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
