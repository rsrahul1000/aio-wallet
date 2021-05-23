import React from 'react';
import { Record } from '../../../types/type';
import moment from 'moment';
interface Props {
  records: Record[];
}

export const Records: React.FC<Props> = ({ records }: Props) => {
  return (
    <div className='container-fluid p-0'>
      {records.map(record => {
        return (
          <div className='card border-left-warning shadow mb-1' key={record.id}>
            <div className='card-body'>
              <div className='row'>
                <div className='d-flex justify-content-between'>
                  <h6 className='text-muted card-subtitle mb-2 wrap'>{moment(record.date).format('LL')}</h6>
                  <h6 className='text-muted card-subtitle mb-2 wrap'>{record.remainingBal}</h6>
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-utensils'></i>
                </div>
                <div className='col-2'>{record.type}</div>
                <div className='col-2'>{record.category.name}</div>
                <div className='col-5'>{record.note}</div>
                <div className='col-1'>{record.amount}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
