import moment from 'moment';
import React, { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  title: string;
}

export const PageHeader: React.FC<Props> = ({ title }: Props) => {
  const [selectDateRange, setSelectDateRange] = useState({ start: moment().subtract(29, 'days'), end: moment() });
  const handleDateRangeSelectionCallback = (start: moment.Moment, end: moment.Moment) => {
    setSelectDateRange({ start, end });
  };
  const { start, end } = selectDateRange;
  const label = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');

  return (
    <div className='d-sm-flex align-items-center justify-content-between mb-4'>
      <div className='mb-sm-2'>
        <h1 className='h3 mb-0 text-gray-800'>{title}</h1>
      </div>
      <DateRangePicker
        initialSettings={{
          startDate: start.toDate(),
          endDate: end.toDate(),
          ranges: {
            Today: [moment().toDate(), moment().toDate()],
            Yesterday: [moment().subtract(1, 'days').toDate(), moment().subtract(1, 'days').toDate()],
            'Last 7 Days': [moment().subtract(6, 'days').toDate(), moment().toDate()],
            'Last 30 Days': [moment().subtract(29, 'days').toDate(), moment().toDate()],
            'This Month': [moment().startOf('month').toDate(), moment().endOf('month').toDate()],
            'Last Month': [moment().subtract(1, 'month').startOf('month').toDate(), moment().subtract(1, 'month').endOf('month').toDate()],
          },
        }}
        onCallback={handleDateRangeSelectionCallback}
      >
        <div
          id='reportrange'
          className='col-auto ml-sm-auto'
          style={{
            background: '#fff',
            cursor: 'pointer',
            padding: '5px 10px',
            border: '1px solid #ccc',
            width: 'fit-content',
          }}
        >
          <i className='fa fa-calendar'></i>&nbsp;
          <span>{label}</span> <i className='fa fa-caret-down'></i>
        </div>
      </DateRangePicker>
    </div>
  );
};
