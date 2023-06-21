module.exports = {
  prefix: 'cbx-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        lg: '20px'
      }
    },
    extend: {
      fontFamily: {
        'display': ['KH Teka'],
        body: ['ModelStandard_SemiMono_Variable', 'Roboto']
      },
      fontSize: {
        'xss': ['10px', '16px'],
        '11': ['11px', '14px'],
        'xls': ['22px', '33px'],
        '5xls': ['44px', '42px']
      },
      colors: {
        'offWhite': '#EFEFEF',
        'beigeLight': '#F5F2EB',
        'beige': '#ECE4D5',
        'green': '#1E271D',
        'green2': '#202918',
        'green3': '#464F43',
        'green4': '#6C7668',
        'green5': '#9EA89A',
        'green6': '#DFE1DE'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
