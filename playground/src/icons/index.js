const req = require.context('./svg', true, /\.svg$/)
const requireAll = requireContext =>
  requireContext.keys().forEach(requireContext)
requireAll(req)
