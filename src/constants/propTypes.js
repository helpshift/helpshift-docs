import PropTypes from "prop-types";

export const bookShape = PropTypes.shape({
  title: PropTypes.string,
  hide: PropTypes.bool,
  link: PropTypes.string,
  color: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
});
