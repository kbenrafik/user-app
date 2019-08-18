import * as faker from 'faker';
import *  as yup from 'yup';

faker.locale = "nl";

/**
 * Address schema validation
 */
export const addressSchema = yup.object({
  number: yup.number().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  zipcode: yup.string().required(),
});

/**
 * User schema validation
 */
export const userSchema = yup.object({
  name: yup.string().required(),
  gender: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  address: yup
    .array()
    .of(addressSchema)
    .required()
});

/**
 * Get users using data mock 'faker'
 * @param {number} number - number of users
 * @returns {array} - users
 */
export const getUsersMock = (number) => {
  if(!Number.isInteger(number)) {
    return Promise.reject('number must be integer');
  }
  let users = [];

  for(let i = 0; i < number; i++) {
    users.push({
      "name": faker.name.findName(),
      "gender": "male",
      "email": faker.internet.email(),
      "phone": faker.phone.phoneNumber(),
      "address": [{
        "number": Math.floor((Math.random() * 100) + 1),
        "street": faker.address.streetName(),
        "city": faker.address.city(),
        "zipcode": faker.address.zipCode(),
      }]
    })
  }

  return users
}
