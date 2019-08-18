import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import *  as yup from 'yup';
import { Formik } from 'formik';
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/actions";

const schema = yup.object({
  name: yup.string().required(),
  gender: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  number: yup.number().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  zipcode: yup.string().required(),
});

const UserAdd = ({
  addUser
}) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={({
        name,
        gender,
        email,
        phone,
        number,
        street,
        city,
        zipcode
      }) => {
        addUser({
          name,
          gender,
          email,
          phone,
          address: [{
            number,
            street,
            city,
            zipcode
          }]
        })
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <h3>Add user</h3>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormikName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                placeholder="Name"
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.gender}
                isValid={touched.gender && !errors.gender}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikPhone">
              <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                  isValid={touched.phone && !errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormikStreet">
              <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Street"
                  name="street"
                  value={values.street}
                  onChange={handleChange}
                  isInvalid={!!errors.street}
                  isValid={touched.street && !errors.street}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.street}
                </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormikCity">
              <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                  isValid={touched.city && !errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikZipcode">
              <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zipcode"
                  name="zipcode"
                  value={values.zipcode}
                  onChange={handleChange}
                  isInvalid={!!errors.zipcode}
                  isValid={touched.zipcode && !errors.zipcode}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zipcode}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikNumber">
              <Form.Label>Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Number"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  isInvalid={!!errors.number}
                  isValid={touched.number && !errors.number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.number}
                </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Add User!</Button>
        </Form>
      )}
    </Formik>
  );
}

export default connect(
  null,
  { addUser }
)(UserAdd);
