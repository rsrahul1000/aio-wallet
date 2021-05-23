import { ErrorMessage, Field, Form, Formik } from 'formik';
import randomColor from 'randomcolor';
import { ReactElement, useRef, useState } from 'react';
import { CirclePicker, ColorResult, SketchPicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { createAccountActionCreator } from '../../redux/redux-toolkit';
import * as yup from 'yup';
import { Account } from '../../../types/type';
import NativeClickListener from '../utils/NativeClickListener';
import Dropdown from '../utils/Dropdown';
import { Dialog } from '../utils/Dialog';
// import $ from 'jquery';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const AccountModalSchema = yup.object().shape({
  name: yup.string().required(),
  color: yup.string().required(),
  accType: yup.string().required('account type is a required field'),
  currAmount: yup.number().required('current amount is a required field'),
  currency: yup.string().required(),
});

// const ColorPickerField: React.FC<FieldAttributes<{}>> = ({ placeholder, className, ...props }) => {
//   const [field, meta] = useField(props);
//   const errorText = meta.error && meta.touched ? meta.error : '';
//   return <></>;
// };

export default function AccountModalFormik({}: Props): ReactElement {
  const dispatch = useDispatch();
  const modal = useRef<HTMLDivElement>(null);
  const [toggleColorPicker, setToggleColorPicker] = useState(false);
  const handleSubmit = (values: Account) => {
    dispatch(createAccountActionCreator(values));
    $('#accountModal').modal('hide');
  };

  return (
    <div ref={modal} className='modal' id='accountModal' tabIndex={-1} aria-labelledby='accountModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='accountModalLabel'>
              Add New Account
            </h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          {/* <div>
            <div className='dropdown-container' style={{ float: 'left' }}>
              <div className='dropdown-trigger'>
                <button onClick={() => setToggleColorPicker(true)}>dropdown trigger (listen outside)</button>
              </div>
              {toggleColorPicker && (
                <NativeClickListener onClick={() => setToggleColorPicker(false)}>
                  <div className='dropdown-body'>
                    <div>
                      <input type='checkbox' />
                      <span>option 1</span>
                    </div>
                    <div>
                      <input type='checkbox' />
                      <span>option 2</span>
                    </div>
                    <button onClick={() => setToggleColorPicker(false)}>OK</button>
                  </div>
                </NativeClickListener>
              )}
            </div>
          </div>
          <Dropdown
            placeholder='Select Fruit'
            value={'hi'}
            onChange={v => console.log(v)}
            options={['Apple', 'Banana', 'Orange', 'Mango']}
          /> */}
          {/* <Dialog
            onClose={() => setToggleColorPicker}
            children={
              <button type='button' className='btn btn-default'>
                button
              </button>
            }
          /> */}
          <Formik
            initialValues={{ id: null, name: '', color: randomColor(), accType: '', currAmount: 0, currency: '' } as Account}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
            enableReinitialize={true}
            validationSchema={AccountModalSchema}
          >
            {({ values, handleSubmit, handleReset, isValid, dirty, touched, isSubmitting, setFieldValue, errors }: any) => (
              <Form onSubmit={handleSubmit}>
                <div className='modal-body'>
                  <div className='row align-content-center'>
                    <div className='mb-3 col-8 d-inline-block'>
                      <label className='col-form-label col-12' htmlFor='name'>
                        Account Name
                      </label>
                      <Field
                        autoComplete='off'
                        id='name'
                        name='name'
                        placeholder='Account Name'
                        className={touched.name && errors.name ? 'form-control is-invalid' : 'form-control'}
                      />
                      {touched.name && errors.name ? <div className='invalid-feedback'>{errors.name}</div> : null}
                    </div>
                    <div className='mb-3 col-4 d-inline-block'>
                      <label htmlFor='color-picker' className='col-form-label col-12'>
                        Color
                      </label>
                      <div className='btn-group d-inline' id='color-picker'>
                        <button
                          type='button'
                          className='btn align-self-center'
                          style={{ backgroundColor: `${values.color}`, width: '60px', height: '20px' }}
                        ></button>
                        <button
                          type='button'
                          className='btn dropdown-toggle dropdown-toggle-split'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <span className='visually-hidden'>Toggle Dropdown</span>
                        </button>
                        {/* {toggleColorPicker && (
                          <Field
                            component={SketchPicker}
                            name='color'
                            color={values.color}
                            onChangeComplete={(colorResult: ColorResult) => {
                              setFieldValue(values.color, colorResult.hex);
                            }}
                            onChange={(e: any) => {
                              values.color = e.hex;
                            }}
                          />
                        )} */}
                        <ul className='dropdown-menu' style={{ outline: 'none' }}>
                          <li>
                            <a className='dropdown-item onClickColor'>
                              {/* <CirclePicker
                              color={values.color}
                              onChangeComplete={(colorResult: ColorResult) => setFieldValue(values.color, colorResult.hex)}
                            /> */}
                              <Field
                                component={CirclePicker}
                                name='color'
                                color={values.color}
                                onChangeComplete={(colorResult: ColorResult) => {
                                  setFieldValue(values.color, colorResult.hex);
                                }}
                                onChange={(e: any) => {
                                  values.color = e.hex;
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='row align-content-center'>
                    <div className='mb-3 col-6 d-inline-block'>
                      <label htmlFor='account-type' className='col-form-label'>
                        Account Type
                      </label>
                      <Field
                        autoComplete='off'
                        name='accType'
                        placeholder='Account Type'
                        className={touched.accType && errors.accType ? 'form-control is-invalid' : 'form-control'}
                      />
                      {/* <ErrorMessage name='accType' /> */}
                      {touched.accType && errors.accType ? <div className='invalid-feedback'>{errors.accType}</div> : null}
                    </div>
                    <div className='mb-3 col-6 d-inline-block'>
                      <label htmlFor='currency' className='col-form-label'>
                        Currency
                      </label>
                      <Field
                        autoComplete='off'
                        id='currency'
                        name='currency'
                        placeholder='Currency'
                        className={touched.currency && errors.curreency ? 'form-control is-invalid' : 'form-control'}
                      />
                      {/* <ErrorMessage name='currency' /> */}
                      {touched.currency && errors.currency ? <div className='invalid-feedback'>{errors.currency}</div> : null}
                    </div>
                  </div>
                  <div className='row align-content-center'>
                    <div className='mb-3 col-12'>
                      <label htmlFor='currAmount' className='col-form-label'>
                        Current Amount
                      </label>
                      <Field
                        autoComplete='off'
                        id='currAmount'
                        name='currAmount'
                        placeholder='Current Amount'
                        className={touched.currAmount && errors.currAmount ? 'form-control is-invalid' : 'form-control'}
                      />
                      {/* <ErrorMessage name='currAmount' /> */}
                      {touched.currAmount && errors.currAmount ? <div className='invalid-feedback'>{errors.currAmount}</div> : null}
                    </div>
                  </div>
                </div>
                <div className='modal-footer justify-content-between'>
                  <div>
                    <button
                      disabled={!isValid || !dirty || isSubmitting}
                      data-toggle='modal'
                      data-target='#accountModal'
                      // data-bs-dismiss='modal'
                      type='submit'
                      className='btn btn-primary mr-2'
                    >
                      {isSubmitting ? 'Please wait...' : 'Submit'}
                    </button>
                    <button type='button' onClick={handleReset} className='btn btn-dark'>
                      Reset
                    </button>
                  </div>

                  <button type='button' onClick={handleReset} className='btn btn-secondary' data-bs-dismiss='modal'>
                    Close
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
