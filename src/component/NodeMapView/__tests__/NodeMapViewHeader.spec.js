import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NodeMapView from '../NodeMapView';



describe('<NodeMapView />', () => {
  let getByTestId;


  describe('Test NodeMapView', () => {

    beforeEach(async () => {
        
        ({ getByTestId } = render(<NodeMapView />));
    });

    it('Check Bar Chart Wrapper', () => {
        expect(getByTestId('bar-chart-wrapper'))

        expect(getByTestId('bar-chart-wrapper').classList.contains('bar-chart-wrapper'))
    });

  });
});