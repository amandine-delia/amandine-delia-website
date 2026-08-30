'use client'
import { useEffect } from 'react'

declare const SimplybookWidget: new (config: Record<string, unknown>) => unknown

const SIMPLYBOOK_SCRIPT_SRC = '//widget.simplybook.it/v2/widget/widget.js'

function initSimplybookWidget() {
  new SimplybookWidget({
    widget_type: 'iframe',
    url: 'https:\/\/amandinedelia.simplybook.it',
    theme: 'blur',
    theme_settings: {
      timeline_hide_unavailable: '1',
      hide_past_days: '0',
      timeline_modern_display: 'as_slots',
      sb_base_color: '#754d64',
      display_item_mode: 'block',
      body_bg_color: '#f8f7fa',
      dark_font_color: '#665b64',
      light_font_color: '#ffffff',
      btn_color_1: '#e6cfd3',
      sb_company_label_color: '#706069',
      hide_img_mode: '1',
      sb_busy: '#9e7575',
      sb_available: '#f0e2ec',
    },
    timeline: 'modern',
    datepicker: 'top_calendar',
    is_rtl: false,
    app_config: { clear_session: 0, allow_switch_to_ada: 0, predefined: [] },
    container_id: 'sbw_89ixx1',
  })
}

export function SimplyBookingWidget() {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${SIMPLYBOOK_SCRIPT_SRC}"]`
    )

    if (existingScript) {
      if (typeof SimplybookWidget !== 'undefined') {
        initSimplybookWidget()
      } else {
        existingScript.addEventListener('load', initSimplybookWidget)
        return () => {
          return existingScript.removeEventListener('load', initSimplybookWidget)
        }
      }
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.src = SIMPLYBOOK_SCRIPT_SRC
    script.onload = initSimplybookWidget
    document.head.appendChild(script)
  }, [])

  return (
    <div id="sbw_89ixx1">
      {/* this content is unmounted soon as we load the SimplyBooking script */}
      <div className="flex items-center justify-center mt-[40%]">LOADING...</div>
    </div>
  )
}
