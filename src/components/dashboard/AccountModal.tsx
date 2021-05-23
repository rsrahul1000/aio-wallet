import randomcolor from 'randomcolor';
import React, { Dispatch, ReactElement, SetStateAction, useEffect } from 'react';
import { CirclePicker, ColorResult } from 'react-color';
import { Account } from '../../../types/type';

interface Props {
  handleAccountModalSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  accountModalStates: Account;
  setAccountModalStates: Dispatch<SetStateAction<Account>>;
}

export default function AccountModal({ handleAccountModalSubmit, accountModalStates, setAccountModalStates }: Props): ReactElement<Props> {
  useEffect(() => {
    setAccountModalStates({
      ...accountModalStates,
      color: accountModalStates.color.length === 0 ? randomcolor() : accountModalStates.color,
    });
  }, []);

  const handleColorChange = (color: ColorResult) => {
    setAccountModalStates({
      ...accountModalStates,
      color: color.hex,
    });
  };

  const handleChangeOfInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountModalStates({
      ...accountModalStates,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='modal' id='accountModal' tabIndex={-1} aria-labelledby='accountModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='accountModalLabel'>
              Add New Account
            </h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-3 col-9'>
                <label htmlFor='recipient-name' className='col-form-label col-10'>
                  Account Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipient-name'
                  placeholder='Account Name'
                  name='name'
                  value={accountModalStates.name || ''}
                  onChange={handleChangeOfInputField}
                />
              </div>
              <div className='mb-3 col-3'>
                <label htmlFor='color-picker' className='col-form-label'>
                  Color
                </label>
                <div className='btn-group' id='color-picker'>
                  <button
                    type='button'
                    className='btn align-self-center'
                    style={{ background: `${accountModalStates.color}`, width: '60px', height: '20px' }}
                  ></button>
                  <button
                    type='button'
                    className='btn dropdown-toggle dropdown-toggle-split'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <span className='visually-hidden'>Toggle Dropdown</span>
                  </button>
                  <ul className='dropdown-menu' style={{ outline: 'none' }}>
                    <li>
                      <a className='dropdown-item'>
                        <CirclePicker color={accountModalStates.color} onChangeComplete={handleColorChange} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='account-type' className='col-form-label'>
                  Account Type
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='account-type'
                  placeholder='Account Type'
                  name='accType'
                  value={accountModalStates.accType || ''}
                  onChange={handleChangeOfInputField}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='account-type' className='col-form-label'>
                  Current Amount
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='account-type'
                  placeholder='Current Amount'
                  name='currAmount'
                  value={accountModalStates.currAmount}
                  onChange={handleChangeOfInputField}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='account-currency' className='col-form-label'>
                  Currency
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='account-currency'
                  placeholder='Currency'
                  name='currency'
                  value={accountModalStates.currency}
                  onChange={handleChangeOfInputField}
                />
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              data-toggle='modal'
              data-target='#accountModal'
              data-bs-dismiss='modal'
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleAccountModalSubmit(e)}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
