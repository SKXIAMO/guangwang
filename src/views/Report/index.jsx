import React, { useMemo, useState } from 'react'
import NavBar from '@/components/NavBar'
import { useOtherStore } from '@/stores/other'
import { useUIStore } from '@/stores/ui'
import './index.css'

export default function Report() {
  const reportContent = useOtherStore((s) => s.other?.reportContent || [])
  const ui = useUIStore()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [inputText, setInputText] = useState('')

  const selectedLabel = useMemo(
    () => reportContent[selectedIndex] || '',
    [reportContent, selectedIndex],
  )

  function handleSubmit() {
    if (ui.loading) return
    ui.showLoading()

    const delay = Math.floor(Math.random() * 1500) + 500
    setTimeout(() => {
      ui.hideLoading()
      ui.showToast('Report successful')

      void selectedLabel
      void inputText
    }, delay)
  }

  return (
    <div className="report-page">
      <NavBar />
      <div className="report-content-wrap">
        <div className="report-grid">
          {reportContent.map((item, index) => (
            <div
              key={index}
              className={`report-grid-item ${selectedIndex === index ? 'selected' : ''}`}
              onClick={() => setSelectedIndex(index)}
              role="button"
              tabIndex={0}
            >
              <div className="report-item-text">{item}</div>
            </div>
          ))}
        </div>

        <div className="report-input-title">Supplementary description</div>
        <div className="report-input-box">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="report-input-field"
            maxLength={150}
            placeholder="Supplementary description (optional)"
          />
          <div className="report-char-count">{inputText.length}/150</div>
        </div>

        <button type="button" className="report-submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}
