import getConfig from 'next/config'
import absoluteUrl from 'next-absolute-url'

export const ABOUT_TAB = 1
// const RECOMMENDATION_TAB = 2
export const BIOGRAPHY_TAB = 3
export const CALENDAR_TAB = 4
export const SUCCESS_BOOKING_TAB = 5
export const CONTACT_TAB = 6
export const SUCCESS_CONTACT_TAB = 7

export const COACH_FILTER_SESSION_TYPE = {
  online: 'En ligne',
  atHome: 'A domicile',
  onsite: 'Salle/terrain',
}

export const FB_PIXEL_ID = 475658260248334

export const ALL = 'Tout'
export const ALPHABETICAL = 'alphabetique'
export const RECOMMEND = 'recommander'
export const EXPERIENCE = 'experience'
export const AVATAR =
  'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue03&eyeType=Close&eyebrowType=AngryNatural&mouthType=Twinkle&skinColor=Light'

export const FRONT_END_PLATFORM_URL = (token) => {
  const { publicRuntimeConfig } = getConfig()

  const { location } = typeof window !== 'undefined' && window
  return 'https://isporit.com/app'
  // if (localStorage) {
  if (
    location &&
    location.host &&
    (location.host.includes('localhost:3001') ||
      location.host.includes('localhost:3000'))
  ) {
    return `https://dev.isporit.com/app?accessToken=${token}`
  }
  return `${publicRuntimeConfig.LOGIN_REDIRECT_URL}?accessToken=${token}`
  // }
  // return publicRuntimeConfig.LOGIN_REDIRECT_URL
}

export const SERVER_SIDE_API_BASE_URL = (req) => {
  const { publicRuntimeConfig } = getConfig()
  const { origin } = absoluteUrl(req)
  // return 'https://dev.isporit.com/api/'
  return 'https://isporit.com/api/'
  if (origin.includes('localhost:3001') || origin.includes('localhost:3000')) {
    return 'https://dev.isporit.com/api/'
  }
  return `${publicRuntimeConfig.PROD_API_URL}/`
}
export const CLIENT_SIDE_API_BASE_URL = () => {
  const { publicRuntimeConfig } = getConfig()

  const { host } = typeof window !== 'undefined' && window.location
  // return 'http://localhost:8080'
  // return 'https://dev.isporit.com/api'
  return 'https://isporit.com/api'
  if (
    host &&
    (host.includes('localhost:3001') || host.includes('localhost:3000'))
  ) {
    return 'https://dev.isporit.com/api'
  }
  return publicRuntimeConfig.PROD_API_URL
}
export const PRIVATECOACH = 'privatecoach'
export const PRIVATESESSION = 'Privatesession'
export const LOOKINGFORWORK = 'lookingforwork'

export const REQUEST_SUCCEEDED = 'request_succeeded'
export const REQUEST_FAILED = 'request_failed'

export const MAX_USERNAME_LENGTH = 60
export const CLUB = 'club'
export const COACH = 'coach'
export const PLAYER = 'player'

export const ages = {
  kids: { label: 'enfants', value: 'kids' },
  junior: { label: 'juniors', value: 'junior' },
  senior: { label: 'séniors', value: 'senior' },
  adult: { label: 'adultes', value: 'adult' },
}

export const levels = {
  beginner: { label: 'débutant', value: 'beginner' },
  intermediate: { label: 'intermédiaire', value: 'intermediate' },
  confirmed: { label: 'confirmé', value: 'confirmed' },
}

export const ORGANIZATIONS_TYPE = [
  {
    value: 'Amateur club',
    text: 'Amateur club',
  },
  {
    value: 'Professional club',
    text: 'Professional club',
  },
  {
    value: 'University',
    text: 'University',
  },
  {
    value: 'Secondary school',
    text: 'Secondary school',
  },
  {
    value: 'Federation',
    text: 'Federation',
  },
  {
    value: 'Other',
    text: 'Other',
  },
]
