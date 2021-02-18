import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NodeMapViewHeader from '../NodeMapViewHeader';



describe('<NodeMapViewHeader />', () => {
  let getByTestId;


  describe('Test NodeMapViewHeader', () => {

    beforeEach(async () => {
        
        ({ getByTestId } = render(<NodeMapViewHeader />));
    });

    it('Check Info Circle', () => {
        expect(getByTestId('info-circle').classList.contains('small-icon'))
    });

    it('Check Node Mode', () => {
        expect(getByTestId('select-node').innerHTML).toContain('Node1');
        expect(getByTestId('select-node').innerHTML).toContain('Node2');
        // expect(getByTestId('select-node').innerHTML).toContain('Node3');
    });


  });
});