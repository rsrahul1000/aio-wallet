import React from 'react';
import { Account } from '../../../types/type';
interface Props {
  accounts: Account[];
}

const AccountCard: React.FC<Props> = ({ accounts }: Props) => {
  return (
    <>
      {accounts.map(account => {
        return (
          <div className='col-xl-3 col-md-6 mb-4' key={account.id}>
            <div className='card shadow h-100 py-2' style={{ borderLeftColor: `${account.color}`, borderLeftWidth: '4px' }}>
              <div className='card-body'>
                <div className='row no-gutters align-items-center'>
                  <div className='col mr-2'>
                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>{account.name}</div>
                    <div className='h5 mb-0 font-weight-bold text-gray-800'>
                      {account.currAmount} {account.currency}
                    </div>
                  </div>
                  <div className='col-auto'>
                    <i className='fas fa-dollar-sign fa-2x text-gray-300'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AccountCard;
