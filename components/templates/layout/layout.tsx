import * as React from 'react';
import Head from 'next/dist/next-server/lib/head';
import {PropsWithChildren} from 'react';
import Header from '~components/organisms/header/header';
import Footer from '~components/organisms/footer/footer';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {Colors} from '~models/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: `#${Colors.primary}`,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: `#${Colors.secondary}`,
            main: `#${Colors.secondary}`,
            // dark: will be calculated from palette.secondary.main,
            contrastText: `#${Colors.light}`,
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

const Layout = ({navItems, title = '', description = '', onItemClicked, children}: PropsWithChildren<any>) => {
    return <>
        <ThemeProvider theme={theme}>
        <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                rel="stylesheet"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Header navItems={navItems} onItemClicked={(href) => onItemClicked(href)}/>
        <main>
            {children}
        </main>
        <Footer navItems={navItems} onItemClicked={(href) => onItemClicked(href)}/>
        </ThemeProvider>
    </>
};

export default Layout
