import { Field, Form, Formik } from 'formik';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Record, State } from '../../../types/type';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export default function RecordModalFormik({}: Props): ReactElement {
  const categories = useSelector((state: State) => state.categories);

  return (
    <div className='modal' id='recordModal' tabIndex={-1} aria-labelledby='recordModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='recordModalLabel'>
              Add New Account
            </h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <Formik
            initialValues={
              {
                type: '',
                currency: '',
                amount: 0,
                category: { id: '', name: '', isSelected: false },
                date: new Date(),
                icon: '',
                time: new Date(),
                labels: [{ id: '', name: '' }],
                payee: '',
                note: '',
                paymentType: '',
                place: '',
              } as Record
            }
            onSubmit={() => console.log('hi')}
          >
            {({ values }) => (
              <Form>
                <div className='modal-body'>
                  <div className='row align-content-center'>
                    <div className='col-md-6'>
                      <div className='d-flex'>
                        <div className='form-groupx col-6'>
                          <label htmlFor='type' className='form-label'>
                            Type
                          </label>
                          <Field id='type' name='type' value={values.type} as='select' className='form-select'>
                            <option value='expense' selected>
                              Expense
                            </option>
                            <option value='income'>Income</option>
                            <option value='transfer'>Transfer</option>
                          </Field>
                        </div>
                        <div className='form-group col-6'>
                          <label htmlFor='currency' className='form-label'>
                            Currency
                          </label>
                          <Field autoComplete='off' id='currency' name='currency' className='form-control' />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <div className='form-group col-6'>
                          <label htmlFor='category' className='form-label'>
                            Category
                          </label>
                          <Field autoComplete='off' id='category' name='category' as='select' className='form-select'>
                            {categories.map((category, index) => (
                              <option key={category.id} value={category.name}>
                                {category.name}
                              </option>
                            ))}
                          </Field>
                        </div>
                        <div className='form-group col-6'>
                          <label htmlFor='amount' className='form-label'>
                            Amount
                          </label>
                          <Field autoComplete='off' id='amount' name='amount' className='form-control' />
                        </div>
                      </div>

                      <div className='d-flex'>
                        <div className='form-group col-6'>
                          <label htmlFor='date' className='form-label'>
                            Date
                          </label>
                          <Field autoComplete='off' id='date' className='form-control' name='date' />
                        </div>
                        <div className='form-group col-6'>
                          <label htmlFor='icon' className='form-label'>
                            Icon
                          </label>
                          <Field autoComplete='off' id='icon' className='form-control' name='icon' />
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='d-flex'>
                        <div className='form-group col-6'>
                          <label htmlFor='time' className='form-label'>
                            Time
                          </label>
                          <Field autoComplete='off' id='time' className='form-control' name='time' />
                        </div>
                        <div className='form-group col-6'>
                          <label htmlFor='label' className='form-label'>
                            Label
                          </label>
                          <Field autoComplete='off' id='label' className='form-control' name='label' />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <div className='form-group col-6'>
                          <label htmlFor='payee' className='form-label'>
                            Payee
                          </label>
                          <Field autoComplete='off' id='payees' name='payee' className='form-control' />
                        </div>
                        <div className='form-group col-6'>
                          <label htmlFor='note' className='form-label'>
                            Note
                          </label>
                          <Field autoComplete='off' id='note' name='note' className='form-control' />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <div className='form-group col-6'>
                          <label htmlFor='paymentType' className='form-label'>
                            Payment Type
                          </label>
                          <Field autoComplete='off' id='paymentType' name='paymentType' className='form-control' />
                        </div>
                        <div className='form-group col-6'>
                          <label htmlFor='place' className='form-label'>
                            Place
                          </label>
                          <Field autoComplete='off' id='place' name='place' className='form-control' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button type='submit' className='btn btn-primary'>
                    Submit
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
