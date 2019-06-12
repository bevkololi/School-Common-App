const ROUTES = {
  index: '/',
  auth: {
    login: '/login',
    register: '/register',
  },
  schools: {
    create: '/schools/new',
    update: '/schools/edit/:slug',
    view: '/schools/view/:slug',
    all: '/schools/all/:pageNumber',
  },
  // schools: '/schools',
  // school: '/school',
  album: '/album',
  events: '/events',
  updates: '/updates',
  uniforms: '/uniforms',
  contact: '/contact',
  // addschool: '/school/new',
  // editschool: '/editschool',
  addevent: '/addevent',
  addupdate: '/addupdate',
  adduniforms: '/adduniforms',
  profile: '/profile/update'
};
export default ROUTES;
