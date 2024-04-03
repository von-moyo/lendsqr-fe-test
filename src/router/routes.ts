/**
 * ROUTES
 *
 * ===============================================
 *
 * This object depicts the component url structure.
 * It contains a key-value pair of components and their respective URLs
 *
 */

export const Routes = {
  // Authentication
  home: "/",
  signup: "/signup",
  forgotPassword: "/forgot-password",

  // Dashboard
  users: "/users",
  user: (id: any) => `/user/${id}`,
};