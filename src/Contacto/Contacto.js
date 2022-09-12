import DocumentTitle from "react-document-title";
import { DECOLAMI_TITLE, PHONE_CONTACT2 } from "../constants/Constants";
// import SocialMediaPanel from "../Footer/SocialMediaPanel";
import SocialBar from '../SocialBar/SocialBar';
import { Row, Col, Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import "./Contacto.css";
import { useForm } from "react-hook-form";
import { sendEmail } from "../Services/EmailService";
import { toastifySuccess } from "../Services/AlertService";
import ContactPanel from "../Footer/ContactPanel";


const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    sendEmail(data);
    reset()
    toastifySuccess()
  }

  return (
    <div className="contact_us">
      <DocumentTitle title={DECOLAMI_TITLE + "Contáctanos"}></DocumentTitle>
      <div className="contact_card bd-highlight mb-1">


      </div>
      <h3 className="text-center">Contactános</h3>
      <hr />
      <br />
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <Container style={{ textAlign: "center" }}>
              <SocialBar />
              <ContactPanel color="black" contacts={PHONE_CONTACT2} />
            </Container>
          </Col>
          <Col xs={10} md={8}>
            <div className='ContactForm'>
              <div className='container'>
                <div className='row'>
                  <div className='col-12 '>
                    <div className='contactForm'>
                      <h3>Correo Electronico</h3>
                      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                        {/* Row 1 of form */}
                        <div className='row formRow'>
                          <div className='col'>
                            <input
                              name='email'
                              className='form-control formInput'
                              placeholder='Correo electronico'
                              {...register('email', {
                                required: "El correo es requerido.",
                                pattern: {
                                  value: /^[\w\-\.\_\+]+\@(?:[a-zA-Z0-9\-]+\.)+(com|net|org|edu|biz|gov|mil|info|name|me|tv|us|mobi|COM|NET|ORG|EDU|BIZ|GOV|MIL|INFO|NAME|ME|TV|US|MOBI)$/,
                                  message: "Formato de correo incorrecto."
                                }
                              })}
                            ></input>
                            <small className='errorMessage'>{errors.email && errors.email.message}</small>

                          </div>
                        </div>
                        <br />
                        {/* Row 2 of form */}
                        <div className='row formRow'>
                          <div className='col'>
                            <h3>Mensaje</h3>
                            <textarea
                              rows={3}
                              name='message'
                              className='form-control formInput'
                              placeholder='Mensaje'
                              onChange={(e) => {
                                console.log(e)
                              }}
                              {...register('message', {
                                required: "El mensaje es requerido."
                              })}
                            ></textarea>
                            <small className='errorMessage'>{errors.message && errors.message.message}</small>
                          </div>
                        </div>
                        <button className="btn btn-dark mt-3" type='submit'>
                          Enviar Correo
                        </button>
                      </form>
                    </div>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default ContactForm;
