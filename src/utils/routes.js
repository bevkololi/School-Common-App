const ROUTES = {
  index: '/',
  auth: {
    login: '/login',
    register: '/register',
  },
  schools: {
    create: '/schools/:slug',
    update: '/schools/edit/:slug',
    view: '/schools/:schoolName/:slug',
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
};
export default ROUTES;
