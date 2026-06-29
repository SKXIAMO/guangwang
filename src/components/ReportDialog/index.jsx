import React from 'react'
import { Popup } from 'antd-mobile'
import bgcImage from '@/assets/reportdialogbgc.png'
import optionsBgImage from '@/assets/reportchoosebgc.png'

import './index.css'

export default function ReportDialog({ open, onClose, onSelect }) {
  return (
    <Popup visible={open} onMaskClick={onClose} position="bottom" bodyClassName="report-popup">
      <div className="report-container">
        <div className="report-options">
          <button
            className="report-btn"
            onClick={() => {
              onSelect?.(0)
              onClose?.()
            }}
          >
            Report
          </button>

          <button
            className="report-btn"
            onClick={() => {
              onSelect?.(1)
              onClose?.()
            }}
          >
            Block
          </button>
        </div>

        <div className="report-gap" />

        <button className="report-cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Popup>
  )
}
