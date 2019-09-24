import React from 'react';
import PropTypes from 'prop-types';
// import { childrenPropType } from "../../utils/propTypes";

const Modal = ({
  id,
  children,
  title,
  bottomSheet,
  fixedFooter,
  footer,
  event
}) => (
    // <div id={id} className={`modal ${fixedFooter && 'modal-fixed-footer'} ${bottomSheet && 'bottom-sheet'}`}>
    //   <div className="modal-content">
    //     <h4>{ title }</h4>
    //     { children }
    //   </div>
    //   {
    //     footer && (
    //       <div className="modal-footer">
    //         {footer}
    //       </div>
    //     )
    //   }
    // </div>
    <div className="modal" id={id} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
          </div>
          <div className="modal-body">
            {children}
          </div>
          {
            footer && (
              <div className="modal-footer">
                {footer}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );

Modal.defaultProps = {
  bottomSheet: false,
  fixedFooter: false,
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  bottomSheet: PropTypes.bool,
  fixedFooter: PropTypes.bool,
  //   footer: childrenPropType.isRequired,
};

export default Modal;
