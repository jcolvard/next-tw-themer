module.exports = {
  hooks: {
    readPackage(pkg) {
      pkg.settings = pkg.settings || {};
      pkg.settings.autoInstallPeers = true;
      return pkg;
    },
  },
};
