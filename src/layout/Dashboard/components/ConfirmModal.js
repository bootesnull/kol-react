import React from "react";

const ConfirmModal = ({showModalProp, modalName}) => {
  console.log(modalName)

    return (
      
        <div className="modal-open overflow-hidden">
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header px-4">
                  <h5 className="modal-title theme-color">{modalName}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    // onClick={showDealModal}
                  ></button>
                </div>

              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
    );
}

export default ConfirmModal; 