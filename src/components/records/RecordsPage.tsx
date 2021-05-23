import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../types/type';
import { Records } from '../dashboard/Records';
import RecordModalFormik from '../modals/RecordModalFormik';
import { PageHeader } from '../PageHeader';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const RecordsPage: React.FC<Props> = (props: Props) => {
  const records = useSelector((state: State) => state.records);
  return (
    <div className='container-fluid'>
      <PageHeader title='Records' />
      <div className='row m-3'>
        <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#recordModal' data-bs-whatever='@mdo'>
          New Record
        </button>
        <RecordModalFormik />
      </div>
      <Records records={records} />
    </div>
  );
};
