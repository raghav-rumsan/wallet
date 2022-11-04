import PropTypes from "prop-types";
import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";
import Head from "next/head";

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | ${process.env.REACT_APP_NAME}`}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
