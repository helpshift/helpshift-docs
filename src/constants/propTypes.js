import PropTypes from "prop-types";

export const sdkShape = PropTypes.shape({
  title: PropTypes.string,
  hide: PropTypes.bool,
  link: PropTypes.string,
  color: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
});
