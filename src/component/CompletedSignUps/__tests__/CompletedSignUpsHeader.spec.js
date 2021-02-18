import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CompletedSignUpsHeader from '../CompletedSignUpsHeader';



describe('<CompletedSignUpsHeader />', () => {
  let getByTestId;


  describe('Test CompletedSignUpsHeader', () => {

    beforeEach(async () => {
        
        ({ getByTestId } = render(<CompletedSignUpsHeader />));
    });

    it('Check Info Circle', () => {
        expect(getByTestId('info-circle').classList.contains('small-icon'))
    });

    it('Check DateMode', () => {
        expect(getByTestId('select-date').innerHTML).toContain('Choose data sample');
        expect(getByTestId('select-date').innerHTML).toContain('Last 30 days');
        expect(getByTestId('select-date').innerHTML).toContain('24 Hours');
    });


  });
});