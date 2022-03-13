import { CLIENT_SIDE_API_BASE_URL } from '../constants'

const coachingRequest = {
  create: 'coachingRequests/create',
}

const recruitmentRequest = {
  create: 'recruitmentRequests/create',
}

const contactRequest = {
  create: 'contactRequests/create',
}

const auth = {
  fetchUserProfile: 'auth/me',
  login: 'auth/login',
  signUp: 'auth/register',
}

const club = {
  create: 'clubs/create',
}

const booking = {
  create: 'booking/create',
  delete: 'booking/delete',
}

export default {
  baseApiUrl: `${CLIENT_SIDE_API_BASE_URL()}/`,
  coachingRequest,
  recruitmentRequest,
  auth,
  club,
  contactRequest,
  booking,
}
