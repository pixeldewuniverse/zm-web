import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zaresh Meridian & Co.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0E0D0B',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#B8912A',
            letterSpacing: '0.02em',
            marginBottom: 24,
          }}
        >
          Zaresh Meridian &amp; Co.
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'rgba(245,241,234,0.6)',
            letterSpacing: '0.15em',
          }}
        >
          Build · Market · Automate
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
