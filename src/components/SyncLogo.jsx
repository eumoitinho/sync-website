const logoSources = {
  color: '/logo/svg/sy-logo-color.svg',
  dark: '/logo/svg/sy-logo-dark.svg',
  white: '/logo/svg/sy-logo-white.svg',
}

function SyncLogo({ variant = 'color', className = '' }) {
  return (
    <svg
      aria-label="Sync"
      role="img"
      viewBox="215 185 760 335"
      className={className}
    >
      <image
        href={logoSources[variant]}
        width="1200"
        height="700"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  )
}

export default SyncLogo
