import React from 'react';

import { FiArrowUp } from 'react-icons/fi';

function CompletedSignUpsLeft() {
    return (
        <div className="side-part">
            <div className="display-4 font-weight-bold" data-testid="signup-completed">1327</div>
            <div className="font-weight-bold p-1">Sign-ups completed</div>
            <div className="d-flex align-items-center">
            <div className="up-arrow-icon flex-center">
                <FiArrowUp className="text-success" data-testid="fi-arrow-up"/>
            </div>
            <div className="small ml-2">
                You have a 11% growth in comparison with previous month.
                </div>
            </div>
        </div>
            
    )
  }
  
  export default CompletedSignUpsLeft;