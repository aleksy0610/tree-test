import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CompletedSignUps from '../CompletedSignUps';



describe('<CompletedSignUps />', () => {
  let getByTestId;


  describe('Test CompletedSignUps', () => {

    beforeEach(async () => {
        
        ({ getByTestId } = render(<CompletedSignUps NODE_ENV='test'/>));
    });

    it('Check registered users', () => {
        expect(getByTestId('signup-completed').innerHTML).toEqual('1327');
    });


  });
});