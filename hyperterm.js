module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 11,

    // font family with optional fallbacks
    fontFamily: 'Pragmata Pro, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#c0c5ce',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    foregroundColor: '#c0c5ce',

    // terminal background color
    backgroundColor: '#2b303b',

    // border color (window, tabs)
    borderColor: '#2b303b',

    // custom css to embed in the main window
    css:
 `
        .header_header {
          top: 0;
          right: 0;
          left: 0;
        }
        .tabs_list {
          background-color: #1c1f26 !important;
          border-bottom-color: #1c1f26  !important;
        }
        .tab_tab.tab_active {
          font-weight: 500;
          background-color: #2b303b;
            border-color: #2b303b !important;
        }
        .tab_tab.tab_active::before {
            border-bottom-color: #2b303b ;
        }
    `,

    // custom css to embed in the terminal window
    termCSS:
    `
    .cursor-node {
        mix-blend-mode: difference;
    }
    * {
        text-rendering: optimizeLegibility;
        -webkit-font-feature-settings: "liga" on, "calt" on;
        font-feature-settings: "liga" on, "calt" on;
    }
`,

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '18px 20px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
        black: '#65727f',
        red: '#bf616a',
        green: '#98be8c',
        yellow: '#ebcb8b',
        blue: '#8fa1b3',
        magenta: '#b48ea7',
        cyan: '#96b5b4',
        white: '#c0c5ce',
        lightBlack: '#65727f',
        lightRed: '#bf616a',
        lightGreen: '#98be8c',
        lightYellow: '#ebcb8b',
        lightBlue: '#8fa1b3',
        lightMagenta: '#b48ea7',
        lightCyan: '#96b5b4',
        lightWhite: '#c0c5ce'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: "zsh"

    // for advanced config flags please refer to https://hyperterm.org/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
