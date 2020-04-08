const path = require('path');
const constants = require('./constants');

const rootPath = path.resolve(__dirname, '../..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

exports.rootPath = rootPath;
exports.resolveFromRootPath = resolveFromRootPath;
exports.srcPath = resolveFromRootPath('src');
exports.srcAssetsPath = resolveFromRootPath('src', constants.PUBLIC_FOLDER_NAME);

exports.distPath = resolveFromRootPath(constants.DIST_FOLDER_NAME);
exports.contentPath = resolveFromRootPath(constants.CONTENT_FOLDER_NAME);
exports.publicImagesPathRelative = `${constants.PUBLIC_FOLDER_NAME}/${constants.IMAGES_FOLDER_NAME}`;
exports.publicImagesPathRelative = `${constants.PUBLIC_FOLDER_NAME}/${constants.IMAGES_FOLDER_NAME}`;
