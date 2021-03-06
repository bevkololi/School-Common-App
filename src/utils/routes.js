const ROUTES = {
  index: '/',
  auth: {
    login: '/login',
    register: '/register',
  },
  schools: {
    create: '/schools/new',
    update: '/schools/edit/',
    view: '/schools/view/:slug',
    all: '/schools/all/:pageNumber',
  },
  // schools: '/schools',
  // school: '/school',
  album: '/album',
  events: '/events/:slug',
  updates: '/updates/',
  uniforms: '/uniforms/:slug',
  contact: '/contact',
  // addschool: '/school/new',
  // editschool: '/editschool',
  addevent: '/addevent/',
  addupdate: '/addupdate',
  adduniforms: '/adduniforms/',
  profile: '/profile/update'
};
export default ROUTES;
