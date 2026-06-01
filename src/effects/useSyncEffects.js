import { useEffect } from 'react'

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))

const splitRevealIds = [
  'HeroTitle',
  'ProcessHeadline',
  'ExpertiseIntro',
  'TestimonialsHeadline',
  'BlogHeadline',
  'FooterHeadline',
]

const revealIds = [
  'AboutSidebar',
  'AboutMetrics',
  'FeaturedProjectsRowOne',
  'FeaturedProjectsRowTwo',
  'DigitalCampaignsCard',
  'GrowthStrategyCard',
  'BrandConsultingCard',
  'ProcessSteps',
  'ExpertiseSection',
  'TestimonialsSection',
  'BlogIntro',
  'BlogPostGrid',
  'FooterCallToAction',
  'FooterBottom',
]

export function useSyncEffects() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrame = 0
    const cleanup = []

    root.classList.add('sync-effects')
    requestAnimationFrame(() => root.classList.add('sync-effects-ready'))

    const observedTargets = new Map()
    const getObservableElement = (element) => {
      const rect = element.getBoundingClientRect()
      if ((rect.width || rect.height) || !element.firstElementChild) {
        return element
      }

      return element.firstElementChild
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleTarget = observedTargets.get(entry.target) ?? entry.target
            visibleTarget.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    const observeVisibility = (element) => {
      const observable = getObservableElement(element)
      observedTargets.set(observable, element)
      revealObserver.observe(observable)
    }

    splitRevealIds.forEach((id) => {
      const element = document.querySelector(`[data-component-id="${id}"]`)
      if (!element) return

      element.classList.add('split-reveal')
      element.querySelectorAll('span').forEach((span, index) => {
        span.style.setProperty('--reveal-index', index)
      })
      observeVisibility(element)
    })

    revealIds.forEach((id) => {
      const element = document.querySelector(`[data-component-id="${id}"]`)
      if (!element) return

      element.classList.add('reveal-on-scroll')
      observeVisibility(element)
    })

    cleanup.push(() => revealObserver.disconnect())

    const parallaxElements = [...document.querySelectorAll('.js-parallax')]
    const wordReveal = document.querySelector(
      '[data-component-id="AboutStatement"] > div',
    )
    const wordSpans = wordReveal ? [...wordReveal.querySelectorAll('span')] : []

    if (wordReveal) {
      wordReveal.classList.add('word-reveal')
      wordSpans.forEach((span, index) => {
        span.style.setProperty('--word-index', index)
      })
    }

    const updateScrollEffects = () => {
      animationFrame = 0

      if (!reduceMotion.matches) {
        const viewportHeight = window.innerHeight || 1

        parallaxElements.forEach((element) => {
          const rect = element.getBoundingClientRect()
          const centerOffset =
            viewportHeight / 2 - (rect.top + rect.height / 2)
          const y = clamp(centerOffset * 0.055, -120, 120)
          element.style.transform = `translate3d(0, ${y}px, 0)`
        })
      }

      if (wordReveal && wordSpans.length) {
        const rect = wordReveal.getBoundingClientRect()
        const progress = clamp(
          (window.innerHeight * 0.86 - rect.top) /
            (rect.height + window.innerHeight * 0.22),
        )

        wordSpans.forEach((span, index) => {
          const start = index / wordSpans.length
          const localProgress = clamp((progress - start) * 5)
          span.style.opacity = String(0.2 + localProgress * 0.8)
          span.style.filter = `blur(${(1 - localProgress) * 8}px)`
          span.style.transform = `translateY(${(1 - localProgress) * 10}px)`
        })
      }
    }

    const requestScrollUpdate = () => {
      if (animationFrame) return
      animationFrame = requestAnimationFrame(updateScrollEffects)
    }

    updateScrollEffects()
    window.addEventListener('scroll', requestScrollUpdate, { passive: true })
    window.addEventListener('resize', requestScrollUpdate)
    cleanup.push(() => {
      window.removeEventListener('scroll', requestScrollUpdate)
      window.removeEventListener('resize', requestScrollUpdate)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    })

    const nav = document.querySelector('.js-floating-nav')
    const selection = document.querySelector('.js-floating-selection')

    if (nav && selection) {
      const links = [...nav.querySelectorAll('a')]
      const moveSelection = (link) => {
        const navRect = nav.getBoundingClientRect()
        const linkRect = link.getBoundingClientRect()
        selection.style.width = `${linkRect.width}px`
        selection.style.transform = `translate3d(${linkRect.left - navRect.left}px, 0, 0)`
      }

      const pointerHandlers = links.map((link) => {
        const handler = () => moveSelection(link)
        link.addEventListener('pointerenter', handler)
        return [link, handler]
      })
      const leaveHandler = () => links[0] && moveSelection(links[0])

      nav.addEventListener('pointerleave', leaveHandler)
      links[0] && moveSelection(links[0])

      cleanup.push(() => {
        pointerHandlers.forEach(([link, handler]) => {
          link.removeEventListener('pointerenter', handler)
        })
        nav.removeEventListener('pointerleave', leaveHandler)
      })
    }

    if (
      !reduceMotion.matches &&
      window.matchMedia('(pointer: fine)').matches
    ) {
      const cursor = document.createElement('div')
      cursor.className = 'sync-cursor'
      document.body.appendChild(cursor)

      let cursorFrame = 0
      let nextX = 0
      let nextY = 0

      const updateCursor = () => {
        cursorFrame = 0
        cursor.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`
      }

      const moveCursor = (event) => {
        nextX = event.clientX
        nextY = event.clientY
        cursor.classList.add('is-active')

        if (!cursorFrame) {
          cursorFrame = requestAnimationFrame(updateCursor)
        }
      }

      const showCursor = () => cursor.classList.add('is-hovering')
      const hideCursor = () => cursor.classList.remove('is-hovering')

      window.addEventListener('pointermove', moveCursor, { passive: true })
      const hoverTargets = [
        ...document.querySelectorAll('a, button, [role="button"]'),
      ]

      hoverTargets.forEach((element) => {
        element.addEventListener('pointerenter', showCursor)
        element.addEventListener('pointerleave', hideCursor)
      })

      cleanup.push(() => {
        window.removeEventListener('pointermove', moveCursor)
        hoverTargets.forEach((element) => {
          element.removeEventListener('pointerenter', showCursor)
          element.removeEventListener('pointerleave', hideCursor)
        })
        cursor.remove()
      })
    }

    return () => {
      cleanup.forEach((fn) => fn())
      root.classList.remove('sync-effects', 'sync-effects-ready')
    }
  }, [])
}
