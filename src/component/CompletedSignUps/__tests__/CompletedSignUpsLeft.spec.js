import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CompletedSignUpsLeft from '../CompletedSignUpsLeft';



describe('<CompletedSignUpsLeft />', () => {
  let getByTestId;


  describe('Test CompletedSignUpsLeft', () => {

    beforeEach(async () => {
        
        ({ getByTestId } = render(<CompletedSignUpsLeft />));
    });

    it('Check Arrow Up', () => {
        expect(getByTestId('fi-arrow-up'))

        expect(getByTestId('fi-arrow-up').classList.contains('text-success'))
    });

  });
});